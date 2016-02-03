"use strict";
var latlong = require('./latlong.js');

module.exports = function(app){
    app.get('/',function(req, res){
        res.send('Hej front-end');
    })
    app.get('/latlong',
    function(req,res){
        latlong.getLatLong('uppsala').then(function(data){res.send(data);});
    })
}