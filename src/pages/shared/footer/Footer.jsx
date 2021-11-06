import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="bg-dark mt-5 text-white p-3">
      <div className="container">
        <div className="row  w-100">
          <div className="col-md-3">
            <Link
              className="navbar-brand bg-primary fs-3 band fw-bolder"
              to="/"
            >
              <span className=" fw-bolder">Refrain </span>
              Addiction
            </Link>
            <small>
              Refrain Addiction is a network of providers that is committed to
              helping individuals who are struggling to break the cycle of
              substance abuse.
            </small>
          </div>
          <div className="col-md-3">
            <h5>Contact Information</h5>
            <address>House No 420,420 Road,404 City,Antartika.</address>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <Link to="/">Home</Link>
            <Link to="/services">Treatment Programs</Link>
            <Link to="/about">About </Link>
            <Link to="/book-appointment">Book Appointment</Link>
          </div>
          <div className="col-md-3">
            <h5>Social Media</h5>
            <a href="#" target="_blank">
              {" "}
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="#" target="_blank">
              {" "}
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="#" target="_blank">
              {" "}
              <i className="fab fa-youtube"></i> Youtube
            </a>
          </div>
        </div>
        <hr />
        <p className="text-center">
          ©refrain-addiction.org All Right Reserved Web Developed By Imran Hasan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
