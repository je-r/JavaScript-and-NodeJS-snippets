// Node.js-npm-install-from-JavaScript

const npm = require('npm');

try {
  console.log("type="+ typeof npm.command );
}
catch(error) {
  console.error(error);
}
