#!/usr/bin/env node
'use strict';
var express = require('express');
var compress = require('compression');

var PORT = 8000;

var app = express();
app.use(compress());
app.use('/', express.static('./app'));
app.listen(PORT, function() {
  console.log('Listening on port %d', PORT);
});
