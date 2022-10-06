import React from "react";
import { Button } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <header className="masthead" id="page-top">
      <div className="container px-5 header-text ">
        <div className="header-text row gx-5 align-items-center">
          <div className="col-md-12 col-lg-6 header-col">
            <div className="mb-lg-5 mb-lg-0 text-center text-lg-start ">
              <p className="title-1 text-primary welcome-title">Bienvenido</p>
              <p className="welcome-text welcome-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus unde commodi sapiente dicta aut possimus similique,
                voluptas quae ratione est. Dolor a natus porro aliquam dicta
                delectus possimus autem aperiam?
              </p>
            </div>
            <div className="button-container d-flex flex-column flex-lg-row align-items-center">
              <Button className="text-light text-uppercase">
                Cotizar Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
