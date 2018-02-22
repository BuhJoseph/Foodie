$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("Javascript connected!");
	$('#chat').find('.send').click(sendText);
}

function sendText(e){
  e.stopImmediatePropagation();
  e.preventDefault();

  console.log(this);

  var text = document.getElementById('chatbox').value;
  var chat = document.createElement('div');
  chat.innerHTML = text;
  chat.className = 'chatText';
  var container = document.getElementById('chatContainer');
}