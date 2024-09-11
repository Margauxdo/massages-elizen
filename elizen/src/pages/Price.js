import React from 'react';
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Price = () => {
    return (
        <div className="price">
            <div className="header_bar">
                <Header/>

            </div>
            <div className="title">
                <h2>Tarifs</h2>
            </div>


            <div className="footer-container">
                <Footer/>
            </div>
        </div>
    );
};

export default Price;