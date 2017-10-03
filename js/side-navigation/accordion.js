jQuery(document).on('ready', function(e) {
	
	var winLoc = window.location.href;
	
	jQuery('#menu2 > li').each(function(){
		
		if (this.children.length > 2) {
			var anchorLink = this.children[0];
			if(anchorLink == winLoc){
				replaceImageWithUp(this.children[1]);
				var ulChild = this.children[2];
				ulChild.style.display='block';
			}
			else {
				var ulChild = this.children[2];
				var imgChild = this.children[1];
				jQuery(ulChild).children('li').each(function(){
					var anchorLink = this.children[0];
					if(anchorLink == winLoc){
						replaceImageWithUp(imgChild);
						ulChild.style.display='block';
					}
					else if (this.children.length > 2) {
						var ulChild2 = this.children[2];
						var imgChild2 = this.children[1];
						jQuery(ulChild2).children('li').each(function(){
							var anchorLink = this.children[0];
							if(anchorLink == winLoc){
								ulChild.style.display='block';
								ulChild2.style.display='block';
								replaceImageWithUp(imgChild);
								replaceImageWithUp(imgChild2);
							}
							else if (this.children.length > 2) {
								var ulChild3 = this.children[2];
								var imgChild3 = this.children[1];
								jQuery(ulChild3).children('li').each(function(){
									var anchorLink = this.children[0];
									if(anchorLink == winLoc){
										ulChild.style.display='block';
										ulChild2.style.display='block';
										ulChild3.style.display='block';
										replaceImageWithUp(imgChild);
										replaceImageWithUp(imgChild2);
										replaceImageWithUp(imgChild3);
									}
									else if (this.children.length > 2) {
										var ulChild4 = this.children[2];
										var imgChild4 = this.children[1];
										jQuery(ulChild4).children('li').each(function(){
											var anchorLink = this.children[0];
											if(anchorLink == winLoc){
												ulChild.style.display='block';
												ulChild2.style.display='block';
												ulChild3.style.display='block';
												ulChild4.style.display='block';
												replaceImageWithUp(imgChild);
												replaceImageWithUp(imgChild2);
												replaceImageWithUp(imgChild3);
												replaceImageWithUp(imgChild4);
											}
										});
									}
								});
							}
						});
					}
				});	 
			}
		}
		 
	});
});

function replaceImageWithUp(img) {

	jQuery(img).removeClass('accordion-down-img');
	jQuery(img).addClass('accordion-up-img');
	
}

function replaceImageWithDown(img) {

	jQuery(img).removeClass('accordion-up-img');
	jQuery(img).addClass('accordion-down-img');
	
}



function hideUnhideSubPages(page) {
	debugger;
	var liElement = page.parentElement;
	if (liElement.children.length > 2) {
		var ulElement = liElement.children[2];
		if (ulElement) {
			debugger;
			if (ulElement.style.display == 'block') {
				jQuery(ulElement).slideUp();
				//ulElement.style.display = 'none';
				jQuery(page).removeClass('accordion-up-img');
				jQuery(page).addClass('accordion-down-img');
			}
			else {
				hideAllChildren(liElement);
				jQuery(ulElement).slideDown();
				ulElement.style.display = 'block';
				jQuery(page).removeClass('accordion-down-img');
				jQuery(page).addClass('accordion-up-img');
			}
		}
	}
}

function hideAllChildren(liElement) {
	var ulElement = liElement.parentElement;
	if (ulElement) {
		jQuery(ulElement).children('li').each(function(){
			if (this.children.length > 2) {
				var img = this.children[1];
				var ulChild = this.children[2];
				if (ulChild) {
					jQuery(ulChild).slideUp();
					//ulChild.style.display = 'none';
					jQuery(img).removeClass('accordion-up-img');
					jQuery(img).addClass('accordion-down-img');
					//As per QA request dont close sub pages
					/*jQuery(ulChild).children('li').each(function(){
						if (this.children.length > 2) {
							var img = this.children[1];
							var ulChild = this.children[2];
							if (ulChild) {
								jQuery(ulChild).slideUp();
								//ulChild.style.display = 'none';
								var imgSrc = img.src;
								imgSrc = imgSrc.replace("up.png","down.png");
								img.src = imgSrc;
							}
						}
					});*/
				}
			}
		});	
	}
}

