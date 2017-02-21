
$(document).ready(function(){
// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	// $('.modal-trigger').leanModal({
	// 	dismissible: false
	// });
	//$('select').material_select();
	
	var login = new Vue({
		el: '#loginModal',
		data: {
			input_account:'',
			input_captcha:'',
			//retypepassword:'',
      //permission: 'user'
      /*options: [
        { text: 'Admin', value: 'admin' },
        { text: 'User', value: 'user' }
      ]*/
		},
		methods:{

			/*userRegister: function(){
        alert('userRegister');
			  location.href = '/register';
      },*/

			clickModalRegister: function(){
        //alert('clickModalRegister');
        $("#loginModal").css("display", "none");

        if(this.input_account=='')
        {
			     swal({
			     	title: "No Empty Account!",
			     	//text: result.error,
			     	type: "error",
			     	confirmButtonText: "OK" 
			     },function(){
			     	 location.reload();
			     });
        }
        /*else if(this.password!=this.retypepassword)
        {
			     swal({
			     	title: "Password NOT confirmed!",
			     	//text: result.error,
			     	type: "error",
			     	confirmButtonText: "OK" 
			     },function(){
			     	 location.reload();
			     });
        }
        else if(!($('div ul li').hasClass("active")))
        {
			     swal({
			     	title: "Please Select Permission!",
			     	type: "error",
			     	confirmButtonText: "OK" 
			     },function(){
			     	 location.reload();
			     });
        }*/
        else
        {
        	//alert($('div ul li.active span').text().toLowerCase());
        	this.permission = $('div ul li.active span').text().toLowerCase();
  			  console.log("# showModal: "+this.username+' '+this.password+' '+this.retypepassword+' '+this.permission);

				  var data = {};
				  data.username = this.username;
				  data.password = this.password;
				  data.permission = this.permission;
				  //data.createDate = (new Date()).toISOString();
				  //alert(data.createDate);
          
				  $.ajax({
				  	type: 'POST',
				  	data: data,
			      url: '/api/v1/accounts',
                                
			      success: function(result) {
			          console.log(JSON.stringify(result));
			          if(result.error){
                                   
			          	swal({
			          		title: "Register Failed!",
			          		text: result.error,
			          		type: "error",
			          		confirmButtonText: "OK" 
			          	},function(){
			          		location.reload();
			          	});
			          }else{
			          	//alert(JSON.stringify(result));
			          	swal({
			          		title: "Register Success!",
			          		text: JSON.stringify(result),
			          		type: "success",
			          		confirmButtonText: "OK" 
			          	},function(){
                    //alert('Register Success!');
			          		location.href = '/backend/home';
			          	});
			          }
			      }
			    });
        }
			},

			clickModalLogin: function(){
				//alert('clickModalLogin');
				//$("#loginModal").css("display", "none");
				console.log("# showModal: "+this.input_account+' '+this.input_captcha);

        if(this.input_account=='')
        {
        	alert("Please input Account!");
			     /*swal({
			     	title: "Please input Account!",
			     	//text: result.error,
			     	type: "error",
			     	confirmButtonText: "OK" 
			     },function(){
			     	 //location.reload();
			     	 location.href = '/login';
			     });*/
			     //location.href = '/';
			     location.reload();
			     return;
        }
        else
        {
        	 if(!validateCode()) return;
        	 location.href = '/index1';
			  }
			}
		}
	});

  $('body').bind('keypress', function(e){
  	if (e.keyCode == 13){
  		login.clickModalLogin();
  		return false;
  	}
  });

	/*$('#loginModal').openModal({
		dismissible: false,
		opacity: 0 // Opacity of modal background
	});*/
	//$('.lean-overlay').remove();
});

