import * as http from "node:http";
import * as fs from "node:fs/promises";

const server = http.createServer(async function (req, res) {
    const fileContents = await fs.readFile("index.html", { encoding: "utf8" })
    res.write(fileContents);
    res.end();
});

server.listen(8080);
