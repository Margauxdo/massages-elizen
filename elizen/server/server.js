const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendEmail = require('./mailer'); // Assure-toi que le chemin est correct

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route pour gérer la soumission du formulaire
app.post('/api/submit', async (req, res) => {
    const data = req.body;

    try {
        await sendEmail(data); // Envoi des données à la fonction sendEmail
        res.status(200).send('Formulaire soumis et e-mail envoyé');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail', error);
        res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});


