const http = require('http');
const { server } = require('./server');

const hostname = "127.0.0.1";
const port = 8080;

const app = http.createServer(server);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});