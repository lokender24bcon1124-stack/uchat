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



