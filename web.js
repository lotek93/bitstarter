var express = require('express');
var fs = require( 'fs' );
//var buf = new Buffer( 65535 );

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World2!');
//  var buf =  fs.readFileSync( "index.html" );
//  var content = buf.toString();
  var content =  fs.readFileSync( "index.html" ).toString();
  response.send( content );
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
