var WebSocketServer = require('ws').Server;

module.exports = {
    startWebsocketServer(){
        var wss = new WebSocketServer({port:8080});
        wss.on('connection',function connection(ws){
            "use strict";
            ws.on('message', function incoming(message) {
                console.log('received: %s', message);
            });
            ws.send('something');
        });
   }
}



