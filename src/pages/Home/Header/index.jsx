import React from "react";
import { Button } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <header className="masthead" id="page-top">
      <p className="title-1 text-primary welcome-title">Bienvenido</p>
      <p className="welcome-text welcome-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus unde
        commodi sapiente dicta aut possimus similique, voluptas quae ratione
        est. Dolor a natus porro aliquam dicta delectus possimus autem aperiam?
      </p>
      <div className="button-container d-flex flex-column flex-lg-row align-items-center">
        <Button className="text-light text-uppercase">Cotizar Ahora</Button>
      </div>
      <img
        className="video"
        src="https://nono-c.com/wp-content/uploads/2019/03/video-placeholder.jpg"
        alt="video"
      />
    </header>
  );
};

export default Header;
