import React, { useState } from 'react';
import '../styles/components/form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        firstname: '',
        statut: '',
        phone: '',
        mail: '',
        message: ''
    });

    const [statusMessage, setStatusMessage] = useState(''); // Message de statut
    const [errorMessage, setErrorMessage] = useState(''); // Message d'erreur

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Générer le lien mailto avec les données du formulaire
    const generateMailtoLink = () => {
        return `mailto:elisen.massages@gmail.com?subject=Contact%20from%20${formData.name}&body=Nom:%20${formData.name}%0APrénom:%20${formData.firstname}%0AStatut:%20${formData.statut}%0ATéléphone:%20${formData.phone}%0AEmail:%20${formData.mail}%0AMessage:%20${formData.message}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Vérification des champs obligatoires
        if (!formData.name || !formData.firstname || !formData.mail || !formData.message) {
            setErrorMessage('Tous les champs obligatoires doivent être remplis.');
            setStatusMessage(''); // Réinitialise le message de succès
            return;
        }

        // Reset des messages d'erreur
        setErrorMessage('');

        // Essayons d'envoyer le formulaire
        try {
            window.location.href = generateMailtoLink();
            setStatusMessage('Votre message a bien été envoyé.'); // Message de succès
        } catch (error) {
            setStatusMessage(''); // Réinitialise le message de succès
            setErrorMessage('Une erreur est survenue, le message n\'a pas pu être envoyé.'); // Message d'erreur
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="firstname">Prénom</label>
                <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="statut">Statut</label>
                <select name="statut" value={formData.statut} onChange={handleChange}>
                    <option value="Entreprise">Entreprise</option>
                    <option value="Particulier">Particulier</option>
                </select>
            </div>
            <div>
                <label htmlFor="phone">Téléphone</label>
                <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="mail">Email</label>
                <input type="email" id="mail" name="mail" value={formData.mail} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit">Envoyer</button>

            {/* Afficher un message en fonction du statut */}
            {statusMessage && <p className="success-message">{statusMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
    );
};

export default Form;



