'use strict';
//var foods = require('../../food.json');

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	// name listener
	$(".food-background a").click(swipe);
  $(".food-background .like").click(like);
}

/* Global variables */
//var foods = require('../food.json');
var likes = 0;
var index = 1;

var previousFood = null;


function swipe(e) {

	// Prevent following the link
  e.preventDefault();
  console.log("swipe");

	previousFood = changeFood;
	console.log("Change to food " + index);
	$.get("/food/" + index, changeFood);

	// POST
	//$.post("likeFood", {}, postCallback)


	// change the food on display
	index++;
	if(index > 9) {
		index = 1;
	}

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
  var descriptionHTML = '<h3>' + result["ethnicity"] +
	'</h3><h2>' + result["name"] + '</h2>'+ result["description"] +
	result["icons"];

  $(".food-background").attr("style","background-image: url(" + result["imageURL"] + ")");
	$(".food-description").html(descriptionHTML);

}
