console.log("starting... => "+ new Date());

const pg = require('pg');
// replace with proper one:
const connectionString = "postgres://userName:password@manny.db.elephantsql.com:5432/databaseName"

const client = new pg.Client(connectionString);

await client.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("connected to PosgressSQL server without error");
});

await client.query('INSERT INTO locations(location_name, last_change_on) values($1, $2)',
      ["test"+ new Date(), new Date()]);

await client.end();

console.log("...   ended => "+ new Date());