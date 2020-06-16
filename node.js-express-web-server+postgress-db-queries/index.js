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
  var htmlCode = "test page, v2, loaded at " + new Date();
 
  pool.query(
    "SELECT * FROM tableName order "+
    "by fieldName1 desc "+
    "limit 1000",(error, results) => 
    {
      if (error) {
            throw error
      }
      htmlCode += "<br>row count: "+ results.rows.length;
      var rowsAsHTML = results.rows.map(row => 
      "<br>"+ row.fieldName1.toJSON()+
      ";"+row.fieldName2+
      ";"+row.fieldName3);
      htmlCode += rowsAsHTML;
      res.send(htmlCode);
    });
}); // app.get('/',.....)
  
  app.listen(PORT, function () {
    console.error(`Node server listening on port ${PORT}`);
  });

