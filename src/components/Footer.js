import React from "react";

import instagram_icon from "../assets/instagram_icon.svg";
import whatsapp_icon from "../assets/whatsapp_icon.svg";
import linkedin_icon from "../assets/linkedin_icon.svg";
import pin_icon from "../assets/pin_icon.svg";
import bytebuy_logo from "../assets/bytebuy_logo.svg";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <img src={bytebuy_logo} alt="Byte Buy" className="img-fluid" />
          </div>
          <div className="col-md">
            <p>ByteStore store 2024</p>
            <p>Todos os direitos reservados</p>
          </div>
          <div className="col-md">
            <p>Região</p>
            <p>
              <img src={pin_icon} alt="Location Pin" className="mr-2" />
              Trabalhamos em todo território nacional
            </p>
          </div>
          <div className="col-md">
            <p>Sobre</p>
            <p>Nome empresa</p>
            <p>Políticas de privacidade</p>
          </div>
          <div className="col-md">
            <img className="mr-2" src={instagram_icon} alt="Instagram" />
            <img className="mr-2" src={whatsapp_icon} alt="WhatsApp" />
            <img src={linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
