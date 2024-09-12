import React from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import PricePart from "../components/PricePart";
import PricePro from "../components/PricePro";

const Price = () => {
    return (
        <div className="price">
            <div className="header_bar">
                <Header/>

            </div>
            <div className="title">
                <h2>Tarifs</h2>
            </div>
            <div className="part">
                <PricePart/>
            </div>
            <div className="pro">
                <PricePro/>
            </div>


            <div className="footer-container">
                <Footer/>
            </div>
        </div>
    );
};

export default Price;