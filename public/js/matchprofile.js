$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("Javascript connected!");
	$("a").click(setPerson);
}



function setPerson(e){
  var userdata = JSON.parse(data);
  console.log(userdata[0]);
  var profile = {
    "profileImg": "asdf",
    "name": "asdf",
    "rating": "asdf",
    "description": "asdf",
  }

  var picture = document.getElementById("profile").style.backgroundImage;
  profile.profileImg = picture.replace('url','').replace(')','');
  profile.name = document.getElementById("name").textContent;
  profile.rating = document.getElementById("percent").textContent;
  profile.description = document.getElementById("description").textContent;

  console.log(profile);
}
