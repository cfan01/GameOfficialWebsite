	//var Basic_Form_Nonmove_Options=["GBID","�ʺ�","���U�J�f","�|���ŧO","�ثeG��"];
	var arrContent = [];
	var LoginAccounts;
  var avail_options;
  var selected_options;
	/*var AID = '<%= Account_ID %>';*/
	//alert('basic_report aid = '+aid);

  function genField(classify)
  {
  	//alert(classify);
  	if(classify=='Available')
  	{
  	  var $el = $("#avail_fields");
      $el.empty(); // remove old options
      $.getJSON('/js/data2.json', function(data) {
      	//alert(JSON.stringify(data));
      	//JSON.parse(data);
        $.each(data.Available_Field_Options, function(i,v) {
        	//alert(i);
        	//alert(Object.keys(v)[0]);
        	//alert(v[Object.keys(v)]);
        	var exclude=0;
        	$.each(data.Basic_Form_Selected_Field_Options, function(j,val) {
        	  //if(value=="GBID" || value=="�ʺ�" || value=="���U�J�f" || value=="�|���ŧO" || value=="�ثeG��")
        	  //alert(Object.keys(val));
        	  if(Object.keys(v)[0]==Object.keys(val)[0])
        	  {
        	  	exclude=1;
        	  	return;
        	  }
        	});
        	//alert('exclude = '+exclude);
          if(!exclude)
          {
            $el.append($("<option></option>").attr("value", v[Object.keys(v)[0]]).text(Object.keys(v)[0]));
          }
          //alert('### Available ###');
        });
      });
    }
  	if(classify=='Selected')
  	{
  	  var $el = $("#selected_fields");
      $el.empty(); // remove old options
      $.getJSON('/js/data2.json', function(data) {
        $.each(data.Basic_Form_Selected_Field_Options, function(i,v) {
        	var unmovable=0;
        	$.each(data.Basic_Form_Nonmove_Options, function(j,val) {
        	  //if(value=="GBID" || value=="�ʺ�" || value=="���U�J�f" || value=="�|���ŧO" || value=="�ثeG��")
        	  //alert(Object.keys(val));
        	  if(Object.keys(v)[0]==Object.keys(val)[0])
        	  {
        	  	unmovable = 1;
        	  	return;
        	  }
        	});
          if(unmovable)
          {
        	  $el.append($("<option></option>").attr("value", v[Object.keys(v)[0]]).text('*'+Object.keys(v)[0]).css("color","red"));
        	  //$el.append($("<option></option>").attr("value", i).text('*'+value).addClass('redText'));
        	}
          else
          {
            $el.append($("<option></option>").attr("value", v[Object.keys(v)[0]]).text(Object.keys(v)[0]));
          }
          //alert('### Selected ###');
          //alert($('#selected_fields option').length);
        });
        //genField('FilterLists');
      });
    }
  	if(classify=='FilterLists')
  	{
  		selected_options = [];
  		//alert('### FilterLists ###');
  		//alert('FilterLists selected_options length--> '+ $('#selected_fields option').length);
      $('#selected_fields option').each(function() {
      	var jsonstr={};
        //alert('FilterLists jsonstr --> '+JSON.stringify(jsonstr));
        jsonstr[this.text]=this.value;
        selected_options.push(jsonstr);
        //alert('FilterLists --> '+JSON.stringify(selected_options));
        //alert('### FilterLists ###');
      });
      //alert('genFilterLists(selected_options) => '+JSON.stringify(selected_options));
      genFilterLists(selected_options);
    }
  }
/*
  async.series([
     function(cb){
     	genField('Available');
     	cb()
     },
     function(cb){
     	genField('Selected');
     	cb()
     },
     function(cb){
     	genField('FilterLists');
     	cb()
     },
    ],function(err, results){
       //alert(results);
  });
*/
  genField('Available');
  genField('Selected');
  //genField('FilterLists');

