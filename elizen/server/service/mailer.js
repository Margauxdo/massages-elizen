const nodemailer = require('nodemailer');

// Configurer le transporteur SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'massages-elizen@gmail.com',
        pass: 'your-email-password'
    }
});

// Fonction pour envoyer un email
const sendEmail = (data) => {
    const mailOptions = {
        from: 'massages-elizen@gmail.com',
        to: 'recipient-email@gmail.com',
        subject: 'Formulaire de contact',
        text: `
            Nom: ${data.name}
            Prénom: ${data.firstname}
            Téléphone: ${data.phone}
            Email: ${data.mail}
            Message: ${data.message}
        `
    };

    return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;

