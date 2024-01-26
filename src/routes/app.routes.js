import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home.js";
import Contact from "../pages/Contact/Contact.js";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart.js";

function RotaPrincipal() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/carrinhodecompras" element={<ShoppingCart/>}/>
        <Route exact path="/contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RotaPrincipal;
