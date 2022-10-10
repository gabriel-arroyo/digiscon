import React from "react";
import PropTypes from "prop-types";
import "./ProcessItem.css";

const ProcessItem = ({ icon, title, text }) => {
  return (
    <div className="m-lg-3 m-1 inline-block process-item p-4 align-items-center justify-content-center rounded">
      <img
        height={200}
        src={icon}
        alt="process"
        className="mb-4 process-icon"
      />
      <p className="text-light text-uppercase process-title">{title}</p>
      <p className="text-light process-text">{text}</p>
    </div>
  );
};

export default ProcessItem;

ProcessItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
