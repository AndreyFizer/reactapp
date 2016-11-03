var app = require('./app');
var http = require('http');
var port = process.env.PORT || '3000';

app.set('port', port);

var server = http.createServer(app);

server.listen(port);

server.on('error', function(err){
    console.log('Error with code ' + err.code);
});

server.on('listening', function(addr){
    console.log('Server successfully started on port: ' + app.get('port'));
});