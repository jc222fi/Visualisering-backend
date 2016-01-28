"use strict";
var expect = require('chai').expect,
    request = require('superagent'),
    myApp = require('../app/app.js');

describe('Sample web app', function () {
    let baseUrl = 'http://localhost:8080';

    before(function(done){
        myApp.start(done);
    });


    describe('when requested at /hello', function () {
        it('should say hello', function (done) {
            request.get(baseUrl + '/studentsgh').end(function assert(err,res){
                expect(err).to.not.be.ok;
                expect(res).to.have.property('status',200);
                expect(res.text).to.equal('Hej!');
                done();
            });
        });
    });
});
