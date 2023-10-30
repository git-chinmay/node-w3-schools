// Creating a Node.js server without Express
const http = require('http');
const printMyName = require('./secondary');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write("Hello " + printMyName.printMyName('Chinmay'));
    res.write("\n")
    res.write(req.url); //http://localhost:3000/summer/winter
    res.end();
}).listen(3000);



