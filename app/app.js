"use strict";
var express = require("express"),
    routes = require('./routes.js'),
    app,
    server;

app = express();
routes(app);
//startar servern

var start = exports.start = function(){
    server = app.listen(8080);
};

var stop = exports.stop = function(){
    server.close();
};