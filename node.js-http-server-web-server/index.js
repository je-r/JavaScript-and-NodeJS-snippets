var httpServer = require('http-server');

var theRoot = __dirname + '/public';

var server = httpServer.createServer({
        root: theRoot,
        robots: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true'
        }
      });

var port = 3000;

server.listen(port);
//this.callback(null, server);
