
jQuery(function(){
	if(jQuery('#p_p_id_77_') != null && jQuery('#p_p_id_77_').length > 0){
		var URL = jQuery('#p_p_id_77_').find('form').attr('action');
		
		var startURL = URL.substring(0, URL.lastIndexOf('/'));
		var middleURL = "/search";
		var endURL = URL.substring(URL.indexOf('?'), URL.length);

		var finalURL = startURL + middleURL + endURL;
		jQuery('#p_p_id_77_').find('form').attr('action', finalURL);
	}
});