"use strict";
let chai = require('chai'),
    chaiAsPromised = require("chai-as-promised"),

    should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    request = require('superagent'),
    students = require('../app/models/student-api');


chai.use(chaiAsPromised);

describe('Open file', function(){
    it('should open file and return three objects',function(done){
        students().then(function(data) {
            expect(data[0]).to.have.property("city");
            expect(data[0]).to.have.property("github");
        }, function (err) {
                console.log(err);
        });
        done();
    });    
});
