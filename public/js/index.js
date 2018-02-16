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
	$(".food-image a").click(swipe);
  $(".food-image .right").click(like);
  $(".food-image .like").click(like);
}

/* Global variables */
var likes;

function swipe(e) {

	// Prevent following the link
  e.preventDefault();
  console.log("swipe");

  // change the food on display
	$.get("/food/random", changeFood);

}

function like(e) {

	// Prevent following the link
  e.preventDefault();

	// increment likes
	likes = parseInt($(".like-counter").text());
  $(".like-counter").text(++likes);
	console.log("likes = " + likes);

}

function changeFood(result) {
	console.log(result);
  var foodHTML = '<div class="container"><h3>' + result["ethnicity"] +
	'</h3><h2>' + result["name"] + '</h2>'+ result["description"] +
	result["icons"] + '</div>';

	$(".swipe-area section").removeClass();
	$(".swipe-area section").addClass(result["name"]);
	$(".food-description").html(foodHTML);

}
