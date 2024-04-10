const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hola mundo esta es mi página !</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    /* TODA LA LOGICA PARA ENVIAR A LA DB */
    res.end("<h1>Has creado un nuevo registro en la BD !</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log("Servidor en la url http://127.0.0.1:3000");
});
