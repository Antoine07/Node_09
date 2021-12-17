# Sujet 01

Sur la base des socket.io, essayez de construire le jeu Chiffoumi. 

Si vous avez terminé avant l'heure, créez un compteur qui limite le jeu ou faites une sauvegarde des parties en limitant celles-ci à 10 tours. Et au bout de ces tours on notifiera (sauvegarde) les scores des participants.

## Contraintes 

Utilisez la base de l'exemple sur les socket.io que nous avons vu en cours pour réaliser ce projet.

## Remarques techniques importantes

- Vous avez la possibilité d'utilisez un identifiant pour déterminer chaque client à partir de l'objet socket :

```js
socket.id
```

- Dans notre exemple du cours, vous pouvez faire un console.log pour voir que cet identidiant est unique par instance de votre client (onglet de navigateur).

```js
io.on('connection', (socket) => {
    // est ce que le client envoie quelque chose ? Si oui on récupère le message
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg + socket.id); // socket.id unique par client
        // re-envoyer un message à tout le monde, même à celui qui l'a envoyé
        io.emit('chat message', msg);
        // envoyer un message sauf à celui qui a déclenché l'événement
        socket.broadcast.emit('chat message', 'SOME EVENT !!');
    });

    socket.on('disconnect',  () => {
        console.log('Disconnect');
    });
});
```
