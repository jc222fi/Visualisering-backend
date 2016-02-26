"use strict";
var express = require("express"),
    routes = require('./app/routes.js'),
    ejs = require('ejs'),
    websocket = require('./app/controller/websocket.js'),
    http = require('http'),
    app,
    server;

app = express();
app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname+'/app/view/'));
app.set('views', __dirname + '/app/view/');


//This line should be removed when
//students json is reaquested
//from remote source
app.use("/files", express.static(__dirname + '/files'));

app.use("/models", express.static(__dirname + '/models'));


//view engine = ejs
app.set('view engine', 'ejs');

 
routes(app);

//startar servrar
    server = exports.server = http.createServer(app);
    websocket.startWebsocketServer();

var start = exports.start = function(){
    server.listen(app.get('port'));
    console.log('server');
   
};

var stop = exports.stop = function(){
    console.log('close');
    server.close();
};

start();