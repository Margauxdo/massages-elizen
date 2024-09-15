import React from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import PricePart from "../components/PricePart";
import PricePro from "../components/PricePro";
import '../styles/pages/price.css';

const Price = () => {
    return (
        <div className="price">
            <div className="header_bar">
                <Header />
            </div>
            <div className="title">
                <h2>Mes formules</h2>
            </div>
            <div className="price-container">
                <PricePart />
                <PricePro />
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    );
};

export default Price;
