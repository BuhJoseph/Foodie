/*
 * GET match page.
 */

var matches2 = require("../match2.json");

exports.view = function(req, res){
  res.render('matchprofile', matches2);
};
