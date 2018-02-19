/*
 * GET match page.
 */

exports.view = function(req, res){
  res.render('match', {
    "matches": [
    {
      "backgroundURL": "../images/matches/facebook.jpg",
      "imageURL": "../images/matches/mark.jpg",
      "name": "Mark Zuckerberg",
      "percent": "90",
      "description": "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.",
      "distance": "0.8"
    },
    {
      "backgroundURL": "../images/matches/hongkong.jpg",
      "imageURL": "../images/matches/godfrey.jpg",
      "name": "Godfrey Gao",
      "percent": "90",
      "description": "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.",
      "distance": "0.8"
    },
    {
      "backgroundURL": "../images/matches/pyeongchang.jpg",
      "imageURL": "../images/matches/chloe.jpg",
      "name": "Chloe Kim",
      "percent": "90",
      "description": "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.",
      "distance": "0.8"
    },
    {
      "backgroundURL": "../images/food/coleslaw.jpg",
      "imageURL": "../images/matches/khosla.jpg",
      "name": "Pradeep Coleslaw",
      "percent": "90",
      "description": "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.",
      "distance": "0.8"
    },
    {
      "backgroundURL": "../images/matches/whitehouse.jpg",
      "imageURL": "../images/matches/michelle.jpg",
      "name": "Michelle Obama",
      "percent": "90",
      "description": "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.",
      "distance": "0.8"
    },
    {
      "backgroundURL": "../images/food/udon.jpg",
      "imageURL": "../images/matches/elon.jpg",
      "name": "Udon Musk",
      "percent": "90",
      "description": "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.",
      "distance": "0.8"
    },
    {
      "backgroundURL": "../images/food/basil.jpg",
      "imageURL": "../images/matches/jeff.jpg",
      "name": "Jeff Basil",
      "percent": "90",
      "description": "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.",
      "distance": "0.8"
    },
    {
      "backgroundURL": "../images/food/lambtikkamasala.jpg",
      "imageURL": "../images/matches/steph.jpg",
      "name": "Steph Curry",
      "percent": "90",
      "description": "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.",
      "distance": "0.8"
    },
    {
      "backgroundURL": "../images/food/donburi.jpeg",
      "imageURL": "../images/matches/don.jpg",
      "name": "Donburi Norman",
      "percent": "90",
      "description": "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.",
      "distance": "0.8"
    }
  ]});
};
