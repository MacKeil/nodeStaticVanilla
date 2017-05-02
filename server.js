var http = require('http');
var fs = require('fs');
var server = http.createServer(function (q,s) {
	if(q.url.indexOf('.html') != -1 || q.url == '/'){
		fs.readFile(__dirname + q.url, function (e,d) {
				if(e){
				console.log(e);
				}
				s.writeHead(200);
				s.write(d);
				s.write("<h1>"+ q.url +"</h1>");
				s.end();
				});
	}
	if(q.url.indexOf('.css') != -1){
		fs.readFile('main.css', function (e,d) {
				if(e){console.log(e);}
				s.writeHead(200);
				s.write(d);
				s.end();
				});
	}	
		});
server.listen(8080);
