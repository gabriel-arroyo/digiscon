import React from "react";
import SectionContainer from "../../../components/SectionContainer";
import ValueItem from "./ValueItem";
import icon1 from "../../../assets/img/pasion.png";
import icon2 from "../../../assets/img/conexion.png";
import icon3 from "../../../assets/img/ejecucion.png";
import icon4 from "../../../assets/img/realidad.png";

const Values = () => {
  return (
    <SectionContainer
      title="Nuestros valores"
      text="Trabajamos cada proyecto dando lo mejor de nosotros"
      color="#27337e"
      side="left"
    >
      <ValueItem icon={icon1} title="Pasión" text="Nos mueve crear para ti" />
      <ValueItem
        icon={icon2}
        title="Conexión"
        text="Nos volvemos parte de tu equipo"
      />
      <ValueItem
        icon={icon3}
        title="Ejecución"
        text="Buscamos siempre la mejor calidad de entrega"
      />
    </SectionContainer>
  );
};

export default Values;
