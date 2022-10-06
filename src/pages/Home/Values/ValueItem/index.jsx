import React from "react";
import icono from "../../../../assets/img/pasion.png";
import "./ValueItem.css";

const ValueItem = () => {
  return (
    <div className="m-lg-3 m-1 inline-block value-item d-flex flex-column p-4 align-items-center justify-content-center rounded">
      <img width={90} src={icono} alt="value" className="mb-4" />
      <p className="text-light text-uppercase">Pasión</p>
      <p className="text-light">Lorem ipsum dolor sit amet consectetur..</p>
    </div>
  );
};

export default ValueItem;
