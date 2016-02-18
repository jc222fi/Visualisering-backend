"use strict";
let chai = require('chai'),
    chaiAsPromised = require("chai-as-promised"),
    should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    request = require('superagent'),
    UserApi = require('../app/models/user-api'),
    user = require('../app/models/user'),
    osm = require('../app/models/open-street-map-api');

chai.use(chaiAsPromised);


describe('Create User with data from api', function(){
    let username = undefined;
    let city = undefined;
    let lat = undefined;
    let lng = undefined;
    
    let userApi = new UserApi();

    it('should chain api calls to create a user object',function(done){
            userApi.getUsers().then(function(data){
            data.forEach(function(element){
                username = element.github;
                city = element.city;
                osm.getLatLong(element.city).then(function(positionData){
                    positionData.forEach(function(position){
                        if(position.type === 'city'){
                            lat = position.latitude;
                            lng = position.longitude;
                        }
                    });
                let user = new User(username, city, lat, lng);
                console.log(user);
                expect(user.userName).to.not.equal(undefined);
                expect(user.city).to.not.equal(undefined);
                expect(user.longitude).to.not.equal(undefined);
                expect(user.latitude).to.not.equal(undefined);
                });               
            })
        })
    done();
    })
});
