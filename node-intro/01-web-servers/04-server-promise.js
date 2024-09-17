import * as http from "node:http";
import * as fs from "node:fs/promises";

const server = http.createServer(function (req, res) {
  fs.readFile("index.html", { encoding: "utf8" })
    .then(function(fileContents){
        res.write(fileContents);
        res.end();
    })
});

server.listen(8080);
