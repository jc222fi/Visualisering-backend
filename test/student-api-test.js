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
