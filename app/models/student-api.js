"use strict";
var fs = require('fs');

module.exports=function(){
    return new Promise(function(resolve, reject){
        let obj;

fs.readFile('../app/example_students.json', function (err, data) {
    if (err) {reject(err);}

    obj = JSON.stringify(data);
    resolve(obj);
    });
    });
}