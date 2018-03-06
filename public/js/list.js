'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	// name listener
	$(".list-item .dislike").click(function(e) {
    $(this).closest(".list-item").hide();
  });

  $(".list-item .like").click(like);
}

/* Global variables */
var likes;

function like(e) {

	// Prevent following the link
  e.preventDefault();

	// increment likes
	likes = parseInt($(".like-counter").text());
  $(".like-counter").text(++likes);
	console.log("likes = " + likes);

  // hide
  $(this).closest(".list-item").hide();
}
