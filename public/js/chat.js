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
    var chatCont = document.createElement('div');
    var chat = document.createElement('div');
    var blank = document.createElement('div');
    chat.innerHTML = text;
    chat.className = 'chatText';
    chatCont.appendChild(chat);
    chatCont.className = 'textContainer';
    blank.className = 'blank';
    var container = document.getElementById('chatContainer');
    container.appendChild(chatCont);
    container.appendChild(blank);
    document.getElementById('chatbox').value = '';
  }
}