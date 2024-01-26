import React from "react";

import instagram_icon from "../assets/instagram_icon.svg";
import whatsapp_icon from "../assets/whatsapp_icon.svg";
import linkedin_icon from "../assets/linkedin_icon.svg";
import pin_icon from "../assets/pin_icon.svg";
import bytebuy_logo from "../assets/bytebuy_logo.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-2 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <img src={bytebuy_logo} alt="Byte Buy" style={{ width: '112px' }} />
          </div>
          <div className="col-md-3 col-sm-6" style={{marginTop: "10px"}}>
            <p>ByteStore 2024</p>
            <p>Todos os direitos reservados</p>
          </div>
          <div className="col-md-3 col-sm-6" style={{marginTop: "10px"}}>
            <p>Região</p>
            <p>
              <img src={pin_icon} alt="Location Pin" className="pin" /> Trabalhamos em todo território nacional
            </p>
          </div>
          <div className="col-md-3 col-sm-6" style={{marginTop: "3px"}}>
            <p>Sobre</p>
            <p>ByteBuy</p>
            <p>Políticas de privacidade</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
