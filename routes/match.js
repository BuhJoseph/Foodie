/*
 * GET match page.
 */

var match = require("../match.json");

exports.view = function(req, res){
  res.render('match', match);
};
