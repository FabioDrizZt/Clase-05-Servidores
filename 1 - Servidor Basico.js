const http = require("node:http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hola mundo esta es mi página !");
});

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log("Servidor en la url http://127.0.0.1:3000");
});
