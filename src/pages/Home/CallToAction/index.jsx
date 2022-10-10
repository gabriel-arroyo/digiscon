import React from "react";
import { Button } from "react-bootstrap";
import "./CallToAction.css";

const CallToAction = ({ button }) => {
  return (
    <div className="cta-container">
      <div className="d-flex align-items-center justify-content-center h-100">
        <Button className="text-light text-uppercase quote-button">
          {button}
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
