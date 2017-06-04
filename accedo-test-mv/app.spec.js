"use strict";

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('./app');
var videoData = require('./data.json');

chai.use(chaiHttp);


describe('app',function() {
    describe('/GET', function(){
        it('should list all the videos', function(done) {

            //act
            let promise = chai.request(server).get('/api/videos');

            //assert
            promise.end(function(err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.should.have.lengthOf(videoData.data.length);
                    done();
            });
        });
    });
});