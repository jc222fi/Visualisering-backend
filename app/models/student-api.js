"use strict";
let fs = require('fs');

class StudentApi {

    getStudents(){
        return new Promise(function(resolve, reject){
           fs.readFile('../app/files/example_students.json',
                       {encoding: 'utf8'}, function (error, data) {
                if (error) {
                    reject(error);
                }
                resolve(JSON.parse(data));
            });
        });
    }   
}
module.exports = StudentApi;
