import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavBar from "../../components/NavBar.js";
import MapContainer from "./MapContainer.js";
import "./contact.css";

function Contact() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        function () {
          handleLocationError(true);
        }
      );
    } else {
      handleLocationError(false);
    }
  }, []);

  const handleLocationError = (browserHasGeolocation) => {
    alert(
      browserHasGeolocation
        ? "Erro: O serviço de geolocalização falhou."
        : "Erro: Seu navegador não suporta geolocalização."
    );
  };

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


      <h1 className="map-container">Onde estamos localizados</h1>

      <div className="map-container">
        <MapContainer
          userLocation={userLocation}
          handleLocationError={handleLocationError}
        />
      </div>

    </div>
  );
}

export default Contact;
