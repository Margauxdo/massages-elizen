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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Générer le lien mailto avec les données du formulaire
    const generateMailtoLink = () => {
        return `mailto:massages-elizen@gmail.com?subject=Contact%20from%20${formData.name}&body=Nom:%20${formData.name}%0APrénom:%20${formData.firstname}%0AStatut:%20${formData.statut}%0ATéléphone:%20${formData.phone}%0AEmail:%20${formData.mail}%0AMessage:%20${formData.message}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = generateMailtoLink();
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
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit">Envoyer</button>
        </form>
    );
};

export default Form;


