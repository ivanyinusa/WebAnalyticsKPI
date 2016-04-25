(function init_ws() {

    var websocket = require('ws')
        , wss = new websocket(('ws://192.168.1.100:8889/so_other/'));

    wss.on('connection', function(ws) {
        console.log("New client connected!");
        //wss.send('Connection successful');
    });

    wss.on('open', function() {
        wss.send('Client connected');
    });

    wss.on('close', function() {
        var websocket = require('ws')
            , wss = new websocket(('ws://192.168.1.100:8889/so_other/'));
        init_ws();
        wss.send('Client connection closed');
    });

    wss.on('message', function (evt) {
        console.log("I received message " + evt);
    });

    wss.on('error', function(err) {
        console.log("Error: " + err);
        var websocket = require('ws')
            , wss = new websocket(('ws://192.168.1.100:8889/so_other/'));
        init_ws();
        console.log("Reconnect: ");
    });

})();
