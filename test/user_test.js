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
    let user;
    
    beforeEach(function () {
        user = new User("js223kz", "Falsterbo", 1.2345677, 1.4567899);
        expect(user).to.not.equal(undefined); 
        //expect it to be object
        //expect it to have four properties
    });
    
   it('should not be valid with empty username', function(done){
        var fn = function() { user.userName = '' };
        expect(fn).to.throw(Error, 'Username must have a value');
        done();
    });
    
    it('should not be valid with empty city', function(done){
        var fn = function() { user.city = '' };
        expect(fn).to.throw(Error, 'City must have a value');
        done();
    });
    
    it('should not be valid with empty latitude', function(done){
        var fn = function() { user.lat = '' };
        expect(fn).to.throw(Error, 'Latitude must have a numeric value');
        done();
    });
    
    it('should not be valid with empty longitude', function(done){
        var fn = function() { user.long = '' };
        expect(fn).to.throw(Error, 'Longitude must have a numeric value');
        done();
    });
    
    it('should only accept numeric latitude', function(done){
        var fn = function() { user.lat = 'hkjhkjhkhk' };
        expect(fn).to.throw(Error, 'Latitude must have a numeric value');
        done();
    });
    
    it('should only accept numeric longitude', function(done){
        var fn = function() { user.long = 'ihohihohioh' };
        expect(fn).to.throw(Error, 'Longitude must have a numeric value');
        done();
    });
    
});
