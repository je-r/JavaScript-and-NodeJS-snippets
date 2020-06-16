const express = require('express');
const pg = require('pg');
var config = require('./config');
const PORT = process.env.PORT || 3011;

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const Pool = pg.Pool
const pool = new Pool({
   connectionString: config.getDBconnStr(),
   ssl: {
    rejectUnauthorized: false
  }});

const app = express();

app.get('/', function (req, res) {    
  res.set('Content-Type', 'text/html');
  var htmlCode = "test page, v1, loaded at " + new Date();
 
  pool.query('SELECT * FROM tableName', (error, results) => 
    {
      if (error) {
            throw error
      }
      htmlCode += ""+ results.rows;
      res.send(htmlCode);
    });
}); // app.get('/',.....)
  
  app.listen(PORT, function () {
    console.error(`Node server listening on port ${PORT}`);
  });

