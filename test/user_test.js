"use strict";
let chai = require('chai'),
    chaiAsPromised = require("chai-as-promised"),
    should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    user = require('../app/models/User');


chai.use(chaiAsPromised);


describe('User',function(){
    it('should create new user', function(done){
        user = new user("js223kz", "Falsterbo", 1.2345677, 1.4567899);
        expect(user.userName).to.equal("js223kz");
        expect(user.city).to.equal("Falsterbo");
        expect(user.lat).to.equal(1.2345677);
        expect(user.long).to.equal( 1.4567899);
        done();
    });
});



