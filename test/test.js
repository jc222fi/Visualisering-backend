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
    students = require('../app/students');

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
    it('create objects with city, githubusername and lat-long',function(done){
     //let student = {
     //        userName: undefined,
     //        city: undefined,
     //        latitude: undefined,
     //        longitude: undefined
     //    };

        students().then(function(data){
            data.forEach(function(element){
                student.userName = element.github;
                student.city = element.city;

                latlong.getLatLong(element.city).then(function(osmData){
                    osmData.forEach(function(element){
                        if(element.type === 'city'){
                            student.latitude = element.latitude;
                            student.longitude = element.longitude;
                        }
                    });
                });
            assert(student.userName !== undefined);
                assert(student.city !== undefined);
                assert(student.longitude !== undefined);
                assert(student.latitude !== undefined);
            })
        })
    done();
    })
});



