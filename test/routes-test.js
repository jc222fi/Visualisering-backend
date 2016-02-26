'use strict';

let chai = require('chai'),
    should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    local = supertest('http://localhost:8080');


describe('Routes', function () {
    let baseUrl = '/';
    it('A get to Baseurl / should return a 200 response', function (done) {
        local.get(baseUrl)
        .set('Accept', 'application/json')
        .expect(200,done);
    });

    it('A post to /githubpush should return a 200 response', () => {
        let githubpushUrl = '/hello';
        var json = [{"test": "test"}]
        local.post(githubpushUrl)
        .set('Accept', 'application/json')
        .expect(200);   
    });
});
