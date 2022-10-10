import React from "react";
import PropTypes from "prop-types";
import "./ValueItem.css";

const ValueItem = ({ icon, title, text }) => {
  return (
    <div className="m-lg-3 m-1 inline-block value-item p-4 align-items-center justify-content-center rounded">
      <img height={90} src={icon} alt="value" className="mb-4 value-icon" />
      <p className="text-light text-uppercase value-title">{title}</p>
      <p className="text-light value-text">{text}</p>
    </div>
  );
};

export default ValueItem;

ValueItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
