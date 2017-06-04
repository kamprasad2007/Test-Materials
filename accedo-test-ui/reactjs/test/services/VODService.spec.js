"use strict";

var chai = require('chai');
var should = chai.should();
var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

import VODService from '../../src/js/services/VODService';


describe('VOD Service', () => {

    describe('getData()', () =>{

        //arrange
        let vodService,
            endpointUrl = 'http://localhost:3000/api/videos',
            mock,
            respondData = [{
                                "id":"0",
                                "title":"One Direction: This Is Us",
                            },
                            {
                                "id":"1",
                                "title":"Lee Daniels' The Butler",
                            }];

        beforeEach(() => {
            //new instant of VODService
            vodService = new VODService(endpointUrl);

            //mock GET /api/videos request
            mock = new MockAdapter(axios);
            mock.onGet().reply(200, respondData);
        });

        it('should return all the vidoes', (done) => {
            
            //act
            let promise = vodService.getData();
            
            //assert
            promise.then(data => {
                data.should.be.an('array');
                data.should.have.lengthOf(2);
                done();
            });
        });
    });

});