import React from "react";
import { Button } from "react-bootstrap";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-container">
      <div className="d-flex align-items-center justify-content-center h-100">
        <Button className="text-light text-uppercase">Cotiza online</Button>
      </div>
    </div>
  );
};

export default CallToAction;
