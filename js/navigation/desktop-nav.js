var desktopnavjQuery = jQuery.noConflict();
desktopnavjQuery(document).on('ready', function(e) {	

desktopnavjQuery( '#textured-cssmenu li:has(ul)' ).doubleTapToGo();
	
	function showChildren(hoverElement) {
		if (desktopnavjQuery(window).width() > 992 ){
			if (hoverElement.children.length > 1) {
				var ulChild = hoverElement.children[1];
				ulChild.style.setProperty ("display", "block", "important");
			}
		 }
	}
	
	function hideChildren(hoverElement) {
		if (desktopnavjQuery(window).width() > 992 ){
			if (hoverElement.children.length > 1) {
				var ulChild = hoverElement.children[1];
				ulChild.style.setProperty ("display", "none", "important");
			}
		 }
	}
	
	
	desktopnavjQuery('ul.desktop-nav-ul li.desktop-nav-parent').hover(
		function(){
			showChildren(this);
		},
		function(){
			hideChildren(this);
		}
	);
	
	desktopnavjQuery('ul.desktop-nav-children li.desktop-nav-children-level1-li').hover(
		function(){
			showChildren(this);
		},
		function(){
			hideChildren(this);
		}
	);
	
	desktopnavjQuery('ul.desktop-nav-children-level2 li.desktop-nav-children-level2-li').hover(
		function(){
			showChildren(this);
		},
		function(){
			hideChildren(this);
		}
	);
	
	desktopnavjQuery('ul.desktop-nav-children-level3 li.desktop-nav-children-level3-li').hover(
		function(){
			showChildren(this);
		},
		function(){
			hideChildren(this);
		}
	);
	
	 
	
});
	
