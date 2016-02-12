"use strict";
var fs = require('fs'),
    path = require('path');

module.exports=function(){
    return new Promise(function(resolve, reject){
        let students;
        let file = path.join(__dirname, '../files/example_students.json');
        fs.readFile(file, function (error, data) {
        if (error) {
            reject(error);
        }
        students = JSON.stringify(data);
        resolve(obj);
        });
    });
}