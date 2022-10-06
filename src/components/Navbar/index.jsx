import React from "react";
import "./navbar.css";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm bg-secondary"
      id="mainNav"
    >
      <div className="container container-nav px-5">
        <a className="navbar-brand fw-bold text-white" href="#page-top">
          <img className="logo-img" src={logo} alt="..." />
        </a>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0 ">
            <li className="nav-item">
              <a className="nav-link me-lg-3  text-white" href="/index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-lg-3 text-white" href="/index.html">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-lg-3 text-white" href="/index.html">
                Login
              </a>
            </li>
          </ul>
          <div className="language">
            <i className="bi-chat-text-fill me-2 text-white"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
