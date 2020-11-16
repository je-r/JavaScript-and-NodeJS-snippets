const express = require('express')
const app = express();

var sslRedirect = require('./ssl-redirect');


  app.disable('x-powered-by');

  var environment  = 'production'; /* 'other' 'development', 'production'*/
  
  app.use(sslRedirect({
      environment,
      www: false,
      status: 301
  }));
