"use strict";

let chai = require('chai'),
    expect = require('chai').expect,
    User = require('../app/models/user.js');

describe('User object',function(){
    let user = undefined;
    
    beforeEach(() => {
        user = new User("js223kz", "Falsterbo", 1.2345677, 1.4567899);
    }); 
    
     it('should return an object', () => {
        expect(user).to.be.an('object');
        expect(user).to.be.an.instanceof(User);
        
    });
    
    it('properties should be of right type', () => {
        expect(user._userName).to.be.a("string");
        expect(user._city).to.be.an('string');
        expect(user._lat).to.be.a('number');
        expect(user._lng).to.be.a('number');       
    });
    
    it('userName can not be empty', () => {
      () => {
        user.userName = '';
      }.should.throw(Error);
    });
    
    it('city can not be empty', () => {
      () => {
        user.city = '';
      }.should.throw(Error);
    });
    
    it('latitude can not be empty', () => {
      () => {
        user.lat = '';
      }.should.throw(Error);
    });
    
    it('logitude can not be empty', () => {
      () => {
        user.lng = '';
      }.should.throw(Error);
    });
    
    it('logitude can not be a string', () => {
      () => {
        user.lng = '7667812';
      }.should.throw(Error);
    });
    
    it('latitude can not be a string', () => {
      () => {
        user.lat = '7667812';
      }.should.throw(Error);
    });

    it('logitude can be a number', () => {
      () => {
        user.lng = 3.678927;
      }.should.not.throw(Error);
    });
    
     it('latitude can be a number', () => {
      () => {
        user.lat = 3.678927;
      }.should.not.throw(Error);
    });
});
