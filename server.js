var static = require('node-static'),
    config = require('./.config.js');

var fileServer = new static.Server('./dist');

var server = require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        console.log(request.url);
        fileServer.serve(request, response);
    }).resume();
}).listen(config.all.port || 8080, function() {
  var host = server.address();
  console.log('Listening at %s:%d', host.address, host.port);
});
