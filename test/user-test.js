"use strict";

let chai = require('chai'),
    chaiAsPromised = require("chai-as-promised"),
    should = require('chai').should(),
    expect = require('chai').expect,
    assert = require('assert'),
    supertest = require('supertest'),
    request = require('superagent'),
    User = require('../app/models/user.js');

chai.use(chaiAsPromised);

describe('User object',function(){
    it('should be a valid user object', function(done){
       let user = new User("js223kz", "Falsterbo", 1.2345677, 1.4567899);
        expect(user).to.be.an('object');
        expect(user._city).to.equal("Falsterbo");
        expect(user._userName).to.equal("js223kz");
        expect(user._lat).to.equal(1.2345677);
        expect(user._long).to.equal(1.4567899);
        done();
    });
    
   it('should not be valid with empty username', function(done){
        function withoutUserName() {
            new User(" ", "Falsterbo", 1.2345677, 1.4567899)
        }
        expect(withoutUserName).to.throw;
        done();
    });
    
    it('should not be valid with empty city', function(done){
        function withoutCity() {
            new User("js223kz", " ", 1.2345677, 1.4567899)
        }
        expect(withoutCity()).to.throw;
        done();
    });
    
    it('should not be valid with empty latitude', function(done){
        function withoutLat() {
            new User("js223kz", "Falsterbo"," ", 1.4567899)
        }
        expect(withoutLat()).to.throw;
        done();
    });
    
    it('should not be valid with empty longitude', function(done){
        function withoutLon() {
            new User("js223kz", "Falsterbo", 1.4567899, "")
        }
        expect(withoutLon()).to.throw;
        done();
    });
    
    it('should only accept numeric latitude', function(done){
        function notNumeric() {
            new User("js223kz", "Falsterbo","jkashjahk", 1.4567899)
        }
        expect(notNumeric()).to.throw;
        done();
    });
    
    it('should only accept numeric longitude', function(done){
        function notNumeric() {
            new User("js223kz", "Falsterbo", 1.4567899, "jfjiwjefoji")
        }
        expect(notNumeric()).to.throw;
        done();
    });
    
});
