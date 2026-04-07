<!-- client.js-->

const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');
const messageContainer = document.querySelector(".container");

// sound (optional)
const audio = new Audio('ting.mp3');

// message show function
const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message', position);
    messageContainer.append(messageElement);

    // auto scroll
    messageContainer.scrollTop = messageContainer.scrollHeight;

    if(position == 'left'){
        audio.play();
    }
}

// username
const name = prompt("Enter your name");
socket.emit('new-user-joined', name);

// join message
socket.on('user-joined', (name) => {
    append(`${name} joined the chat`, 'left');
});

// send message
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const message = messageInput.value;
    if(message.trim() === "") return;

    append(`You: ${message}`, 'right');

    socket.emit('send', message);
    messageInput.value = '';
});

// receive message
socket.on('receive', (data) => {
    append(`${data.name}: ${data.message}`, 'left');
});

// left message
socket.on('left', (name) => {
    append(`${name} left the chat`, 'left');
});

delete user[socket.id];
