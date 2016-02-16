"use strict";

 let fs = require('fs');
    

class UserApi {
   
    
    getUsers(){
        return new Promise(function(resolve, reject){
            let request = require('request');
            //this url should be read from config file
            request.get('http://localhost:8080/files/mock-up-users.json', 
                        function (error, response, body) {
                //Check for error
                if(error){
                    reject("Problem med user-api" + error);
                }

                //Check for right status code
                if(response.statusCode !== 200){
                    reject("Problem with user-api getUsers()" + response.statusCode);
                }
                //all is good
                resolve(JSON.parse(body));
            });
        });
    } 
    createUserObject(users){
        return new Promise(function(resolve, reject){
            let User = require('/models/users.js');
            let usersArray = [];
            console.log("inne i funktionen");
            users.forEach(function(user){
                //should be an try catch when saving as User object
                //reject if catch
                let newUser = new User(user.services.github, 
                                       user.city, user.lat, user.lng);
                usersArray.push(newUser);
            });
            console.log(usersArray);
            resolve(usersArray);
        });
    }
    
    saveObjectsToFile(objectsArray){
        objectsArray.forEach(function(user){
            console.log(user);
        });
    }
}
module.exports = UserApi;
