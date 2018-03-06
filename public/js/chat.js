$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("Javascript connected!");
  $('#chatsend').find('.send').click(sendText);
  $("#chatbox").on('keydown', function(e){
    if(e.keyCode === 13)
      sendText(e);
  });
}

function sendText(e){
  e.stopImmediatePropagation();
  e.preventDefault();

  console.log(this);

  var text = document.getElementById('chatbox').value;
  if(text !== ''){
    var chat = document.createElement('div');
    chat.innerHTML = text;
    chat.className = 'chatText';
    var container = document.getElementById('chatContainer');
    container.appendChild(chat);
    document.getElementById('chatbox').value = '';
  }
}