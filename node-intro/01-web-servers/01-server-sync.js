
import * as http from "node:http";
import * as fs from "node:fs";

const server = http.createServer(function(req, res){
    
    /*     
    res.write('Hello, World!')
    res.end();  
    */

    // console.log("request received");
    const fileContents = fs.readFileSync("index.html", { encoding: "utf8" });
    res.write(fileContents);
    res.end()

});

server.listen(8080); 
