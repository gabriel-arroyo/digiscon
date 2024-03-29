import React from "react";
import Navbar from "../../components/Navbar";
import { Button, Nav } from "react-bootstrap";
import Header from "./Header";
import Process from "./Process";
import Values from "./Values";
import CallToAction from "./CallToAction";
import Contact from "./Contact";
import Message from "./Message";

export const Home = () => {
  return (
    <>
      <Header />
      <Process />
      <Message />
      <Values />
      <CallToAction button="Cotiza Online" />
      <Contact />
    </>
  );
};

export function VariantsExample() {
  const color = "purple";
  return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>

      <Button variant="flat" size="xxl">
        flat button
      </Button>
    </>
  );
}
