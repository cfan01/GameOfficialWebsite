var ck=0;
var aid;

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
            {pageLanguage: 'zh-TW'},
            'google_translate_element'
        );
    /*
       To remove the "powered by google",
       uncomment one of the following code blocks.
       NB: This breaks Google's Attribution Requirements:
       https://developers.google.com/translate/v2/attribution#attribution-and-logos
    */

    // Native (but only works in browsers that support query selector)
    if(typeof(document.querySelector) == 'function') {
        document.querySelector('.goog-logo-link').setAttribute('style', 'display: none');
        document.querySelector('.goog-te-gadget').setAttribute('style', 'font-size: 0');
    }
    
    // If you have jQuery - works cross-browser - uncomment this
    jQuery('.goog-logo-link').css('display', 'none');
    jQuery('.goog-te-gadget').css('font-size', '0');
}
        	

function clickModalLogout()
{
	 //alert('clickModalLogout');
	 //console.log('clickModalLogout');
   $.ajax({
   	 //cache: false,
   	 type: 'GET',
     //url: '/logout/<%= Account_ID %>',
     url: '/logout/'+aid,

     success: function(result) {
     	   //alert(JSON.stringify(result));
         console.dir(JSON.stringify(result));
         if(!result.error){
         	  //alert('no error.................123');
         		document.location.href = '/';
         }
     }
   });
}

$("#logout").on("click", function() {
    clickModalLogout();
});

function checkIfUserAlreadyLogin(id)
{
	  //alert('checkIfUserAlreadyLogin');
	  //console.log('checkIfUserAlreadyLogin');
	  aid=id;
    $.ajax({
    	//cache: false,
    	type: 'GET',
      //url: '/api/v1/accounts/<%= Account_ID %>',
      url: '/api/v1/accounts/'+aid,

      success: function(result) {
      	  //alert(JSON.stringify(result));
          //console.log(JSON.stringify(result.using));
          if(!result.login.using){
          	/*
          	swal({
          		title: "Get Account Lists Failed!",
          		text: result.error,
          		type: "error",
          		confirmButtonText: "OK" 
          	},function(){
          	*/
          	document.location.href = '/logout';
          	//});
          }
          //else
          	//console.log('error@@@@@@@@@@@@@@@@@@');
      }
    });
    ck=setTimeout("checkIfUserAlreadyLogin('"+id+"')", 1000);
}
//checkIfUserAlreadyLogin();
