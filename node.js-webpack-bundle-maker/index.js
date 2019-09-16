const express = require('express');
const webpack = require('webpack');
const path = require('path');

//const webpackMiddleware = require('webpack-dev-middleware');

const config = require('./webpack.config.js');
const compiler = webpack(config);

//infos about running webpack compiler: https://webpack.js.org/api/node/

compiler.run((err, stats) => { // Stats Object
  // ...
  console.log("running webpack compiler...");
  if (err || stats.hasErrors()) {
    // Handle errors here
    console.log("error occured");
    console.log("err="+err);
    console.log("stats="+stats);
  }
  console.log("done processing");
});

// TODO complete
