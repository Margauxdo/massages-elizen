import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        firstname: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/submit', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            alert('votre formulaire a bien été envoyé ');
        } catch (error) {
            console.error('erreur dans l"envoi du formulaire', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="firstname">Prénom</label>
                <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="phone">Téléphone</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="mail">Email</label>
                <input
                    type="text"
                    id="mail"
                    name="mail"
                    value={formData.mail}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Envoyer</button>
        </form>
    );
};

export default Form;
