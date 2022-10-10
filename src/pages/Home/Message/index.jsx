import React from "react";
import SectionContainer from "../../../components/SectionContainer";

const Message = () => {
  return (
    <SectionContainer color="#fef0d6" titleColor="#f80000">
      <p style={{ fontSize: "1.2rem", color: "#27337e" }}>
        Lanzamos nuesta oferta principalmente a emprendedores y small business,
        sobre todo de origen latino o de habla hispana que operan en USA o en
        otros países y/o que carecen de conocimientos técnicos o de tiempo para
        hacerse cargo directamente de proyectos asociados a nuestros servicios.
        O que no cuentan con el capital suficiente para adquirir tecnología y
        sistemas que demanden ser operados por técnicos o profesionales
        expertos. O que la barrera del idioma inglés los limite para adquirir
        servicios con consultoras locales que no hablan español.
      </p>
    </SectionContainer>
  );
};

export default Message;
