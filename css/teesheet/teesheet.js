var teesheetjQuery = jQuery.noConflict();

teesheetjQuery(window).on("pagehide", function (event, data) {
	var clientId = document.getElementById('clientId');
		if (clientId) {
			var clientIdVal = clientId.value;
			var teeTimesModuleId = document.getElementById('teeTimeModuleId').value;
			DWREngine.setAsync(false);
			PushService.removeClient(function(){}, clientIdVal, teeTimesModuleId);
			DWREngine.setAsync(true);
		} 
});

function disablePlayers(maxParticipantsPerSlot, totalPlayersReservationsDone) {
	maxParticipantsPerSlot = parseInt(maxParticipantsPerSlot);
	totalPlayersReservationsDone = parseInt(totalPlayersReservationsDone);
	if (totalPlayersReservationsDone == 1) {
		if (maxParticipantsPerSlot == 4){
			teesheetjQuery("#playerFourDiv" ).addClass("ui-state-disabled");
		} else if (maxParticipantsPerSlot == 5){
			teesheetjQuery("#playerFiveDiv" ).addClass("ui-state-disabled");
		} else if (maxParticipantsPerSlot == 6){
			teesheetjQuery("#playerSixDiv" ).addClass("ui-state-disabled");
		}
	} else if (totalPlayersReservationsDone == 2) {
		if (maxParticipantsPerSlot == 4){
			teesheetjQuery("#playerThreeDiv" ).addClass("ui-state-disabled");
			teesheetjQuery("#playerFourDiv" ).addClass("ui-state-disabled");
		} else if (maxParticipantsPerSlot == 5){
			teesheetjQuery("#playerFourDiv" ).addClass("ui-state-disabled");
			teesheetjQuery("#playerFiveDiv" ).addClass("ui-state-disabled");
		} else if (maxParticipantsPerSlot == 6){
			teesheetjQuery("#playerFiveDiv" ).addClass("ui-state-disabled");
			teesheetjQuery("#playerSixDiv" ).addClass("ui-state-disabled");
		}
	} else if (totalPlayersReservationsDone == 3) {
		if (maxParticipantsPerSlot == 4){
			teesheetjQuery("#playerTwoDiv" ).addClass("ui-state-disabled");
			teesheetjQuery("#playerThreeDiv" ).addClass("ui-state-disabled");
			teesheetjQuery("#playerFourDiv" ).addClass("ui-state-disabled");
		} else if (maxParticipantsPerSlot == 5){
			teesheetjQuery("#playerThreeDiv" ).addClass("ui-state-disabled");
			teesheetjQuery("#playerFourDiv" ).addClass("ui-state-disabled");
			teesheetjQuery("#playerFiveDiv" ).addClass("ui-state-disabled");
		} else if (maxParticipantsPerSlot == 6){
			teesheetjQuery("#playerFourDiv" ).addClass("ui-state-disabled");
			teesheetjQuery("#playerFiveDiv" ).addClass("ui-state-disabled");
			teesheetjQuery("#playerSixDiv" ).addClass("ui-state-disabled");
		}
	} else if (totalPlayersReservationsDone == 4) {
		if (maxParticipantsPerSlot == 5){
			teesheetjQuery("#playerTwoDiv" ).addClass("ui-state-disabled");
			teesheetjQuery("#playerThreeDiv" ).addClass("ui-state-disabled");
			teesheetjQuery("#playerFourDiv" ).addClass("ui-state-disabled");
			teesheetjQuery("#playerFiveDiv" ).addClass("ui-state-disabled");
		} else if (maxParticipantsPerSlot == 6){
			teesheetjQuery("#playerThreeDiv" ).addClass("ui-state-disabled");
			teesheetjQuery("#playerFourDiv" ).addClass("ui-state-disabled");
			teesheetjQuery("#playerFiveDiv" ).addClass("ui-state-disabled");
			teesheetjQuery("#playerSixDiv" ).addClass("ui-state-disabled");
		}
	} else if (totalPlayersReservationsDone == 5) {
		teesheetjQuery("#playerTwoDiv" ).addClass("ui-state-disabled");
		teesheetjQuery("#playerThreeDiv" ).addClass("ui-state-disabled");
		teesheetjQuery("#playerFourDiv" ).addClass("ui-state-disabled");
		teesheetjQuery("#playerFiveDiv" ).addClass("ui-state-disabled");
		teesheetjQuery("#playerSixDiv" ).addClass("ui-state-disabled");
	}
}


