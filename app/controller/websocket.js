var WebSocketServer = require('ws').Server;

const data = 
[
    {
        _owner: 'Visualisering',
        _commitUser:{
            _userName:"sk222sw",
            _city:"Kalmar",
            _lat:"56.665954",
            _long:"16.356824"
        },
        _timestamp: '2016-02-17T10:39:23Z',
        _code:"" 
    },
   {
        _owner: 'Visualisering',
        _commitUser:{
            _userName:"js223kz",
            _city:"Falsterbo",
            _lat:"55.397107",
            _long:"12.841880"
        },
        _timestamp: '2016-02-17T15:39:23Z',
        _code:"" 

    },
    {
        _owner: 'Visualisering',
        _commitUser:{
            _userName:"jc222fi",
            _city:"Borås",
            _lat:"57.725040",
            _long:"12.939528"
        },
        _timestamp: '2016-02-18T10:39:23Z',
        _code: ""

    },
     {
        _owner: 'Visualisering',
        _commitUser:{
            _userName:"mw222rs",
            _city:"Umeå",
            _lat:"63.829481",
            _long:"20.262560"
        },
        _timestamp: '2016-02-18T15:39:23Z',
        _code: ""

    },
    {
        _owner: 'Visualisering',
        _commitUser:{
            _userName:"rk222ev",
            _city:"Växjö",
            _lat:"56.884362",
            _long:"14.805126"
        },
        _timestamp: '2016-02-17T22:39:23Z',
        _code: ""

    }   
]

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




 /*const data = '[{"lat": 56.878655, "lng": 14.819965, "time": 300},' +
    '{"lat": 54.242091, "lng": 14.727779, "time": 1020},' +
    '{"lat": 39.399872, "lng": -8.224454, "time": 824}, ' +
    '{"lat": 0, "lng": 180, "time": 404},' +
    '{"lat": 0, "lng": 90, "time": 5083},' +
    '{"lat": 0, "lng": -90, "time": 1204}, ' +
    '{"lat": 0, "lng": 0, "time": 10}]';*/
