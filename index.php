<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>chatapp</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/3.0.3/handlebars.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js"></script>


    <link rel="stylesheet" href="css/style.css">
</head>
<body>


    <div id="wrapper">  
       
            <div id="userForm">
            <label for="user">What's your name?</label>
            <input type="text" id="user" name="user">
            <button type="button" id="joinchat">Join Chat</button>
        </div>


            <div id="messageFormArea" class="hidden">
           <!--  <button type="button" id="leave-room">Leave</button> -->
            <div id="messages">
                <h3> Enter Messages </h3>
            </div>

 
           <div id="messageForm">
            <div id ="online"><h3>Online Users</h3>
                 <script id="user-template" type="text/x-handlebars-template">
                     {{#each user}}
                         <div class="online">
                           <span class="user">{{user}}</span>
                       </div>
                    </div>
                     {{/each}}
            </script>
            </div>
                <input type="text" id="msg" name="msg">
                <button type="button" id="Message">Send</button>
            </div>
        </div>

    </div>

    <script id="messages-template" type="text/x-handlebars-template">
        {{#each messages}}
        <div class="msg">
            <div class="time">{{time}}</div>
            <div class="details">
                <span class="user">{{user}}</span>: <span class="text">{{text}}</span>
            </div>
        </div>
        {{/each}}
    </script>
      







    <script src="main.js"></script>
</body>
</html>