function selectPlayersSelected(index) {
	if (index == 0) {
		teesheetjQuery("a[id$='lastPlay0']").removeClass("ui-radio-off");
		teesheetjQuery("a[id$='lastPlay0']").addClass("ui-radio-on");
		teesheetjQuery("a[id$='lastPlay1']").removeClass("ui-radio-on");
		teesheetjQuery("a[id$='lastPlay2']").removeClass("ui-radio-on");
	}
	else if (index == 1) {
		teesheetjQuery("a[id$='lastPlay0']").removeClass("ui-radio-on");
		teesheetjQuery("a[id$='lastPlay1']").removeClass("ui-radio-off");
		teesheetjQuery("a[id$='lastPlay1']").addClass("ui-radio-on");
		teesheetjQuery("a[id$='lastPlay2']").removeClass("ui-radio-on");
	}
	else if (index == 2) {
		teesheetjQuery("a[id$='lastPlay0']").removeClass("ui-radio-on");
		teesheetjQuery("a[id$='lastPlay1']").removeClass("ui-radio-on");
		teesheetjQuery("a[id$='lastPlay2']").addClass("ui-radio-on");
		teesheetjQuery("a[id$='lastPlay2']").removeClass("ui-radio-off");
	}
}

function showOverlay() {
	document.getElementById('overlay').style.display = 'block';
}

function hideOverlay() {
	document.getElementById('overlay').style.display = 'none';
}

function hideCoursePopupDiv() {
	document.getElementById('courseDropDownDiv').style.display='none';
	document.getElementById('uiBlockForCourse').style.display = 'none';
}


function removeClassFromTabs() {
	teesheetjQuery("a[id$='allSlotsLink']").removeClass("tabs-active-custom");
	teesheetjQuery("a[id$='morningSlotsLink']").removeClass("tabs-active-custom");
	teesheetjQuery("a[id$='afternoonSlotsLink']").removeClass("tabs-active-custom");
	teesheetjQuery("a[id$='availableSlotsLink']").removeClass("tabs-active-custom");
	
}

function allSlotsClicked() {
	removeClassFromTabs();
	teesheetjQuery("a[id$='allSlotsLink']").addClass("tabs-active-custom");
	
}

function morningSlotsClicked() {
	removeClassFromTabs();
	teesheetjQuery("a[id$='morningSlotsLink']").addClass("tabs-active-custom");
}

function afternoonSlotsClicked() {
	removeClassFromTabs();
	teesheetjQuery("a[id$='afternoonSlotsLink']").addClass("tabs-active-custom");
}

function availableSlotsClicked() {
	removeClassFromTabs();
	teesheetjQuery("a[id$='availableSlotsLink']").addClass("tabs-active-custom");
}

function removeClassFromPlayers() {
	teesheetjQuery("a[id$='playerOneLink']").removeClass("player-tabs-link-active-custom");
	teesheetjQuery("a[id$='playerTwoLink']").removeClass("player-tabs-link-active-custom");
	teesheetjQuery("a[id$='playerThreeLink']").removeClass("player-tabs-link-active-custom");
	teesheetjQuery("a[id$='playerFourLink']").removeClass("player-tabs-link-active-custom");
	if(teesheetjQuery("a[id$='playerFiveLink']"))
		teesheetjQuery("a[id$='playerFiveLink']").removeClass("player-tabs-link-active-custom");
	if(teesheetjQuery("a[id$='playerSixLink']"))
		teesheetjQuery("a[id$='playerSixLink']").removeClass("player-tabs-link-active-custom");
}

function playerOneClicked() {
	removeClassFromPlayers();
	teesheetjQuery("a[id$='playerOneLink']").addClass("player-tabs-link-active-custom");
}

function playerTwoClicked() {
	removeClassFromPlayers();
	teesheetjQuery("a[id$='playerTwoLink']").addClass("player-tabs-link-active-custom");
	teesheetjQuery("input[id$='playerTwo']").attr("placeholder", "Second Player Name");
}

