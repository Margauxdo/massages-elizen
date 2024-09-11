import React from 'react';

import Form from "../components/Form";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
    return (
        <div className="Contact">
            <div className="header_bar">
                <Header/>

            </div>
            <div className="title">
                <h2>Contact</h2>
                <Form/>
            </div>
            <div className="footer-container">
                <Footer/>
            </div>

        </div>
    );
};

export default Contact;