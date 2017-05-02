var http = require('http');
var fs = require('fs');
var server = http.createServer(function(q,s){
	if(q.url.indexOf('.html') != -1){
		fs.readFile(__dirname + 'main.html', function(e,d){
				if(e){
				console.log(e);
				}
				s.writeHead(200);
				s.write(d);
				s.end();
				});
	}
	if(q.url.indexOf('.css') != -1){
		fs.readFile(__dirname + 'main.css', function(e,d){
				if(e){console.log(e);}
				s.writeHead(200);
				s.write(d);
				s.end();
				});
	}	
		});
server.listen(8080);
