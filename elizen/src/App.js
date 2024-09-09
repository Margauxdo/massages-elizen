import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Massage from "./pages/Massage";
import Price from "./pages/Price";
import Contact from "./pages/Contact";
import NotFound404 from "./pages/NotFound404";


function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/massages" element={<Massage />} />
                <Route path="/price" element={<Price />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound404 />} />
            </Routes>
        </div>
    );
}

export default App;
