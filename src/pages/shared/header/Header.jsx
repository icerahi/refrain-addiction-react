import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut().then(() => {});
  };
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid mx-md-5">
          <Link
            className="navbar-brand bg-primary fs-3 band fw-bolder"
       
            to="/"
          >
            <span className=" fw-bolder">Refrain </span>
            Addiction
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link " aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className="nav-link"
                  aria-current="page"
                >
                  Treatment Programs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/book-appointment"
                  className="nav-link"
                  aria-current="page"
                >
                  Book Appointment
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className="nav-link" aria-current="page">
                  About
                </NavLink>
              </li>

              {user ? (
                <div>
                  {user.photoURL ? (
                    <img
                      width="15%"
                      className="rounded-circle border border-2"
                      src={user.photoURL}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                  {user.displayName ? (
                    <span className="displayName fw-bolder">{user.displayName}</span>
                  ) : (
                    <span className="displayName fw-bolder">
                      {user.email.split("@")[0]}
                    </span>
                  )}
                  <button
                    onClick={handleLogOut}
                    id="logoutBtn"
                    className="fs-4 border-0 bg-white"
                  >
                    {" "}
                    <i className="fas fa-lg fa-sign-out-alt display-1"></i>
                  </button>
                </div>
              ) : (
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link" aria-current="page">
                    Login/Register
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
