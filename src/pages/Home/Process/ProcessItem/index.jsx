import React from "react";
import icono from "../../../../assets/img/Icono1.png";
import "./ProcessItem.css";

const ProcessItem = () => {
  return (
    <div className="m-lg-3 m-1 inline-block process-item d-flex flex-column p-4">
      <img height={200} src={icono} alt="" />
      <p className="text-light text-uppercase">Tienes una necesidad</p>
      <p className="text-light">Lorem ipsum dolor sit amet consectetur..</p>
    </div>
  );
};

export default ProcessItem;
