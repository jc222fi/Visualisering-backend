"use strict";
var fs = require('fs');

module.exports=function(){
    return new Promise(function(resolve, reject){
        let students;

    fs.readFile('../app/example_students.json', function (error, data) {
        if (error) {
            reject(error);
        }

        students = JSON.stringify(data);
        resolve(obj);
        });
    });
}