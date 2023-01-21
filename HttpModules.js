let http=require('http');

let server=http.createServer(function(req, res){
    res.end('hello world 8000');

});
server.listen(8000);
console.log('Server listening on')
