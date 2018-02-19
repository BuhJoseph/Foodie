/*
 * GET match page.
 */

exports.view = function(req, res){
  var name = req.params.name; 
  res.render('matchprofile', {
    "matches": [
    {
      "backgroundURL": "../images/matches/facebook.jpg",
      "imageURL": "../images/matches/mark.jpg",
      "name": name,
      "percent": "90",
      "description": "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.",
      "distance": "0.8"
    }
  ]});
};
