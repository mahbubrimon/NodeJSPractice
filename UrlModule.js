// let http=require('http');
// let URL=require('url');
//
// let server=http.createServer(function (req, res) {
// let MyURL="https://codersfoundation.com/courses/professional-wordpress-development/";
//            let myURLObj=URL.parse(MyURL,true);
//
//            let myHostName=myURLObj.host;
//            let myPathName=myURLObj.pathname;
//            let mySearchName=myURLObj.search;
//
//            res.writeHead(200,{"Content-Type":"text/html"});
//            res.write(mySearchName);
//            res.end();

//
// })


let http=require("http");
let URL=require("url");

let server=http.createServer(function(req,res){
    let MyURL="https://www.google.com/search?client=firefox-b-d&q=%E0%A6%86%E0%A6%B0%E0%A6%9C%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%BF%E0%A6%A8%E0%A6%BE"
    let myURLObj=URL.parse(MyURL,true);

    let MyHostName=myURLObj.host;
    let MyPathName=myURLObj.pathname;
    let MySearchName=myURLObj.search;

    res.writeHead(200,{"Content-Type": "text/html"})
    res.write(MySearchName);
    res.end();

})
server.listen(5000);
console.log('Server listening on Successful');