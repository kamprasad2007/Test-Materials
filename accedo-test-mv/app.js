"use strict";

var express = require('express');
var fs = require('fs');
var app = express();

//enable cors
app.use(function(req,res,next) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
});

// GET videos
app.get('/api/videos', function(req,res){
	let videoData = require('./data.json');
	res.send(videoData.data);
});

app.listen(3000, function() {
	console.log('Server listening on port 3000');
});

module.exports = app;