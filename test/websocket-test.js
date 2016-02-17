'use strict';

var expect = require('chai').expect,
    supertest = require('supertest'),
    websocket = require('../app/controller/websocket.js'),
    app = require('../app.js');


describe('Websockets', function(){
    it('should return a 200 response',function(done){
        let server = app.server;
        it('should return a 200 response', function (done) {
            local.get(server)
                .set('Accept', 'application/json')
                .expect(200,done);
        });
        done();
        });

});