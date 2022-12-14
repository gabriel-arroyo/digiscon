import React from "react";
import "./SectionContainer.css";
import image from "../../assets/img/imagotipo.png";

const SectionContainer = ({
  title,
  text,
  color,
  children,
  titleColor,
  side,
}) => {
  const tcolor = titleColor ? titleColor : "white";
  return (
    <div
      id="process"
      className="section-container"
      style={{ backgroundColor: color, height: "100%" }}
    >
      {side === "right" && (
        <img src={image} alt="back" className="trama-right" />
      )}
      {side === "left" && <img src={image} alt="back" className="trama-left" />}
      <div className="container px-5 col-md-12 col-lg-6">
        <div className="header-col text-center">
          <p
            className="fw-bold font-weight-bold section-title"
            style={{ color: tcolor }}
          >
            {title}
          </p>
          <p className="text-light section-text">{text}</p>
          <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column align-items-center justify-content-center h-100">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContainer;
