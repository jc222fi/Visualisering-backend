"use strict";
var express = require("express"),
    routes = require('./routes.js'),
    app;

app = express();
routes(app);
//startar servern

var start = function(){
    app.listen(8080);
    console.log('awesome! Just get started!');
};

module.exports = start;

