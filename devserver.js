var connect = require('connect')
var http = require('http')

var app = connect()

var morgan = require('morgan');
app.use(morgan('dev'));

var serveStatic = require('serve-static');
app.use(serveStatic(__dirname));

//create node.js http server and listen on port
http.createServer(app).listen(3000)

console.log('started server at http://localhost:3000');
