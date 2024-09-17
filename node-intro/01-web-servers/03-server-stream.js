
import * as http from "node:http";
import * as fs from "node:fs";

const server = http.createServer(function(req, res){
    const stream = fs.createReadStream('index.html')
    stream.on('data', function(fileContents){
        res.write(fileContents);
    });
    stream.on('end', function(){
        res.end();
    });
});

server.listen(8080); 