/*  var opt={
  	        dateFormat: 'yy/mm/dd',
	          showSecond: true,
            timeFormat: 'HH:mm:ss'
          };

  $('#fregistertime').datetimepicker(opt);
  $('#tregistertime').datetimepicker(opt);
  $('#fstartsuspendedtime').datetimepicker(opt);
  $('#tstartsuspendedtime').datetimepicker(opt);
  $('#fstartgagtime').datetimepicker(opt);
  $('#tstartgagtime').datetimepicker(opt);
  $('#flastlogintime').datetimepicker(opt);
  $('#tlastlogintime').datetimepicker(opt);
  $('#flastlogouttime').datetimepicker(opt);
  $('#tlastlogouttime').datetimepicker(opt);
  $('#faccumulatedlogintime').datetimepicker(opt);
  $('#taccumulatedlogintime').datetimepicker(opt);
  $('#faccumulatedgametime').datetimepicker(opt);
  $('#taccumulatedgametime').datetimepicker(opt);
*/
	$.ajax({
		type: 'GET',
    //url: '/api/v1/accounts/<%= Account_ID %>',
    url: '/api/v1/accounts/'+aid,

	  success: function(result) {
	      console.log(JSON.stringify(result));
	      if(result.error){
	      }else{
            LoginAccounts = result;
            //alert(JSON.stringify(LoginAccounts));
            //genField('Available');
            //genField('Selected');
            //genField('FilterLists');
        }
    }
  });

  /*form = dialog.find("form").on("submit", function(event) {
     event.preventDefault();
     SaveBasicReportName();
  });*/

  function SaveCancel(n)
  {
  	if(n==1)
  	{
      //$("#save_basic").button().on("click", function() {
      dialog.dialog("open");
      //});
    }
  	if(n==2)
  	{
  		 location.reload();
    }
  }

  $.getJSON('/js/menu.json', function(d) {
  	arrContent = d.arrayContent;
  	//alert(JSON.stringify(arrContent));
  });

  dialog = $("#dialog-form").dialog({
     autoOpen: false,
     height: 160,
     width: 250,
     modal: true,
     buttons: {
       "OK": function() { SaveBasicReportForm();},
       "Cancel": function() {
         dialog.dialog( "close" );
       }
     }
     /*
     close: function() {
       //form[0].reset();
       //allFields.removeClass( "ui-state-error" );
     }*/
  });
  $(".ui-dialog-titlebar").hide();

  function showHide(id,show)
  {
  	if(show)
  	  document.getElementById(id).style.display='block';
  	else
  		document.getElementById(id).style.display='none';
  }

	function SaveBasicReportForm(){
    //alert('SaveBasicReportForm');
    avail_options = [];
    $('#avail_fields option').each(function() {
    	var jsonstr={};
    	//alert('#avail_fields option');
    	//alert('this.text = '+this.text);
    	//alert('this.value = '+this.value);
    	//avail_options.push(this.text);
    	jsonstr[this.text]=this.value;
    	//alert(JSON.stringify(jsonstr));
      avail_options.push(jsonstr);
    });
    alert(JSON.stringify(avail_options));
    selected_options = [];
    $('#selected_fields option').each(function() {
    	var jsonstr={};
      jsonstr[this.text]=this.value;
      selected_options.push(jsonstr);
      //selected_options.push({this.text:this.value});
    });
    alert(JSON.stringify(selected_options));
    //var reportforms = [];
	  var d = {};
	  var data={};
	  d.formname = $("#formname").val();
	  d.avail_fields = avail_options;
	  d.selected_fields = selected_options;
    
    //alert('data.formname = '+d.formname);
    //alert('data.avail_fields = '+d.avail_fields);
    //alert('data.selected_fields = '+d.selected_fields);

    //reportforms.push(data);
    //alert('SaveBasicReportForm reportforms >> '+JSON.stringify(reportforms));
    /*delete LoginAccounts._id;
    delete LoginAccounts.createDate;
    delete LoginAccounts.login;
    delete LoginAccounts.username;
    delete LoginAccounts.password;
    delete LoginAccounts.permission;*/
    //alert('SaveBasicReportForm LoginAccounts.property.menuLists >> '+JSON.stringify(LoginAccounts.property.menuLists));
    //LoginAccounts.property.menuLists.push({"category":"member","page":"basic_reportu","url":"/member/user1_report","content": data.formname});
    //data.property.menuLists = LoginAccounts.property.menuLists;
    //data.property.user_reportforms = reportforms;
    var len=LoginAccounts.property.user_reportforms.length;
    LoginAccounts.property.user_reportforms.push(d);
    //LoginAccounts.property.user_reportforms.push(d1);
    LoginAccounts.property.menuLists.push({"category":"member","page":"user_report","url":"/member/user"+(len+1)+"_report","content": d.formname});
    //LoginAccounts.property.menuLists.push({"category":"member","page":"user2_report","url":"/member/user2_report","content": "George"});
    data.property = LoginAccounts.property;
    //alert('SaveBasicReportForm data >> '+JSON.stringify(data));
    //alert(AID);
	  $.ajax({
	  	type: 'PUT',
	  	data: data,
	    //url: '/api/v1/accounts/<%= Account_ID %>',
	    url: '/api/v1/accounts/'+aid,

	    success: function(result) {
	        //console.log(JSON.stringify(result));
	        if(result.error){
	        }else{
              //alert('success update forms');
              location.href='/member/user'+(len+1)+'_report';
              //location.href='/member/user_report';
              /*
              $.getJSON('/js/menu.json', function(d) {
              	//var s= '{"category":"member","page":"basic_reportu","url":"/member/user1_report","content":"'+result.formname+'"}';
              	d.arrayContent.push({"category":"member","page":"basic_reportu","url":"/member/user1_report","content": result.formname});
              	console.log(JSON.stringify(d.arrayContent));
              });
              */
              //arrContent.push({"category":"member","page":"basic_reportu","url":"/member/user1_report","content": result.formname});
              //console.log(JSON.stringify(arrContent));
              //location.href='/member/user1_report';
	        }
	    }
	  });
  }

	var Rform = new Vue({
		el: '#basicformModal',
		data: {
			formname:'',
			avail_fields:'',
			selected_fields:''
		},
		methods:{
			SaveBasicReportForm: function(){
        //alert('SaveBasicReportForm');
        var avail_options = [];
        $('#avail_fields option').each(function() {
          avail_options.push(this.text);
        });

        var selected_options = [];
        $('#selected_fields option').each(function() {
          selected_options.push(this.text);
        });

		    var data = {};
		    data.formname = $("#formname").val();
		    data.avail_fields = avail_options;
		    data.selected_fields = selected_options;
        
        alert('data.formname = '+data.formname);
        alert('data.avail_fields = '+data.avail_fields);
        alert('data.selected_fields = '+data.selected_fields);
        
		    $.ajax({
		    	type: 'POST',
		    	data: data,
		      url: '/api/v1/reportforms',

		      success: function(result) {
		          console.log(JSON.stringify(result));
		          if(result.error){
                                 
		          	swal({
		          		title: "Account Modify Error!",
		          		text: result.error,
		          		type: "error",
		          		confirmButtonText: "OK" 
		          	},function(){
		          		location.reload();
		          	});
		          }else{
		          	swal({
		          		title: "Account Modify Success!",
		          		text: JSON.stringify(result),
		          		type: "success",
		          		confirmButtonText: "OK" 
		          	},function(){
                  //alert('success modify account');
		          		location.reload();
		          	});
		          }
		      }
		    });
      }
    }
  });
