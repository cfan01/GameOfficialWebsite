
/**
 *@api {get} /user/userlist 取得使用者資訊 Request
 *@apiName GetUser
 *@apiGroup User
 *@apiVersion 1.0.0
 *
 *@apiSuccess {String} name 使用者名稱.
 *@apiSuccess {String} info 使用者資訊.
 *
 *@apiSuccessExample Example data on success:
 *{
 *	name:'Jack',
 *	info:'blahblahblah...'
 *}
 */

var ObjectID = require('mongodb').ObjectID;
var apidb = require('../../db.js').getDB('apidb');
var data = require('../../viewModel/js/menu.json');
//var data2 = require('../../viewModel/js/data2.json');
//console.log(data);
//var level = "user";

apidb.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'apidb' database");
        db.collection('accounts', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'accounts' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

exports.auth = function(req, res) {
    var account = req.body;

    console.log('auth account: ' + JSON.stringify(account));
    apidb.collection('accounts', function(err, collection) {
        collection.findOne({username:account.username}, function(err, item1) {
        	console.log('111'+JSON.stringify(item1));
        	if(item1){
        		//res.send(item);
        		console.log("--------------111------------------");
            collection.findOne({password:account.password}, function(err, item2) {
            	if(item2){
            		console.log("--------------333------------------");
            		res.send(item2);	
            	} else {
            		/* record times of password errors */
            		console.log('222'+JSON.stringify(item1));
            		item1.login.errors+=1;
            		if(item1.login.errors>=3)
            		{
            			item1.login.lock = true;
            		}
                collection.update({'_id':new ObjectID(item1._id)}, item1, {safe:true}, function(err, result) {
                  if (err) {
                      console.log('Error updating account: ' + err);
                      res.send({'error':'An error has occurred'});
                  } else {
                      console.log('' + result + ' document(s) updated');
                      //res.send(account);
                  }
                });
            		if(item1.login.lock)
            		{
            			res.send({'pw3error':'password over 3 times error.'});
            		}
            		else
            		{
            		  //res.send({'error':'auth error'});
            		  console.log("--------------444------------------");
            		  res.send({'pwerror':'password error.'});
            	  }
            	}
            });
        	}else{
        		console.log("--------------222------------------");
        		res.send({'accounterror':'account not found.'});
        	}
        });
    });
};

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving account: ' + id);
    apidb.collection('accounts', function(err, collection) {
        collection.findOne({_id:new ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};

exports.findAll = function(req, res) {
    apidb.collection('accounts', function(err, collection) {
        collection.find().toArray(function(err, items) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(items));
                //alert(JSON.stringify(items));
                res.send(items);
            }
        });
    });
};

exports.addAccount = function(req, res) {
    var account = req.body;
    console.log('Adding account: ' + JSON.stringify(account));
    account.createDate = new Date();
    console.log('222  Adding account: ' + JSON.stringify(account));
    apidb.collection('accounts', function(err, collection) {
        collection.insert(account, {safe:true}, function(err, result) {
        	console.log(result);
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result));
                res.send(result);
            }
        });
    });
}

exports.updateAccount = function(req, res) {
    var id = req.params.id;
    var account = req.body;
    console.log('Updating account: ' + id);
    console.log(JSON.stringify(account));

    apidb.collection('accounts', function(err, collection) {
        collection.update({'_id':new ObjectID(id)}, {$set:account}, {safe:true}, function(err, result) {
        //collection.update({'_id':id}, account, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating account: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                //console.log('updateAccount menuLists ...'+account.property.menuLists);
                //console.log('updateAccount user_reportforms ...'+account.property.user_reportforms);
                updateReqUserSessionInfo(req,res);
                //require('../../server.js').setMenuLists(req,res);
                //require('../../server.js').setMenuLists(account.property.menuLists,account.property.user_reportforms);
                //req.user = req.session.passport.user;
                //res.send(account);
            }
        });
    });
}

