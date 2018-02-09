'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	// name listener
	$(".food#preview left").click(swipeLeft);
  $(".food#preview right").click(swipeRight);
  $(".food#preview dislike").click(swipeLeft);
  $(".food#preview like").click(swipeRight);
}

function swipeLeft(e) {
  e.preventDefault();
}

function swipeRight(e) {
  e.preventDefault();
}
