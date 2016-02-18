"use strict";

let chai = require('chai'),
    expect = require('chai').expect,
    Commit = require('../app/models/commit'),
    User =  require('../app/models/user');

describe('Commit object',function(){
    let user = undefined; 
    let commit = undefined;
    
    beforeEach(() => {
        user = new User("js223kz", "Falsterbo", 1.2345677, 1.4567899);
        commit = new Commit("Visualisering", user, '2011-09-06T20:39:23Z','{let person = new Person();}'); 
        //done();
    }); 
    it('should return an object', () => {
        expect(commit).to.be.an('object');
        expect(commit).to.be.an.instanceof(Commit);
        
    });
    
    it('properties should be of right type', () => {
        expect(commit._owner).to.be.a("string");
        expect(commit._commitUser).to.be.an('object');
        expect(commit._timeStamp).to.be.a('string');
        expect(commit._code).to.be.a('string');       
    });
    
    it('owner can not be empty', () => {
      () => {
        commit.owner = '';
      }.should.throw(Error);
    });
    
    it('commitUser can not be empty', () => {
      () => {
        commit.commitUser = '';
      }.should.throw(Error);
    });
    
    it('timeStamp can not be empty', () => {
      () => {
        commit.timeStamp = '';
      }.should.throw(Error);
    });
    
    it('code can not be empty', () => {
      () => {
        commit.code = '';
      }.should.throw(Error);
    });
});
