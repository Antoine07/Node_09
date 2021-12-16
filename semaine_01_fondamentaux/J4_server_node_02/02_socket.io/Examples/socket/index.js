const http = require("http");
const fs = require('fs');

// Un server qui sera branché en permanence avec le client
const { Server } = require("socket.io");

const hostname = '192.168.1.101';
const port = '8080';

const server = (req, res) => {
    const url = req.url.replace('/', '');

    if (url === '') {
        // la page qui contient socket.io
        const home = fs.readFileSync('./view/index.html', 'utf-8');
        res.writeHead(200, {
            "Content-Type": "text/html",
        });
        res.write(home);
        res.end();
    }
};

const app = http.createServer(server);

// attention vous devez passer l'app au server Socket.io
const io = new Server(app);

// connection de socker io avec notre server Node.js
io.on('connection', (socket) => {
    // est ce que le client envoie quelque chose ? Si oui on récupère le message
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        // re-envoyer un message à tout le monde, même à celui qui l'a envoyé
        io.emit('chat message', msg);

        // envoyer un message sauf à celui qui a déclenché l'événement
        socket.broadcast.emit('chat message', 'SOME EVENT !!');
    });

    socket.on('disconnect',  () => {
        console.log('Disconnect');
    });
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});