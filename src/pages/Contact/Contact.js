import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavBar from "../../components/NavBar.js";
import MapContainer from "./MapContainer.js";
import "./contact.css";

function Contact() {
  const [userLocation, setUserLocation] = useState(null);
  const ondeEstamosRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === "#onde-estamos") {
      scrollToOndeEstamos();
    }

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

  const scrollToOndeEstamos = () => {
    if (ondeEstamosRef && ondeEstamosRef.current) {
      ondeEstamosRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <NavBar />

      <div id="contact-banner">
        <h1>ENTRE EM CONTATO</h1>
        <p>Alguma dúvida? Sugestão de <br></br> produto ou avaliação?</p>
      </div>

      <div className="row px-md-5">
        <div className="col-md-6">
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="Digite seu e-mail" />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Número de Telefone</Form.Label>
              <Form.Control type="tel" placeholder="Digite seu telefone" />
            </Form.Group>
          </Form>
        </div>

        <div className="col-md-6">
          <Form>
            <Form.Group controlId="formTextArea">
              <Form.Control as="textarea"  className="large-textarea"rows={3} placeholder="Descreva aqui como podemos te ajudar" />
            </Form.Group>

            <Button variant="primary" type="submit" className="submit-button">
              Enviar
            </Button>
          </Form>
        </div>
      </div>

      <h1 className="mt-4 ml-4">Onde estamos localizados</h1>

      <div className="map-container" ref={ondeEstamosRef} id="onde-estamos">
        <MapContainer
          userLocation={userLocation}
          handleLocationError={handleLocationError}
        />
      </div>
    </div>
  );
}

export default Contact;
