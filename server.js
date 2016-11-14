var app = require('./app');
var port = '3000';

app.set('port', port);

app.listen(port, function () {
    console.log('Server successfully started on port: ' + app.get('port'));
});

app.on('error', function(err){
    console.log('Error with code ' + err.code);
});
