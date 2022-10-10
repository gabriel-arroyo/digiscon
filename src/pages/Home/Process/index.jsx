import React from "react";
import SectionContainer from "../../../components/SectionContainer";
import ProcessItem from "./ProcessItem";
import icon1 from "../../../assets/img/necesidad.png";
import icon2 from "../../../assets/img/escuchamos.png";
import icon3 from "../../../assets/img/solucion.png";
import icon4 from "../../../assets/img/realidad.png";

const Process = () => {
  return (
    <SectionContainer
      title="Nuestro Proceso"
      text="Tus necesidades tienen una solución."
      color="#6188c5"
      side="left"
    >
      <ProcessItem
        icon={icon1}
        title="Tienes una necesidad"
        text="Quieres hacer crecer tu negocio"
      />
      <ProcessItem
        icon={icon2}
        title="La escuchamos"
        text="Atendemos cada una de tus inquietudes"
      />
      <ProcessItem
        icon={icon3}
        title="Creamos la solución"
        text="Nos apoyamos de expertos para crear algo genial"
      />
      <ProcessItem
        icon={icon4}
        title="Juntos lo hacemos realidad"
        text="Te tomamos en cuenta en cada parte del proceso"
      />
    </SectionContainer>
  );
};

export default Process;
