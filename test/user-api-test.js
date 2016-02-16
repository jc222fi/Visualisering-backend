"use strict";
let chai = require('chai'),
    chaiAsPromised = require("chai-as-promised"),
    should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    local = supertest('http://localhost:8080'),
    app = require('../app/app');

chai.use(chaiAsPromised);
//url should be read from config file
describe('Testing user-api', function () {
    let baseUrl = '/files/mock-up-users.json';
    it('should return a 200 response', function (done) {
        local.get(baseUrl)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    
    //need help with this one should´t be green sice 
    it('should return correct properties', function (done) {
        local.get(baseUrl)
        .set('Accept', 'application/json')
        .expect(function(res) {
            var item = JSON.parse(res.responseText);
            item.should.have.property('city')
            item.should.have.property('vetefanmendenhärfinnsinte')
        })
        done();
    });
});
