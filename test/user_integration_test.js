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
    user = require('../app/models/User');


chai.use(chaiAsPromised);

/*
describe('Open file', function(){
    it('create objects with city, githubusername and lat-long',function(done){
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
});*/