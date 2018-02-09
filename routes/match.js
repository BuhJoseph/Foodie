/*
 * GET match page.
 */

exports.view = function(req, res){
  res.render('match', {
    "matches": [
    {
      "imageURL": "/images/food/coleslaw.jpg",
      "name": "Pradeep Coleslaw",
      "percent": "90",
      "description": "Description of person. They like to eat sushi",
      "distance": "0.8"
    },
    {
      "imageURL": "/images/food/udon.jpg",
      "name": "Udon Musk",
      "percent": "90",
      "description": "Description of person. They like to eat sushi",
      "distance": "0.8"
    },
    {
      "imageURL": "/images/food/zucchini.jpg",
      "name": "Mark Zucchiniberg",
      "percent": "90",
      "description": "Description of person. They like to eat sushi",
      "distance": "0.8"
    },
    {
      "imageURL": "/images/food/basil.jpg",
      "name": "Jeff Basil",
      "percent": "90",
      "description": "Description of person. They like to eat sushi",
      "distance": "0.8"
    },
    {
      "imageURL": "/images/food/curry.jpg",
      "name": "Steph Curry",
      "percent": "90",
      "description": "Description of person. They like to eat sushi",
      "distance": "0.8"
    }
  ]});
};
