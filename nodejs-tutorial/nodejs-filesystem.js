const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
    fs.readFile('demoFile1.html', (err, data)=>{

        if(err){
            res.write("Error...")
        }
        
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end();
    });
}).listen(3000);