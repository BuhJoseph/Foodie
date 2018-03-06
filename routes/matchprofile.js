/*
 * GET match page.
 */

exports.view = function(req, res){
  var name = req.params.name; 
  var profile = "../images/matches/mark.jpg";
  var background = "../images/matches/facebook.jpg";
  var description = "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.";
  console.log("The project background is: " + name);

  if (name == "Mark Zuckerberg") {
    profile = "../images/matches/mark.jpg";
    background = "../images/matches/facebook.jpg";
    description = "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.";
  } else if (name == "Godfrey Gao") {
    profile = "../images/matches/godfrey.jpg";
    background = "../images/matches/hongkong.jpg";
    description = "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.";
  } else if (name == "Chloe Kim") {
    profile = "../images/matches/chloe.jpg";
    background = "../images/matches/pyeongchang.jpg";
    description = "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.";
  } else if (name == "Pradeep Coleslaw") {
    profile = "../images/matches/khosla.jpg";
    background = "../images/food/coleslaw.jpg";
    description = "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.";
  } else if (name == "Michelle Obama") {
    profile = "../images/matches/michelle.jpg";
    background = "../images/matches/whitehouse.jpg";
    description = "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.";
  } else if (name == "Udon Musk") {
    profile = "../images/matches/elon.jpg";
    background = "../images/food/udon.jpg";
    description = "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.";
  } else if (name == "Jeff Basil") {
    profile = "../images/matches/jeff.jpg";
    background = "../images/food/basil.jpg";
    description = "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.";
  } else if (name == "Steph Curry") {
    profile = "../images/matches/steph.jpg";
    background = "../images/food/lambtikkamasala.jpg";
    description = "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.";
  } else {
    profile = "../images/matches/don.jpg";
    background = "../images/food/donburi.jpeg";
    description = "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.";
  }

  res.render('matchprofile', {
      "backgroundURL": background,
      "imageURL": profile,
      "name": name,
      "percent": "80",
      "description": "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook."
  });
}
