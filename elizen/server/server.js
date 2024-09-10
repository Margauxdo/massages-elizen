const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route pour gérer la soumission du formulaire
app.post('/api/submit', (req, res) => {
    const data = req.body;

    // Spécifie le chemin du fichier où les données seront enregistrées
    const filePath = path.join(__dirname, 'data.txt');

    // Formate les données du formulaire
    const formattedData = `
        name: ${data.name}
        firstname: ${data.firstname}
        phone: ${data.phone}
        mail: ${data.mail}
        message: ${data.textarea}
    `;

    // Écrire les données dans le fichier
    fs.writeFile(filePath, formattedData, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            res.status(500).send('Error writing to file');
        } else {
            res.send('Form data received and file created');
        }
    });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
