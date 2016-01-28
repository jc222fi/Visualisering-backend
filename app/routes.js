"use strict";

module.exports = function(app){
    app.get('/studentsgh', function (req, res) {
        res.send('hej');
    });
}