function playerThreeClicked() {
	removeClassFromPlayers();
	teesheetjQuery("a[id$='playerThreeLink']").addClass("player-tabs-link-active-custom");
	teesheetjQuery("input[id$='playerTwo']").attr("placeholder", "Second Player Name");
	teesheetjQuery("input[id$='playerThree']").attr("placeholder", "Third Player Name");
}

function playerFourClicked() {
	removeClassFromPlayers();
	teesheetjQuery("a[id$='playerFourLink']").addClass("player-tabs-link-active-custom");
	teesheetjQuery("input[id$='playerTwo']").attr("placeholder", "Second Player Name");
	teesheetjQuery("input[id$='playerThree']").attr("placeholder", "Third Player Name");
	teesheetjQuery("input[id$='playerFour']").attr("placeholder", "Fourth Player Name");
}

function playerFiveClicked() {
	removeClassFromPlayers();
	teesheetjQuery("a[id$='playerFiveLink']").addClass("player-tabs-link-active-custom");
	teesheetjQuery("input[id$='playerTwo']").attr("placeholder", "Second Player Name");
	teesheetjQuery("input[id$='playerThree']").attr("placeholder", "Third Player Name");
	teesheetjQuery("input[id$='playerFour']").attr("placeholder", "Fourth Player Name");
	teesheetjQuery("input[id$='playerFive']").attr("placeholder", "Fifth Player Name");
}

function playerSixClicked() {
	removeClassFromPlayers();
	teesheetjQuery("a[id$='playerFiveLink']").removeClass("player-tabs-link-active-custom");
	teesheetjQuery("a[id$='playerSixLink']").addClass("player-tabs-link-active-custom");
	teesheetjQuery("input[id$='playerTwo']").attr("placeholder", "Second Player Name");
	teesheetjQuery("input[id$='playerThree']").attr("placeholder", "Third Player Name");
	teesheetjQuery("input[id$='playerFour']").attr("placeholder", "Fourth Player Name");
	teesheetjQuery("input[id$='playerFive']").attr("placeholder", "Fifth Player Name");
	teesheetjQuery("input[id$='playerSix']").attr("placeholder", "Sixth Player Name");
}

function setSelectedResourceForPlayer(player, resource) {
	if(resource == 'null') {
		var playerNoneLink = player + 'NoneLink';
		teesheetjQuery("a[id$='"+playerNoneLink+"']").removeClass("ui-radio-off");
		teesheetjQuery("a[id$='"+playerNoneLink+"']").addClass("ui-radio-on");
	} else {
		if (resource == 'Walk') {
			var playerWalkLink = player + 'WalkLink';
			teesheetjQuery("a[id$='"+playerWalkLink+"']").removeClass("ui-radio-off");
			teesheetjQuery("a[id$='"+playerWalkLink+"']").addClass("ui-radio-on");
		}
		else if (resource == 'Cart') {
			var playerCartLink = player + 'CartLink';
			teesheetjQuery("a[id$='"+playerCartLink+"']").removeClass("ui-radio-off");
			teesheetjQuery("a[id$='"+playerCartLink+"']").addClass("ui-radio-on");
		}
		if (resource == 'Caddy') {
			var playerCaddyLink = player + 'CaddyLink';
			teesheetjQuery("a[id$='"+playerCaddyLink+"']").removeClass("ui-radio-off");
			teesheetjQuery("a[id$='"+playerCaddyLink+"']").addClass("ui-radio-on");
		}
		if (resource == 'Pull Cart') {
			var playerPullCartLink = player + 'PullCart';
			teesheetjQuery("a[id$='"+playerPullCartLink+"']").removeClass("ui-radio-off");
			teesheetjQuery("a[id$='"+playerPullCartLink+"']").addClass("ui-radio-on");
		}
	}
}

function holes9Clicked() {
	teesheetjQuery("a[id$='holes9Link']").removeClass("ui-radio-off");
	teesheetjQuery("a[id$='holes18Link']").removeClass("ui-radio-on");
	teesheetjQuery("a[id$='holes18Link']").addClass("ui-radio-off");
	teesheetjQuery("a[id$='holes9Link']").addClass("ui-radio-on");
}

