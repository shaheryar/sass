	jQuery(function(){
		jQuery('.portlet-journal-content').mouseover(function(){
			/* jQuery('#web-content-hover').show(); */
			jQuery('#web-content-hover').css('visibility', 'visible');
			jQuery('#web-content-hover').css('opacity', '0.5');
			jQuery('#web-content-hover').css('transition', 'opacity 0.5s linear');
			
			
		});

		jQuery('.portlet-journal-content').mouseout(function(){
		 jQuery('#web-content-hover').css('visibility', 'hidden');
		 jQuery('#web-content-hover').css('opacity', '0');
		 jQuery('#web-content-hover').css('transition', 'visibility 0s 0.5s, opacity 0.5 linear');
		});
	});
	
// Slide Show
