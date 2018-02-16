/*
 * GET home page.
 */

var food = require("../list.json");

exports.view = function(req, res){
  res.render('list', food);
};
