var data = {
  likes: []
};

/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('profile', data);
};

exports.likeFood = function(req, res) {
  var likedFood = req.body.likedFood;
  console.log("Pushed food to profile " + likedFood.name);
  data.likes.push(likedFood);
  res.send(likedFood);
};