function holes18Clicked() {
	teesheetjQuery("a[id$='holes18Link']").removeClass("ui-radio-off");
	teesheetjQuery("a[id$='holes9Link']").removeClass("ui-radio-on");
	teesheetjQuery("a[id$='holes9Link']").addClass("ui-radio-off");
	teesheetjQuery("a[id$='holes18Link']").addClass("ui-radio-on");
}

function existingCCClicked() {
	teesheetjQuery("a[id$='existingCCLink']").removeClass("ui-radio-off");
	teesheetjQuery("a[id$='newCCLink']").removeClass("ui-radio-on");
	teesheetjQuery("a[id$='existingCCLink']").addClass("ui-radio-on");
}

function newCCClicked() {
	teesheetjQuery("a[id$='newCCLink']").removeClass("ui-radio-off");
	teesheetjQuery("a[id$='existingCCLink']").removeClass("ui-radio-on");
	teesheetjQuery("a[id$='newCCLink']").addClass("ui-radio-on");
}

function holesDisabled() {
	teesheetjQuery("a[id$='holes9Link']").addClass("ui-state-disabled");
	teesheetjQuery("a[id$='holes18Link']").addClass("ui-state-disabled");
}

function showCoursePicker(selectedCourseName) {
	document.getElementById('courseDropDownDiv').style.display='block';
	applyCourseCSSOnPicker(selectedCourseName);
}

function applyCourseCSSOnPicker(selectedCourseName) {
	//var courseDropDownUL = document.getElementById('courseDropDownUL');
	//alert(courseDropDownUL.innerHTML);
	teesheetjQuery("#courseDropDownUL" ).children("li").each(function() {
		if (teesheetjQuery(this).first().text() == selectedCourseName) {
			teesheetjQuery(this).find('a').addClass("tabs-active-custom"); 
		}
		else {
			teesheetjQuery(this).find('a').removeClass("tabs-active-custom"); 
		}
	});
}

function unSelectAllCourses(id) {
	teesheetjQuery("#courseDropDownUL" ).children("li").each(function() {
		teesheetjQuery(this).find('a').removeClass("tabs-active-custom"); 
	});
	teesheetjQuery('a[id="' + id + '"]').addClass("tabs-active-custom");
}

function setSlotsTabCSS(slotsTabSelected) {
	if (slotsTabSelected == "all") {
		allSlotsClicked();
	}
	else if (slotsTabSelected == "morning") {
		morningSlotsClicked();
	}
	else if (slotsTabSelected == "afternoon") {
		afternoonSlotsClicked();
	}
	else if (slotsTabSelected == "available") {
		availableSlotsClicked();
	}
	hideLoader();
}

function hidePopups() {
	teesheetjQuery("div[id$='popupDialog-popup']").hide();
	teesheetjQuery("div[id$='playerOneResourceDIV']").hide();
	teesheetjQuery("div[id$='playerTwoResourceDIV']").hide();
	teesheetjQuery("div[id$='playerThreeResourceDIV']").hide();
	teesheetjQuery("div[id$='playerFourResourceDIV']").hide();
	hideOverlay();
}

function showPlayerOneResourcePopup() {
	teesheetjQuery("div[id$='playerOneResourceDIV']").show();
}

function showPlayerTwoResourcePopup() {
	teesheetjQuery("div[id$='playerTwoResourceDIV']").show();
}

function showPlayerThreeResourcePopup() {
	teesheetjQuery("div[id$='playerThreeResourceDIV']").show();
}

function showPlayerFourResourcePopup() {
	teesheetjQuery("div[id$='playerFourResourceDIV']").show();
}

function showPlayerFiveResourcePopup() {
	teesheetjQuery("div[id$='playerFiveResourceDIV']").show();
}

function showPlayerSixResourcePopup() {
	teesheetjQuery("div[id$='playerSixResourceDIV']").show();
}

function showLastPlayPopup() {
	teesheetjQuery("div[id$='popupDialog-popup']").show();
}

function showLoader() {
	document.getElementById('loaderImage').style.display = 'block';
	document.getElementById('screenBlocker').style.display = 'block';
}

function hideLoader() {
	document.getElementById('loaderImage').style.display = 'none';
	document.getElementById('screenBlocker').style.display = 'none';
}

