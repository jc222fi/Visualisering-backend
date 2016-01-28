"use strict";
var expect = require('chai').expect,
    request = require('superagent'),
    myApp = require('../app/app.js');

describe('Testing routes', function () {
    var baseUrl = 'http://localhost:8080';

    before(function(){
        myApp.start();
    });
    after(function(){
        myApp.stop();
    });

    describe('when requested at /studentsgh', function () {
        it('should say Hej!', function (done) {
            request.get(baseUrl + '/studentsgh').end(function assert(err,res){
                expect(err).to.not.be.ok;
                expect(res).to.have.property('status',200);
                expect(res.text).to.equal('Hej!');
                done();
            });
        });
    });
});
