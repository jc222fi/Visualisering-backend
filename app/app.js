"use strict";
var express = require("express"),
    routes = require('./routes.js'),
    ejs = require('ejs'),
    websocket = require('./controller/websocket.js'),
    app,
    server;

app = express();
app.use(express.static(__dirname+'/view/'));
app.set('views', __dirname + '/view/');

//view engine = ejs
app.set('view engine', 'ejs');

routes(app);

//startar servern

var start = exports.start = function(){
    server = app.listen(8080);
    console.log('server');
};

var stop = exports.stop = function(){
    console.log('close');
    server.close();
};

start();