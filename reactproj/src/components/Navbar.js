import React, { useContext } from "react";
// import App from "../App";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item">
            <NavLink to="/" className="nav-link ">
              <span className="navtext">Home</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <a href="/#knowmore" className="nav-link navtext">
              Know more
            </a>
          </li>
          <li className="nav-item">
            <a href="/#contact" className="nav-link navtext">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link navtext" to="/dashboard">
              Dashboard
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/logout" className="btn btn-primary btn-sm mx-2">
              Logout
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink to="/" className="nav-link ">
              <span className="navtext">Home</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <a href="/#knowmore" className="nav-link navtext">
              Know more
            </a>
          </li>
          <li className="nav-item">
            <a href="/#contact" className="nav-link navtext">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link navtext" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="btn btn-warning btn-sm mx-2" to="/Login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signup" className="btn btn-primary btn-sm mx-2">
              Sign Up
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-md shadow-lg p-3 mb-5 bg-body-tertiary rounded py-2 fixed-top"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <NavLink to="/" className="navbar-brand logotext">
            <span style={{ color: "#e36926" }}>Career</span>
            <span style={{ color: "#007cc2" }}>Guru</span>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <RenderMenu />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
