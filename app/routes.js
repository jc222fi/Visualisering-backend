"use strict";
var latlong = require('./models/open-street-map-api');

module.exports = function(app){
    app.get('/',function(req, res){
        res.send('Hej front-end');
    });
    app.get('/latlong',
    function(req,res){
        latlong.getLatLong('boras')
            .then(function(data){
                res.send(data);
            });
    });

    app.get('/websockets',
    function(req,res){
        res.render('websocket.ejs');
    });
}