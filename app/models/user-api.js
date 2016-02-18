"use strict";

 let fs = require('fs'),
     User = require('../../app/models/user'),
     request = require('request');
     
    

class UserApi {
   
    getUsers(){
        return new Promise(function(resolve, reject){
            
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
            
            let usersArray = [];
            users.forEach(function(user){
                //should be an try catch when saving as User object
                //reject if catch
                let newUser = new User(user.services.github, 
                                       user.city, user.lat, user.lng);
                usersArray.push(newUser);
            });
            resolve(usersArray);
        });
    }
    
    saveObjectsToFile(objectsArray){
        let path = '../../app/files/users.txt';
        //save users to file?
    }
}
module.exports = UserApi;
