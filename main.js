(function(){

    var user;
    var messages = [];
    var $joinchat = $('#joinchat');
    var $userForm = $('#userForm');
    var $messageFormArea= $('#messageFormArea');
    var $messageForm= $('#messageForm');
    var $Message = $('#Message');
    



//Connect to websocket

    var conn = new WebSocket('ws://localhost:8080');
    conn.onopen = function(e) {
        console.log("Connection established!");
    };

    conn.onmessage = function(e) {
        var msg = JSON.parse(e.data);
        updateMessages(msg);
    };

    var messages_template = Handlebars.compile($('#messages-template').html());

// chat box update
    function updateMessages(msg){
        messages.push(msg);
        var messages_html = messages_template({'messages': messages});
        $('#messages').html(messages_html);
        $("#messages").animate({ scrollTop: $('#messages')[0].scrollHeight}, 1000);
    }


//join chat  

    $joinchat.click(function(){
        user = $('#user').val();
        $userForm.addClass('hidden');
        $messageFormArea.removeClass('hidden');

//notify users that a user entered the room

        var msg = {
            'user': user,
            'text': user + ' entered the room',
            'time': moment().format('hh:mm a')
        };

        updateMessages(msg);
        conn.send(JSON.stringify(msg));

        $('#user').val('');
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

})();