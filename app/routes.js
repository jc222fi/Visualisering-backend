"use strict";
let osm = require('../app/models/open-street-map-api'),
    StudentApi = require('../app/models/student-api'),
    User = require('../app/models/user.js');

module.exports = function(app){
    app.get('/',function(req, res){
        res.send('Hej front-end');
    })
    app.get('/latlong', function(req,res){
        let username = undefined;
        let city = undefined;
        let lat = undefined;
        let lng = undefined;
        let user = undefined;

        let studentApi = new StudentApi();
        studentApi.getStudents().then(function(students){
            students.forEach(function(student){
                username = student.services.github;
                city = student.city; 
                
                osm.getLatLong(city).then(function(positionData){
                    positionData.forEach(function(position){
                        if(position.type === 'city'){
                            lat = position.lat;
                            lng = position.lon;
                            user = new User(username, city, lat, lng);
                        }
                    });
                }, function(error){
                    console.log(error.message);
                });
            });
        }, function(error){
            console.log(error.message);
        });
         res.send("hello from latlong"); 
    });
}

