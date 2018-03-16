/*
 * GET match page.
 */

exports.view = function(req, res){
  var name = req.params.name; 
  var profile = "../images/matches/mark.jpg";
  var background = "../images/matches/facebook.jpg";
  var description = "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.";
  console.log("The project background is: " + name);

  if (name == "Mark Zuckerberg") {
    profile = "../images/matches/mark.jpg";
    background = "../images/matches/facebook.jpg";
    description = "Computer programmer and Internet entrepreneur. I am a co-founder of Facebook, and currently operates as its chairman and chief executive officer.";
  } else if (name == "Godfrey Gao") {
    profile = "../images/matches/godfrey.jpg";
    background = "../images/matches/hongkong.jpg";
    description = "Taiwanese-born Canadian model and actor. I am the first Asian model to be signed on by luxury brand Louis Vuitton, earning the dub 'world's first Asian supermodel'";
  } else if (name == "Chloe Kim") {
    profile = "../images/matches/chloe.jpg";
    background = "../images/matches/pyeongchang.jpg";
    description = "American snowboarder. I am the youngest woman to win an Olympic snowboarding medal after winning gold in the women’s snowboard halfpipe";
  } else if (name == "Pradeep Coleslaw") {
    profile = "../images/matches/khosla.jpg";
    background = "../images/food/coleslaw.jpg";
    description = "I am an internationally renowned electrical and computer engineer, the eighth Chancellor of the University of California, San Diego, and a Distinguished Professor";
  } else if (name == "Michelle Obama") {
    profile = "../images/matches/michelle.jpg";
    background = "../images/matches/whitehouse.jpg";
    description = "Role model for women, an advocate for poverty awareness, education, nutrition, physical activity and healthy eating, and a fashion icon";
  } else if (name == "Udon Musk") {
    profile = "../images/matches/elon.jpg";
    background = "../images/food/udon.jpg";
    description = "South African-born Canadian American business magnate, investor, and engineer. I am the founder, CEO, and lead designer of SpaceX; co-founder, CEO, and product architect of Tesla, Inc.; and co-founder and CEO of Neuralink.";
  } else if (name == "Jeff Basil") {
    profile = "../images/matches/jeff.jpg";
    background = "../images/food/basil.jpg";
    description = "American technology entrepreneur, investor, and philanthropist, best known as the founder, chairman, and chief executive officer of Amazon, the world's largest online shopping retailer.";
  } else {
    profile = "../images/matches/steph.jpg";
    background = "../images/food/lambtikkamasala.jpg";
    description = "American professional basketball player for the Golden State Warriors of the NBA";
  } /*else {
    profile = "../images/matches/don.jpg";
    background = "../images/food/donburi.jpeg";
    description = "Description of person. He likes to eat sushi and chicken. He has been trying to cook but sometimes fails. Would love to cook with an experienced cook.";
  }*/

  res.render('matchprofile', {
      "backgroundURL": background,
      "imageURL": profile,
      "name": name,
      "percent": "80",
      "description": description
  });
}
