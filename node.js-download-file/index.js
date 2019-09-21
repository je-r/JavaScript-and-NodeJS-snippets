const http = require('https'); // use 'http' for URLs without https
const fs = require('fs');

const file = fs.createWriteStream("tf.min.js");
const request = http.get("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.0/dist/tf.min.js", function(response) {
  response.pipe(file);
  console.log("done, file downloaded");
  /* not working?
  const stats = fs.statSync("tf.min.js");
  const fileSizeInBytes = stats.size;
  //Convert the file size to megabytes (optional)
  const fileSizeInMegabytes = fileSizeInBytes / 1000000.0;
  console.log("done, file downloaded, size = "+ fileSizeInBytes + " MB");
  */
});