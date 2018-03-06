/*
 * GET home page.
 */

exports.view = function(req, res){

	var name = req.params.name; 
 	var profile = "../images/matches/mark.jpg";

  if (name == "Burger") {
    background = "../images/food/burger.png";
  } else if (name == "Sushi") {
  	background = "../images/food/sushi.jpg"
  } else if (name == "Tacos") {
  	background = "../images/food/tacos.jpeg"
  } else if (name == "Ramen") {
  	background = "../images/food/sushi.jpg"
  } else if (name == "Orange Chicken") {
  	background = "../images/food/orangechicken.jpg"
  } else if (name == "Tamales") {
  	background = "../images/food/tamales.png"
  } else if (name == "Lomo Saltado") {
  	background = "../images/food/lomosaltado.jpg"
  } else if (name == "Lamb Tikka Masala") {
  	background = "../images/food/lambtikkamasala.jpg"
  } else if (name == "Bibimbap") {
  	background = "../images/food/bibimbap.jpg"
  } else if (name == "Steak") {
  	background = "../images/food/steak.jpg"
  } else if (name == "Sushi") {
  	background = "../images/food/sushi.jpg"
  } else {
    background = "../images/food/donburi.jpeg";
  }

    res.render('foodInfo', {
      "background": background,
      "name": name
  });
};
