
var match2 = require("C:\Users\josep_000\Desktop\CSE170\Foodie\match2.json");


$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("Javascript connected!");
	$("a").click(setPerson);
}

function setPerson(e){

  console.log(match2.matches2);
  e.preventDefault();

  var profile = {
    "profileImg": "img",
    "name": "name",
    "rating": "rating",
    "description": "description",
  }

  var profilePic = document.getElementById("profile").style.backgroundImage;
  profile.profileImg = profilePic.replace('url(','').replace(')','');
  profile.name = document.getElementById("name").textContent;
  profile.rating = document.getElementById("rating").textContent;

  match2.push(profile);
}
