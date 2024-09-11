const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const sendEmail = require('../server/service/mailer');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route pour gérer la soumission du formulaire
app.post('/api/submit', async (req, res) => {
    const data = req.body;

    // Sauvegarder les données dans un fichier (si nécessaire)
    const filePath = path.join(__dirname, 'data.txt');
    const formattedData = `
        name: ${data.name}
        firstname: ${data.firstname}
        phone: ${data.phone}
        mail: ${data.mail}
        message: ${data.message}
    `;

    fs.writeFile(filePath, formattedData, async (err) => {
        if (err) {
            console.error('Error writing to file', err);
            res.status(500).send('Error writing to file');
        } else {
            try {
                await sendEmail(data);
                res.send('Form data received, file created, and email sent');
            } catch (error) {
                console.error('Error sending email', error);
                res.status(500).send('Error sending email');
            }
        }
    });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

