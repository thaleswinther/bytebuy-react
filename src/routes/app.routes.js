import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home.js";
import Contato from "../pages/Contato/Contato.js";

function RotaPrincipal() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RotaPrincipal;