exports.deleteAccount = function(req, res) {
    var id = req.params.id;
    console.log('Deleting account: ' + id);
    apidb.collection('accounts', function(err, collection) {
        collection.remove({'_id':new ObjectID(id)}, {safe:true}, function(err, result) {
        //collection.remove({'_id':id}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}

var updateReqUserSessionInfo = function(req,res) {
    var id = req.user._id;
    console.log('updateReqUserSessionInfo Retrieving account: ' + id);
    apidb.collection('accounts', function(err, collection) {
        collection.findOne({_id:new ObjectID(id)}, function(err, item) {
        	console.log('updateReqUserSessionInfo item ==> ' + JSON.stringify(item));
        	//if(req.user.property!=item.property)
        	{
            req.login(item, function(err) {
               if (err) return;
               //console.log("After relogin: "+req.session.passport.user.changedField)
               require('../../server.js').setMenuLists(req,res);
               res.end();
            })
            //res.send(item);
            //res.end();
          }
        });
    });
}

exports.updateReqUserSessionInfo = updateReqUserSessionInfo;

exports.getAccountUsing = function(req, res) {
    var id = req.params.id;
    console.log('getAccountUsing id: '+id);
    console.log('Retrieving account: ' + id);
    apidb.collection('accounts', function(err, collection) {
        collection.findOne({_id:new ObjectID(id)}, function(err, item) {
          res.send({'using': item.login.using});
        });
    });
};

exports.setAccountUsing = function(req, res) {
    var id = req.user._id;
    console.log('Updating account: id = ' + id);
    //console.log('Updating account: req.user = ' + req.user);
    //console.log(JSON.stringify(account));
    apidb.collection('accounts', function(err, collection) {
        collection.update({'_id':new ObjectID(id)}, {$set:{"login.using": false}},{safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating account: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                //res.send(account);
            }
        });
    });
}

exports.logout = function(req, res) {
    var id = req.params.id;
    //req.user.login.using=false;
    //req.user._id = new ObjectID(id);
    //var account = req.user.login.using;
    console.log('Updating account: id = ' + id);
    //console.log('Updating account: req.user = ' + req.user);
    //console.log(JSON.stringify(account));
    apidb.collection('accounts', function(err, collection) {
        //collection.update({'_id':new ObjectID(id)}, account, {safe:true}, function(err, result) {
        //collection.update({'_id':id}, account, {safe:true}, function(err, result) {
        collection.update({'_id':new ObjectID(id)}, {$set:{"login.using": false}},{safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating account: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
                req.logout();
                //res.redirect('/');
                res.send(result);
            }
        });
    });
}

/*
exports.setPermission = function(req,res){
  console.log('setPermission => '+ JSON.stringify(req.user));
  level = req.user.permission;
  //res.end()
}

exports.getPermission = function(req,res){
  res.send(level);
  //return level;
}
*/
/*
exports.getMenuListsById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving account: ' + id);
    apidb.collection('accounts', function(err, collection) {
        collection.findOne({_id:new ObjectID(id)}, function(err, item) {
            res.send(item.property.menuLists);
        });
    });
};
*/
/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {

    var accounts = [
    {
        username: "Jack",
        password: "1234",
        permission: "user",
        //createDate: (new Date()).toISOString(),
        createDate: new Date(),
        login: {
        	//ipaddr: require('ip').address(),
        	using: false,
          times: 0,
          errors: 0,
          lock: false
          //$currentDate: {lastModified: true,"lastLogin": true}
        },
        property: {
        	menuLists:data.arrayContent,
        	user_reportforms:[]
        }
    },
    {
        username: "admin",
        password: "70444999",
        permission: "admin",
        //createDate: (new Date()).toISOString(),
        createDate: new Date(),
        login: {
        	//ipaddr: require('ip').address(),
        	using: false,
          times: 0,
          errors: 0,
          lock: false
          //$currentDate: {lastModified: true,"lastLogin": true}
        },
        property: {
        	menuLists:data.arrayContent,
        	user_reportforms:[]
        }
    }];

    apidb.collection('accounts', function(err, collection) {
        collection.insert(accounts, {safe:true}, function(err, result) {});
    });

};
