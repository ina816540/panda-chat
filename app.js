// app.js

const socket = new WebSocket('ws://localhost:3000');

socket.onopen = function(event) {
  console.log('Conexión WebSocket establecida');
};

socket.onmessage = function(event) {
  const data = JSON.parse(event.data);
  addMessage(data.sender, data.message);
};

function sendMessage(message) {
  const data = {
    sender: 'You',
    message: message
  };
  socket.send(JSON.stringify(data));
}

function addMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.classList.add(sender);
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  document.querySelector('.chat-messages').appendChild(messageElement);
}

document.getElementById('send-button').addEventListener('click', function() {
  const message = document.getElementById('message-input').value.trim();
  if (message !== '') {
    addMessage('You', message);
    sendMessage(message);
    document.getElementById('message-input').value = '';
  }
});
