const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hola mundo esta es mi página !");
  } else if (req.method === "POST") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    /* TODA LA LOGICA PARA ENVIAR A LA DB */
    res.end("Has creado un nuevo registro en la BD !");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log("Servidor en la url http://127.0.0.1:3000");
});
