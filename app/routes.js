"use strict";
var latlong = require('./models/open-street-map-api'),
    websocket = require('./controller/websocket.js');

module.exports = function(app){
    app.get('/',function(req, res){
        res.render('websocket.ejs');
    });

    app.get('/latlong',
    function(req,res){
        latlong.getLatLong('boras')
            .then(function(data){
                res.send(data);
            });
    });
}