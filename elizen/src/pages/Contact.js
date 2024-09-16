import React from 'react';
import '../styles/pages/contact.css';

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
                <div className="containContact">

                    <div className="leftContact">
                        <Form/>
                    </div>
                </div>

            </div>
            <div className="footer-container">
                <Footer/>
            </div>

        </div>
    );
};

export default Contact;