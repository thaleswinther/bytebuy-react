import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home.js";
import Contato from "../pages/Contato/Contato.js";
import Localizacao from "../pages/Localizacao/Localizacao.js";

function RotaPrincipal() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contato" element={<Contato />} />
        <Route exact path="/localizacao" element={<Localizacao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RotaPrincipal;
