const fs = require('fs');

exports.server = (req, res) =>{
    const url = req.url.replace('/', '');

    if (url === "bootstrap") {
        // header de la réponse pour le client
        res.writeHead(200, { "Content-Type": "text/css" });
        const cssFile = fs.readFileSync('./assets/css/bootstrap.min.css', 'utf-8');
        res.write(cssFile);
        res.end();

        return;
    }

    // Favicon
    if (url === "favicon.ico") {
        const favicon = fs.readFileSync('./assets/favicon.ico');
        
        res.writeHead(200, { "Content-Type": "image/x-icon" });
        res.write(favicon);
        res.end();

        return;
    }

    if(url === ''){
        const home = fs.readFileSync('./views/home.html', 'utf-8');
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(home);
        res.end();

        return ;
    }
}