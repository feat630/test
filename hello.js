var http = require('http');
var url = require('url');
var topic = require('./lib/topic');
var author = require('./lib/author');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      topic.home(request, response);
    } else if(pathname === '/page'){
      topic.page(request, response);

    } else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000); 