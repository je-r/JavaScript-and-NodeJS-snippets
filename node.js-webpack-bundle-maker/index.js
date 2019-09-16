const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');

const config = require('./webpack.config.js');
const compiler = webpack(config);

// TODO complete

