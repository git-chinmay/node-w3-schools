const url = require('url');

// const adrs = "http://localhost:8080/default.htm?year=2017&month=february";
// const q = url.parse(adrs, true);
// console.log(q.host); //localhost:8080
// console.log(q.path); //default.htm?year=2017&month=february
// console.log(q.pathname); //default.htm
// console.log(q.query); //[Object: null prototype] { year: '2017', month: 'february' }
// qadr = q.query;
// console.log(qadr.month);

const http = require('http');
const fs = require('fs');
http.createServer((req, res)=>{
    qparsed = url.parse(req.url, true);
    fileName = "." + qparsed.pathname;
    console.log(fileName);
    fs.readFile(fileName, (err, data)=>{
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end("404 Error");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();

    });
}).listen(3000);