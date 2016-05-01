#!/usr/bin/env node
'use strict';
const express = require('express');
const compress = require('compression');

const PORT = 8000;

const app = express();
app.use(compress());
app.use('/', express.static('./app'));
app.listen(PORT, () => {
  console.log('Listening on port %d', PORT);
});
