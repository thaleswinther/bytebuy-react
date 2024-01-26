import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

import "bootstrap/dist/css/bootstrap.min.css";
import logotipo from "../assets/bytebuy_logo.svg";
import sacola_compras from "../assets/shopping_bag.svg";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="black"
      variant="dark"
      style={{ height: "108px" }}
    >
      <Navbar.Brand href="/" style={{ marginLeft: "20px" }}>
        <img
          src={logotipo}
          alt="Byte Buy"
          style={{ width: "100px", height: "auto" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto align-items-center">
          <Nav.Link href="/" className="text-white">
            Home
          </Nav.Link>
          <Nav.Link href="/contato" className="text-white">
            Contato
          </Nav.Link>
          <Nav.Link href="/localizacao" className="text-white">
            Localização
          </Nav.Link>
          <Nav.Link
            href="/"
            className="text-white d-flex align-items-center"
            style={{ marginRight: "20px" }}
          >
            <Image
              src={sacola_compras}
              alt="Carrinho"
              fluid
              style={{ width: "32px", height: "auto" }}
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
