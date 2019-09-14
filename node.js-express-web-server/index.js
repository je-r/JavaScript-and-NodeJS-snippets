const express = require('express')

const app = express()

var server = require('http').createServer(app);
var port = 3000;

server.listen(port, function () {
    console.log('web server is running and listens at port: %d',port);
});

app.use(express.static(__dirname + '/public'));