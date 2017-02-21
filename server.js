
var Passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var express =   require("express");
var app     =   express();
var async   = require('async');
var cors = require('cors');

var bodyParser = require('body-parser')
var session = require('express-session')
//var cookieParser = require('cookie-parser')
//var os = require('os');
var ip = require('ip');
var data = require('./viewModel/js/menu.json');
// Register ejs as .html. If we did
// not call this, we would need to
// name our views foo.ejs instead
// of foo.html. The __express method
// is simply a function that engines
// use to hook into the Express view
// system by default, so if we want
// to change "foo.ejs" to "foo.html"
// we simply pass _any_ function, in this
// case `ejs.__express`.
app.engine('.html', require('ejs').__express);

// Optional since express defaults to CWD/views
app.set('views', __dirname + '/view');
//app.set('views', __dirname + '/view/temp');

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');

app.use(cors()); //Cross-Origin Resource Sharing (CORS)

// passport needs ability to serialize and unserialize users out of session
Passport.serializeUser(function (user, done) {
    console.log('----------Passport.serializeUser-------------');
    //console.log(user);
    done(null, user);
});

Passport.deserializeUser(function (user, done) {
    console.log('----------Passport.deserializeUser-------------');
    //console.log(user);
    done(null, user);
});
/*
Passport.deserializeUser(function(id, done) {
	console.log('----------Passport.deserializeUser-------------');
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
*/
var port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/doc'));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/view'));
app.use(express.static(__dirname + '/viewModel'));

//var arrayContent = [];
// As with any middleware it is quintessential to call next()
// if the user is authenticated
var isAuthenticated = function (req, res, next) {
  console.log('wwwwwww ===> req.path = '+req.path);
  console.log(req.isAuthenticated());
  console.log('isAuthenticated req.user ===> '+JSON.stringify(req.user));
  if (req.isAuthenticated())
  {
    console.log('isAuthenticated');
    next();
  }
  else
  {
    console.log('UnAuthenticated');
    //res.redirect('/index');
    res.render('index',{ Title:'User Login',
               	        Category:'login',
               	        Page:'1',
               	        //Account_ID: req.user._id,
               	        //Login_Permission: req.user.permission,
               	        //Login_User: req.user.username,
               	        //Login_Times: req.user.login.times,
               	        Content: 'login',
               	        //Has_User_Form: (req.user.property.user_reportforms>0?true:false),
               	        //UserFormContent: req.user.property.user_reportforms
              });
  }
}

var setLoginUsingtoFalse = function (req, res, next) {
  console.log('5555555555555555555555555555555555555'+JSON.stringify(req.user));
  //var loginAccount = req.user;
  req.user.login.using=false;
  req.params.id = req.user._id;
  req.body = req.user;
  return require('./api/v1/accounts').updateAccount(req,res);
  //next();
}

var setMenuLists =  function (req, res) {
  //var has_user_form = (req.user.property.user_reportforms.length >0 ? true : false);
  //console.log('setMenuLists has_user_form ==> '+has_user_form);
  //console.log('################################setMenuLists = '+JSON.stringify(arrayContent));
  for (var i=0;i<req.user.property.menuLists.length;i++)
  {
  	//console.log('arrayContent['+i+'] = '+ JSON.stringify(req.user.property.menuLists[i]));
    function eventHandler(arr) {
        return function(req, res) {
        	   //console.log('--- has_user_form ==> '+ has_user_form);
      	     res.render('temp/'+arr.page,{ Title: arr.Content,
      	     	                             Category: arr.category,
      	     	                             Page: arr.page,
      	     	                             URLs: arr.url,
      	     	                             Account_ID: req.user._id,
      	     	                             Login_Permission: req.user.permission,
      	     	                             Login_User: req.user.username,
      	     	                             Login_Times: req.user.login.times,
      	     	                             Content: arr.content,
      	     	                             User_Form_Index: req.user.property.user_reportforms,
      	     	                             UserFormContent: req.user.property.user_reportforms
      	     	                           });
        };
    }
    app.get(req.user.property.menuLists[i].url, isAuthenticated, eventHandler(req.user.property.menuLists[i]));
  }
  //app.use(Passport.initialize());
  //app.use(Passport.session());
  //Passport.authenticate('local');
}

exports.setMenuLists = setMenuLists;

var need_restart_timer = false;
var db = require('./db.js');

