let http=require('http');

let server=http.createServer(function(req, res){
        if (req.url=="/"){
            res.writeHead(200, {'Content-type':'text/html'});
            res.write('<h1>This is Home Page</h1>')
            res.end();
        }
        else if(req.url=="/about"){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('<h1>This is About Page</h1>')
            res.end();
        }
        else if(req.url=='/contact'){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('<h1>This is Contact Page</h1>')
            res.end();
        }

});
server.listen(8000);
console.log('Server listening on Successful')