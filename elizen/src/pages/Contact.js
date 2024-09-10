import React from 'react';
import Menu from "../components/Menu";
import Form from "../components/Form";

const Contact = () => {
    return (
        <div className="Contact">
            <div className="navbar">
                <div className="logoNav">

                </div>
                <div className="navMenu">
                    <Menu/>
                </div>
            </div>
            <div className="title">
                <h2>Contact</h2>
                <Form/>
            </div>

        </div>
    );
};

export default Contact;