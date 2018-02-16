var foods = require('../food.json');

exports.foodInfo = function(req, res) {
	var foodID = req.params.id;
	if (foodID == "random") {
		foodID = Math.floor(Math.random() * foods.length) + 1;
	} else {
		foodID = parseInt(foodID);
	}

  	var food = foods[foodID-1]; // of by one, our first project has index 0
  	res.json(food);
}