function showLoader() {
	document.getElementById('loaderImage').style.display = 'block';
	document.getElementById('screenBlocker').style.display = 'block';
}

function hideLoader() {
	document.getElementById('loaderImage').style.display = 'none';
	document.getElementById('screenBlocker').style.display = 'none';
}

function blockUI() {
	document.getElementById('uiBlock').style.display = 'block';
}

function blockUIForCourse() {
	document.getElementById('uiBlockForCourse').style.display = 'block';
}

function unblockUIForCourse() {
	hideCoursePopupDiv();
	teesheetjQuery("a[id$='courseNameLink']").removeClass("ui-btn-active");
}

function unblockUI() {
	document.getElementById('uiBlock').style.display = 'none';
}

function showAlert(msg) {
	teesheetjQuery("#alertPopupMessage").text(msg);
	document.getElementById('screenBlocker').style.display = 'block';
	document.getElementById('alertPopup').style.display = 'block';
	
}

function hideAlert() {
	document.getElementById('screenBlocker').style.display = 'none';
	document.getElementById('alertPopup').style.display = 'none';
}

function scrollToError() {
	teesheetjQuery('html,body').animate({scrollTop: 0});
}

function focusOnElement(id) {
	document.getElementById(id).focus();
}

function focusOutOfElement(id) {
	document.getElementById(id).blur();
}

function allowNumbersOnly(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode( key );
	var regex = /[0-9]|\./;
	if( !regex.test(key) ) {
		theEvent.returnValue = false;
	    if(theEvent.preventDefault) theEvent.preventDefault();
	}
}

function toggleBuddiesContent() {
	var buddiesContentDIV = teesheetjQuery("#buddies_contentDIV")[0];
	if (buddiesContentDIV.style.display == 'none') {
		teesheetjQuery(buddiesContentDIV).slideDown();
		teesheetjQuery(buddiesContentDIV).css("display","block");
		teesheetjQuery("a[id$='expand_DIV']").addClass('shrink_DIV');
	}
	else {
		teesheetjQuery(buddiesContentDIV).slideUp();
		teesheetjQuery("a[id$='expand_DIV']").removeClass('shrink_DIV');
	}
	
}

function showBuddiesContent() {
	debugger;
	var buddiesContentDIV = teesheetjQuery("#buddies_contentDIV")[0];
	teesheetjQuery(buddiesContentDIV).css("display","block");
	teesheetjQuery("a[id$='expand_DIV']").addClass('shrink_DIV');
}

function disableAllFieldsExceptOnePlayer(playerTwo, playerThree, playerFour, playerFive, playerSix) {
	debugger;
	teesheetjQuery("#playersRowDIV" ).addClass("ui-state-disabled");
	teesheetjQuery("#notesTextAreaDIV" ).addClass("ui-state-disabled");
	teesheetjQuery("#buddiesDIV" ).addClass("ui-state-disabled");
	teesheetjQuery("#holesDIV" ).addClass("ui-state-disabled");
	teesheetjQuery("#playerOneRowDiv" ).addClass("ui-state-disabled");
	teesheetjQuery("#playerTwoRowDiv" ).addClass("ui-state-disabled");
	teesheetjQuery("#playerThreeRowDiv" ).addClass("ui-state-disabled");
	teesheetjQuery("#playerFourRowDiv" ).addClass("ui-state-disabled");
	teesheetjQuery("#playerFiveRowDiv" ).addClass("ui-state-disabled");
	teesheetjQuery("#playerSixRowDiv" ).addClass("ui-state-disabled");
	teesheetjQuery("a[id$='uselastplayLink']").addClass("ui-state-disabled");
	if (playerTwo) {
		teesheetjQuery("#playerTwoRowDiv" ).removeClass("ui-state-disabled");
	}
	if (playerThree) {
		teesheetjQuery("#playerThreeRowDiv").removeClass("ui-state-disabled");
	}
	if (playerFour) {
		teesheetjQuery("#playerFourRowDiv" ).removeClass("ui-state-disabled");
	}
	if (playerFive) {
		teesheetjQuery("#playerFiveRowDiv" ).removeClass("ui-state-disabled");
	}
	if (playerSix) {
		teesheetjQuery("#playerSixRowDiv" ).removeClass("ui-state-disabled");
	}
	
	
}
