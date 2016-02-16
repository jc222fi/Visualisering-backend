"use strict";
let osm = require('../app/models/open-street-map-api'),
    UserApi = require('../app/models/user-api'),
    User = require('../app/models/user');

module.exports = function(app){
    app.get('/',function(req, res){
        res.send('Hej front-end');
    })
    app.get('/latlong', function(req,res){
        let userApi = new UserApi();
        userApi.getUsers().then(function(users){
            userApi.createUserObject(users).then(function(userObjects){
                userApi.saveObjectsToFile(userObjects).then(function(){
                    
                }, function(error){
                    console.log(error);
                });
            }, function(error){
                console.log(error);
            })
        }, function(error){
            console.log(error);
        })
        res.send("hello from latlong");
    });   
}
