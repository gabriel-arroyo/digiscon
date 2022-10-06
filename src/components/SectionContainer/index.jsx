import React from "react";
import "./SectionContainer.css";

const SectionContainer = ({ title, text, color, children }) => {
  return (
    <div
      id="process"
      className="section-container"
      style={{ backgroundColor: color }}
    >
      <div className="container px-5 col-md-12 col-lg-6">
        <div className="header-col text-center">
          <p className="fw-bold font-weight-bold text-light section-title">
            {title}
          </p>
          <p className="text-light section-text">{text}</p>
          <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column align-items-center justify-content-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContainer;
