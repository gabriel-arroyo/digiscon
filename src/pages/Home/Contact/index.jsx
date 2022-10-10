import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container bg-secondary">
      <div className="container">
        <div className="header-col text-center">
          <p className="fw-bold font-weight-bold d-flex justify-content-center align-items-center w-100 text-light section-title">
            Contáctanos
          </p>
          <div className="form-group">
            <Form className="w-50">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="Nombre" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Control type="textarea" placeholder="Mensaje" />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="text-light text-uppercase"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
