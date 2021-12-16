const http = require("http"); // module de Node.js

// sur votre machine adresse locale
const hostname = "localhost";
// port
const port = "8080";

const server = http.createServer((req, res) => {
    // on écrit définit la réponse qui sera envoyé au client qui visitera la page Web
    // status de la réponse 200 et le type de la réponse
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  console.log(req.url );

  // obligatoire réponse de votre serveur
  res.write("<html><head></head><body><h1>Hello Server Node</h1></body></html>"); // méthode write et end
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
