"use strict";
var request = require('request');

module.exports={
    getLatLong(city){
        return new Promise(function (resolve, reject) {
            const OSM_NOMINATIM = 'http://nominatim.openstreetmap.org/search?format=json&city=' + city;
            request.get(OSM_NOMINATIM, function (err, res) {
                let content = JSON.parse(res.body);
                console.log(content);
                for (var i = 0; i < content.length; i++) {
                    console.log(content[i]);
                }
            });

            resolve(res);
        });
    }}

