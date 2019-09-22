// Node.js-npm-install-from-JavaScript

var npm = require('npm');
npm.load(function(err) {
  // handle errors
  console.log("npm loaded");
  console.log("err="+err);

console.log("npm.cache ="+ npm.cache );

npm.cache = __dirname+"/.npm";

console.log("npm.cache ="+ npm.cache );


  // install module ffi
  npm.commands.install(['ffi'], function(er, data) {
    // log errors or data
    console.error(er);
  });
  
  

  npm.on('log', function(message) {
    // log installation progress
    console.log(message);
  });
});

/*
try {
  console.log("type="+ typeof npm.command );
}
catch(error) {
  console.error(error);
}
*/