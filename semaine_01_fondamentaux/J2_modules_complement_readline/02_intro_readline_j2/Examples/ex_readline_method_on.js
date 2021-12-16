const readline = require("readline");

// Création de l'interface de gestion des entrées et sorties, basée sur input et ouput de la console

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

// Message dans la console
rl.setPrompt('OHAI> ');
// définit l'invite de commande
rl.prompt();

rl.on('line', (data) => {

    console.log(data);

    rl.prompt();
}).on('close', () => {
    console.log('closed')

    process.exit(0); // pour l'objet globale process pour l'arrêter
})