async.series([
    function(cb){
        db.connectDB('localhost', 27017, 'apidb',function(){
            cb()
        });
    },
    function(cb){
        var apidb = require('./db.js').getDB('apidb');

        // passport local strategy for local-login, local refers to this app
        Passport.use('local', new LocalStrategy(
            /*{
              usernameField: 'uname',
              passwordField: 'passwd'
            },
            */
            function (username, password, done) {
               apidb.collection('accounts', function(err, collection) {
                  collection.findOne({username:username, password:password}, function(err, item) {
                     if(item){
                             console.log('Found item..........');
                             return done(null, item);
                     }else{
                             console.log('Not Found item..........');
                             return done(null, false, {"message": "User not found."});
                     }
                  });
               });
            })
        );
        
        // body-parser for retrieving form data
        app.use(bodyParser.json()); 
        app.use(bodyParser.urlencoded({ extended: true }));
        
        // initialize passposrt and and session for persistent login sessions
        app.use(session({
            secret: "tHiSiSasEcRetStr",
            resave: true,
            saveUninitialized: true }));
        app.use(Passport.initialize());
        app.use(Passport.session());

        //console.log('ddddddddddddddddddddddd');
        cb()
    },
    function(cb){
       app.get('*', function (req, res, next) {
           app.use(express.static(__dirname + '/view'));
/*
           if(!req.isAuthenticated())
           {
               if (req.path === '/' || req.path === '/index' || req.path === '/register' || req.path === '/loginError1' || req.path === '/1' ||
                   req.path === '/loginError2' || req.path === '/loginError3' || req.path === '/loginError4' || req.path === '/index1' ||
                   req.path === '/demo.html' || req.path === '/TemplateData/style.css' || req.path === '/TemplateData/favicon.ico' || 
                   req.path === '/TemplateData/UnityProgress.js' || req.path === '/TemplateData/fullscreen.png' || req.path === '/Release/UnityLoader.js' || 
                   req.path === '/Release/WebGL.data' || req.path === '/Release/WebGL.js' || req.path === '/Release/WebGL.mem'||req.path === '/rank')
               {
               }
               else
                 return res.redirect('/index');
           }
           else
           {
           	 console.log('xxxxxxxxxxxxxx  req.isAuthenticated() xxxxxxxxxxxxxxxxx');
           }
*/

           next();
       });
       app.get('/index', function(req,res){
           //console.log('A-A-A-A-A');
           res.render('index',{ Title:'User Login',
                      	        Category:'login',
                      	        Page:'index',
                      	        //Account_ID: req.user._id,
                      	        //Login_Permission: req.user.permission,
                      	        //Login_User: req.user.username,
                      	        //Login_Times: req.user.login.times,
                      	        Content: 'login',
                      	        //Has_User_Form: (req.user.property.user_reportforms>0?true:false),
                      	        //UserFormContent: req.user.property.user_reportforms
                     });
       });

       app.get('/index1', function(req,res){
           //console.log('A-A-A-A-A');
           res.render('index1',{ Title:'User Login',
                      	        Category:'login',
                      	        Page:'index1',
                      	        //Account_ID: req.user._id,
                      	        //Login_Permission: req.user.permission,
                      	        //Login_User: req.user.username,
                      	        //Login_Times: req.user.login.times,
                      	        Content: 'login',
                      	        //Has_User_Form: (req.user.property.user_reportforms>0?true:false),
                      	        //UserFormContent: req.user.property.user_reportforms
                     });
       });

       app.get('/gowin2', function(req,res){
           //console.log('A-A-A-A-A');
           res.render('gowin2',{ Title:'User Login',
                      	        Category:'login',
                      	        Page:'1',
                      	        //Account_ID: req.user._id,
                      	        //Login_Permission: req.user.permission,
                      	        //Login_User: req.user.username,
                      	        //Login_Times: req.user.login.times,
                      	        Content: 'login',
                      	        //Has_User_Form: (req.user.property.user_reportforms>0?true:false),
                      	        //UserFormContent: req.user.property.user_reportforms
                     });
       });

       app.get('/rank', function(req,res){
           //console.log('A-A-A-A-A');
           res.render('rank',{ Title:'User Login',
                      	       Category:'login',
                      	       Page:'1',
                      	       //Account_ID: req.user._id,
                      	       //Login_Permission: req.user.permission,
                      	       //Login_User: req.user.username,
                      	       //Login_Times: req.user.login.times,
                      	       Content: 'login',
                      	       //Has_User_Form: (req.user.property.user_reportforms>0?true:false),
                      	       //UserFormContent: req.user.property.user_reportforms
                     });
       });

       app.get('/register', function(req,res){
           //console.log('B-B-B-B-B');
           res.render('register',{Title:'User Register'});
       });

       app.get('/loginError1', function(req,res){
           res.render('index',{Title:'User Login', ErrorCode:'查無此帳號'});
       });

       app.get('/loginError2', function(req,res){
           res.render('index',{Title:'User Login', ErrorCode:'密碼錯誤'});
       });

       app.get('/loginError3', function(req,res){
           res.render('index',{Title:'User Login', ErrorCode:'帳號已鎖定，請洽管理員'});
       });

       app.get('/loginError4', function(req,res){
           res.render('index',{Title:'User Login', ErrorCode:'此帳號已登入'});
       });

       //app.get('/', isAuthenticated, function(req,res){
       app.get('/', function(req,res){
           res.render('index',{ Title:'首頁',
           	                        Category:'backend',
           	                        Page:'home',
           	                        Content: '首頁'
           	                      });
       });

       //api
       var account = require('./api/v1/accounts');
       app.post('/api/v1/auth', account.auth);
      app.post('/login', function(req, res, next) {
        Passport.authenticate('local', function(err, user, info) {
        	console.log("456#####"+JSON.stringify(user));
          if (err) { console.log("aaaaaaaaaaaaaaaaa"); return res.send({'error':'auth failed'}); }
          //if (!user) { console.log("bbbbbbbbbbbbbbbbbbb"); return res.send({'error':'auth failed'}); }
          if (!user) { console.log("bbbbbbbbbbbbbbbbbbb"); return account.auth(req,res); }
          req.logIn(user, function(err) {
            if (err) { return next(err); }
            var loginAccount = user;
            //console.log('1...need_restart_timer = '+need_restart_timer);
            //console.log('loginAccount.login.using = '+loginAccount.login.using);
            //console.log('loginAccount.login.lock = '+loginAccount.login.lock);
            if(loginAccount.login.lock==true) return res.send({'pw3error':'password over 3 times error.'});
            if(loginAccount.login.using)
            {
            	//loginAccount.login.using = false;
              //req.params.id = loginAccount._id;
              //req.body = loginAccount;
            	account.setAccountUsing(req,res);
            	return res.send({'alreadyloginerror':'already login'});
            }
            else
            {
              var d = new Date();
              //console.log('d = '+d);
              var w='';
              var n = d.toLocaleDateString();
              //console.log('qqqqqq '+n);
              //console.log('loginAccount.login.lastLogin = '+loginAccount.login.lastLogin);
              if(loginAccount.login.lastLogin)
              {
                  w = loginAccount.login.lastLogin.toLocaleDateString();
              }
              
              //console.log('eeeee '+w);
              var k = n.localeCompare(w);
              if(!k) {
              	//console.log('EQUAL...');
                loginAccount.login.times+=1;
              }
              else
              	need_restart_timer = true;
              
              //console.log('2...need_restart_timer = '+need_restart_timer);
              if(need_restart_timer)
              {
                loginAccount.login.times=1;
                need_restart_timer = false;
              }
              //console.log('3...need_restart_timer = '+need_restart_timer);
              loginAccount.login.using = true;
              loginAccount.login.lastLogin = new Date(Date());
              loginAccount.login.errors=0;
              loginAccount.login.lock = false;
            }
            //console.log('11111111 loginAccount.property.user_reportforms = '+JSON.stringify(loginAccount.property.user_reportforms));
            //var flag =(req.user.property.user_reportforms.length >0 ? true : false);
            //setMenuLists(req.user.property.menuLists,req.user.property.user_reportforms);
            //console.log('Login Account: ' + JSON.stringify(loginAccount));
            req.params.id = loginAccount._id;
            //delete loginAccount._id;
            req.body = loginAccount;
            //console.log('8888888888888888888888888888888888888888888888888');
            return account.updateAccount(req,res);
            //res.send({'success':'auth OK','loginAccount': loginAccount});
            //return res.redirect('/users/' + user.username);
          });
        })(req, res, next);
      });

       app.get('/doc',function(req,res){
           res.sendFile(__dirname + "/doc/index.html");
       });

       app.get('/api/v1/accounts', account.findAll);
       app.get('/api/v1/accounts/:id', account.findById);
       //app.get('/api/v1/accounts/updateReqUserSessionInfo/:id', account.updateReqUserSessionInfo);
       app.post('/api/v1/accounts', account.addAccount);
       app.put('/api/v1/accounts/:id', account.updateAccount);
       app.delete('/api/v1/accounts/:id', account.deleteAccount);
       app.get('/logout/:id', account.logout);

       var wine = require('./api/v1/wines');
       app.get('/api/v1/wines', wine.findAll);
       app.get('/api/v1/wines/:id', wine.findById);
       app.post('/api/v1/wines', wine.addWine);
       app.put('/api/v1/wines/:id', wine.updateWine);
       app.delete('/api/v1/wines/:id', wine.deleteWine);

       app.get('/logout', function (req, res) {
          //console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
          req.logout();
          res.redirect('/');
       });

       app.listen(port,function(){
           console.log("Run http://localhost:"+port);
       });
       cb();
     }
],function(err, results) {
});
