/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('list', {"foods": [
    {
      "name": "Burger",
      "cuisine-type": "American"
    },
    {
      "name": "Sushi",
      "cuisine-type": "Japanese"
    },
    {
      "name": "Tacos",
      "cuisine-type": "Mexican"
    }
  ]});
};
