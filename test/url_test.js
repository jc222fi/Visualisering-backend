"use strict";
let chai = require('chai'),
    chaiAsPromised = require("chai-as-promised"),
    should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    request = require('superagent'),
    local = supertest('http://localhost:8080'),
    osm = supertest('http://nominatim.openstreetmap.org'),
    myApp = require('../app/app.js'),
    latlong = require('../app/latlong'),
    students = require('../app/students'),
    user = require('../app/models/User');


chai.use(chaiAsPromised);


describe('Testing routes', function () {
    let baseUrl = '/';
        it('should return a 200 response', function (done) {
            local.get(baseUrl)
            .set('Accept', 'application/json')
            .expect(200,done);
        });
});

describe('LatLong',function(){
    it('should eventually return a new object with lat-long added', function(done){
        latlong.getLatLong('uppsala').should.eventually.notify(200)
        latlong.getLatLong('uppsala').then(function(data){
            expect(data[0]).to.have.property("type");
        },function(err){console.log(err)});
        done();
    });
});

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

