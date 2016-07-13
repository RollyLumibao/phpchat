(function(){

    var user = [];
    var messages = [];
    var $joinchat = $('#joinchat');
    var $userForm = $('#userForm');
    var $messageFormArea= $('#messageFormArea');
    var $messageForm= $('#messageForm');
    var $Message = $('#Message');




//Connect to websocket

    var conn = new WebSocket('ws://localhost:8080');
    conn.onopen = function(e) {
/*        updateUser(user);*/

        console.log( "Connection established!");
    };

    conn.onmessage = function(e) {
        var msg = JSON.parse(e.data);
        updateMessages(msg);

    };

    var messages_template = Handlebars.compile($('#messages-template').html());
    var user_template = Handlebars.compile($('#user-template').html());

// chat box update
    function updateMessages(msg){
        messages.push(msg);
        var messages_html = messages_template({'messages': messages});
        $('#messages').html(messages_html);
        $("#messages").animate({ scrollTop: $('#messages')[0].scrollHeight}, 100);
    }
        function updateUser(){
        var user_html = user_template({'user': user});
         $('#user').html(user_html);
         $("#user").html(user_html);

/*        $("#online").animate({ scrollTop: $('#user')*/

/*        $('#online').html(user_html);*/
    }

/*
    var user_template = Handlebars.compile($('#user-template').html());

// online user box update
    function updateUser(user){
        user.push(user);
        var user_html = user_template({'user': user});
        $('#user').html(user_html);
    }
//join chat  */


    $joinchat.click(function(){
        user = $('#user').val();
        $userForm.addClass('hidden');
        $messageFormArea.removeClass('hidden');

        var msg = {
            'user': user,
            'text': user + ' entered the room',
            'time': moment().format('hh:mm a')
        }; 
        updateMessages(msg);
        conn.send(JSON.stringify(msg));
        updateUser();
        console.log( "Welcome " +user);




/*
        $('#user').val('');.
            var user ={
            'user':user
        };

        updateUser(user);       */

    });


//send chat

    $Message.click(function(){

        var text = $('#msg').val();
        var msg = {
            'user': user,
            'text': text,
            'time': moment().format('hh:mm a')
        };
        updateMessages(msg);
        conn.send(JSON.stringify(msg));

        $('#msg').val('');
    });



/*
    $Message.keypress(function(e){
        if(e.which)

        var text = $('#msg').val();
        var msg = {
            'user': user,
            'text': text,
            'time': moment().format('hh:mm a')
        };
        updateMessages(msg);
        conn.send(JSON.stringify(msg));

        $('#msg').val('');
    });
*/
})();