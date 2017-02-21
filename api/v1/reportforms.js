
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
var data = require('../../viewModel/js/data2.json');

apidb.open(function(err, db) {
  if(!err) {
    console.log("Connected to 'apidb' database");
    db.collection('reportforms', {strict:true}, function(err, collection) {
      if (err) {
          console.log("The 'reportforms' collection doesn't exist. Creating it with sample data...");
          //populateDB();
      }
    });
  }
});

exports.findById = function(req, res) {
  var id = req.params.id;
  console.log('Retrieving reportforms: ' + id);
  apidb.collection('reportforms', function(err, collection) {
      collection.findOne({_id:new ObjectID(id)}, function(err, item) {
          res.send(item);
      });
  });
};

/*exports.getUserForms = function(req, res) {
  apidb.collection('reportforms', function(err, collection) {
      collection.findOne({"generate":"user"}, function(err, item) {
          res.send(item);
      });
  });
};*/

exports.findAll = function(req, res) {
  apidb.collection('reportforms', function(err, collection) {
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

exports.addReportForms = function(req, res) {
  var reportforms = req.body;
  console.log('addReportForms => '+JSON.stringify(req.user));
  console.log('Adding form: ' + JSON.stringify(reportforms));
  //reportforms.createDate = new Date();
  console.log('222  Adding reportforms: ' + JSON.stringify(reportforms));
  apidb.collection('accounts', function(err, collection) {
    collection.insert(reportforms, {safe:true}, function(err, result) {
    	console.log(result);
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          console.log('Success: ' + JSON.stringify(result));
          setMenuLists(req,res);
          res.send(result);
          /*
          res.render('temp/basic_reportu',{ Title: result.formname,
           	     	                             Category: 'member',
           	     	                             Page: 'user1_report',
           	     	                             Account_ID: req.user._id,
           	     	                             Login_Permission: req.user.permission,
           	     	                             Login_User: req.user.username,
           	     	                             Login_Times: req.user.login.times,
           	     	                             Content: result.formname });
          */
      }
    });
  });
}

exports.updateReportForms = function(req, res) {
  var id = req.params.id;
  var reportforms = req.body;
  console.log('Updating reportforms: ' + id);
  console.log(JSON.stringify(reportforms));
  apidb.collection('reportforms', function(err, collection) {
    collection.update({'_id':new ObjectID(id)}, reportforms, {safe:true}, function(err, result) {
    //collection.update({'_id':id}, account, {safe:true}, function(err, result) {
      if (err) {
          console.log('Error updating account: ' + err);
          res.send({'error':'An error has occurred'});
      } else {
          console.log('' + result + ' document(s) updated');
          res.send(account);
      }
    });
  });
}

exports.deleteReportForms = function(req, res) {
  var id = req.params.id;
  console.log('Deleting reportforms: ' + id);
  apidb.collection('reportforms', function(err, collection) {
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

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {

  var reportforms = [
  {
     formname: "基本報表查詢",
     avail_fields: data.Available_Field_Options,
     selected_fields: data.Basic_Form_Selected_Field_Options,
     generate: "default"
  }];

  apidb.collection('reportforms', function(err, collection) {
      collection.insert(reportforms, {safe:true}, function(err, result) {});
  });

};
