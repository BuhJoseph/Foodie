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

	updatePage;

	// name listener
	$(".food-background a").click(updatePage);
  $(".food-background .like").click(like);
}

/* Global variables */
//var foods = require('../food.json');
var likes = 0;
var index = 1;

//var likedFood = null;

function updatePage(e) {

	// Prevent following the link
  e.preventDefault();
  console.log("update page");

  /*
	likedFood = {
    "name": "Sushi",
    "imageURL": "../images/food/sushi.jpg",
    "ethnicity": "Japanese",
    "description": "<p>Description of Food<p>",
    "icons": "<ul class='nav'><li><img src='/images/icons/timer.svg' width='40'><h6>20 Minutes</h6></li><li><img src='/images/icons/chef.png' width='40'><h6>Beginner</h6></li><li><img src='/images/icons/cart.svg' width='40'><h6>$8-$10</h6></li></ul>"
  };
	*/

	console.log("Change to food " + index);
	$.get("/food/" + index, changeFood);

	// change the food on display
	index++;
	if(index > 25) {
		index = 1;
	}

}

function like(e) {

  // Google Analytics event
  gtag("send", "event", "like", "click");
  
	// Prevent following the link
  e.preventDefault();

	// increment likes
	likes = parseInt($(".like-counter").text());
  $(".like-counter").text(++likes);
	console.log("likes = " + likes);

}

function changeFood(result) {
	console.log(result);
  var descriptionHTML = '<h3>' + result["ethnicity"] +
	'</h3><h2>' + result["name"] + '</h2>'+ result["description"] +
	result["icons"];

  $(".food-background").attr("style","background-image: url(" + result["imageURL"] + ")");
	$(".food-description").html(descriptionHTML);

	// POST
	$.post("likeFood", {likedFood: result}, postCallback) //HERE

	function postCallback(res) {
		console.log("pushed " + res.name + " to profile");
	}
}
