import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavBar from "../../components/NavBar.js";

import "../Home/home.css";
function Contact() {
  return (
    <div>
      <NavBar />

      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite seu nome" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="Digite seu e-mail" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Número de Telefone</Form.Label>
          <Form.Control type="tel" placeholder="Digite o telefone" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTextArea">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Digite sua mensagem"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
