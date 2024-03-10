const http = require("http");
const PORT = 8080;
const html = require("fs").readFileSync("./index.html")

const server = http.createServer((req,res)=> {
    res.writeHead(200,{"content-type": "text/html" });
    res.write(html);
    res.end();
});

server.listen(PORT, () => {
    console.log("server running!");
});