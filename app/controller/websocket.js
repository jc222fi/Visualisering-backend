var WebSocketServer = require('ws').Server;
const data = '[{"lat": 56.878655, "lng": 14.819965, "time": 300},' +
    '{"lat": 54.242091, "lng": 14.727779, "time": 1020},' +
    '{"lat": 39.399872, "lng": -8.224454, "time": 824}, ' +
    '{"lat": 0, "lng": 180, "time": 404},' +
    '{"lat": 0, "lng": 90, "time": 5083},' +
    '{"lat": 0, "lng": -90, "time": 1204}, ' +
    '{"lat": 0, "lng": 0, "time": 10}]';

module.exports = {
    startWebsocketServer(){
        var wss = new WebSocketServer({port:8000});
        wss.on('connection',function connection(ws){
            ws.on('message', function incoming(message) {
                console.log('received: %s', message);
            });
            ws.send(data);

        });
   }
}



