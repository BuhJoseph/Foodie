'use strict';
var food = null;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	// name listener
	$(".food-background .like").click(like);
	$(".food-background .dislike").click(dislike);

  dislike();
}

/* Global variables */
//var foods = require('../food.json');
var likes = 0;
var index = 0;

function like(e) {

	// Prevent following the link
  e.preventDefault();

	// Google Analytics event
  gtag("send", "event", "like", "click");

  // push liked food to profile
  $.get("/food/" + index, pushFood);

	// increment index to next food
	index++;
	if(index > 40) {
		index = 1;
	}

	console.log("Change to food " + index);
	$.get("/food/" + index, updateFood);

	// increment likes
	likes = parseInt($(".like-counter").text());
  $(".like-counter").text(++likes);
	console.log("likes = " + likes);

}

function dislike(e) {

	// Prevent following the link
  // e.preventDefault();

	// increment index to next food
	index++;
	if(index > 40) {
		index = 1;
	}

	console.log("Change to food " + index);
	$.get("/food/" + index, updateFood);
}

function updateFood(result) {
	console.log(result);
  var descriptionHTML = '<h3>' + result["ethnicity"] +
	'</h3><h2>' + result["name"] + '</h2>'+ result["description"] +
	result["icons"];

  $(".food-background").attr("style","background-image: url(" + result["imageURL"] + ")");
	$(".food-description").html(descriptionHTML);
}

function pushFood(result) {
	// POST
	$.post("likeFood", {likedFood: result}, postCallback) //HERE

	function postCallback(res) {
		console.log("pushed " + res.name + " to profile");
	}
}
