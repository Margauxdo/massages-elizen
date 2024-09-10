const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendEmail = require('./service/mailer'); // Assure-toi que le chemin est correct

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route pour gérer la soumission du formulaire
app.post('/api/submit', async (req, res) => {
    const data = req.body;

    try {
        await sendEmail(data);
        res.send('Form data received and email sent');
    } catch (error) {
        console.error('Error sending email', error);
        res.status(500).send('Error sending email');
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
