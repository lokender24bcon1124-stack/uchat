<!-- uchat-->
<!-- welcome to my live chatapp (uchat) -->
<!--index.html-->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>uchat</title>
<script defer src="http://localhost:8000/socket.io/socket.io.js"></script>
<script defer src="js/client.js"></script>
</head>
<body>
<link rel="stylesheet" href="css/style.css">
<img class="mobile-logo" src="https://moewalls.com/wp-content/uploads/2022/09/tengen-uzui-fireworks-kimetsu-no-yaiba-thumb.jpg">

<div class="container">
  <div class="message left">Hello Left</div>
  <div class="message right">Hello Right</div>
</div>
<div class="send">
  <form id="send-container" action="#">
    
   <input type="text" id="message-input">
    <button type="submit" class="btn">Send</button>

  </form>
</div>



</body>
</html>


<!--server.js-->
const io = require('socket.io')(8000, {
    cors: {
        origin: "http://127.0.0.1:5500",
        methods: ["GET", "POST"]
    }
});

const users = {};

io.on('connection', socket => {

    socket.on('new-user-joined', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message => {
        socket.broadcast.emit('receive', {
            message: message,
            name: users[socket.id]
        });
    });

    socket.on('disconnect', () => {
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });

});

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

<!--style.css-->

body{
  background: #111;
  color: white;
  font-family: Arial, sans-serif;
}

.mobile-logo {
  display: block;
  margin: 10px auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.container{
  max-width: 900px;
  margin:auto;
  height:60vh;
  overflow-y: auto;
  padding:20px;
  background-color: #222;
  border-radius: 10px;
}

.message{
  margin:10px;
  padding:10px;
  max-width: 60%;
  border-radius: 15px;
  word-wrap: break-word;
}

.left{
  float: left;
  clear:both;
  background-color: #444;
}

.right{
  float:right;
  clear:both;
  background-color: #0b93f6;
  color: white;
}

#send-container{
  text-align: center;
  margin-top: 10px;
}

#message-input{
  width: 60%;
  padding: 10px;
  border-radius: 20px;
  border: none;
}

.btn{
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  background-color: #0b93f6;
  color: white;
  cursor: pointer;
}

