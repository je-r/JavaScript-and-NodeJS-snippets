const express = require('express');
const webpack = require('webpack');
const path = require('path');

const webpackMiddleware = require('webpack-dev-middleware');

const config = require('./webpack.config.js');
const compiler = webpack(config);

// TODO complete

