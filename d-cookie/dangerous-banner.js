//on document ready add HTML / CSS for cookie banner 
jQuery(document).ready(function($){

	// Check cookie to see if user has previously clicked the X	
	if(getCookie('dangerous-cookie') != "true") {
		//if cookie not true, display banner
    	$('<div id="dangerous-banner" class="dangerous-banner">This site uses cookies for analytics, personalized content and ads. By continuing to browse this site, you agree to this use. <a href="#" onClick="javascript:closeBanner(); return false;">[X]</span></div>').prependTo('body');
		console.log('Cookie banner loaded...');
    	var bodyPaddingLeft = $('body').css('padding-left')
    	var bodyPaddingRight = $('body').css('padding-right')

    	if (bodyPaddingLeft != "0px"){
    	    $('head').append('<style type="text/css" media="screen">.dangerous-banner{margin-left:-'+bodyPaddingLeft+';padding-left:'+bodyPaddingLeft+';}</style>');
    	}
    	if (bodyPaddingRight != "0px"){
    	    $('head').append('<style type="text/css" media="screen">.dangerous-banner{margin-right:-'+bodyPaddingRight+';padding-right:'+bodyPaddingRight+';}</style>');
    	}
    }
    
});
//closes banner
function closeBanner()
    {
    	document.getElementById('dangerous-banner').style.display="none";
    	//set cookie that will live for 365 days so that banner will not appear on page reload
    	setCookie("dangerous-cookie", "true", 365);
    }
    
    
    //Generic setCookie function
    function setCookie(c_name, value, exdays) {
    	var exdate = new Date();
    	exdate.setDate(exdate.getDate() + exdays);
    	var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    	document.cookie = c_name + "=" + c_value;
	}

	//Generic getCookie function
	function getCookie(c_name) {
    	var i, x, y, ARRcookies = document.cookie.split(";");
    	for (i = 0; i < ARRcookies.length; i++) {
        	x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        	y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        	x = x.replace(/^\s+|\s+$/g, "");
        	if (x == c_name) {
            	return unescape(y);
        	}
    	}
	}