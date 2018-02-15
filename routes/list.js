/*
 * GET home page.
 */

var food = require("../food.json");

exports.view = function(req, res){
  res.render('list', food);
};
