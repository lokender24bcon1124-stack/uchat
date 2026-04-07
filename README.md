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
<img class="mobile-logo" src="https://static.vecteezy.com/system/resources/previews/014/441/078/original/phone-call-icon-design-in-blue-circle-png.png">

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

