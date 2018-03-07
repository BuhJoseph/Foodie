//var food = require("../list.json");

/*
 * GET home page.
 */

exports.view = function(req, res){
  //food["viewAlt"] = false;
  res.render('index');
};

/*
exports.viewAlt = function(req, res){
  food["viewAlt"] = true;
  res.render('index', food);
};
*/
