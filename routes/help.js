/*
 * Get Login page
 */

var questions = require("../questions.json");

exports.view = function(req, res){
  res.render('help', questions);
};
