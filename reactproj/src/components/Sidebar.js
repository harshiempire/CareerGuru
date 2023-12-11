import React from "react";
import { NavLink } from "react-router-dom";
// import Settings

const Sidebar = (props) => {
  return (
    <div className="col-3 sidenav border border-dark">
      {/* <!-- <nav className="nav sidenav border border-dark"> --> */}
      <div className="container text-center">
        <h1 className="m-5">
          <i className="bi bi-person-fill"></i>
        </h1>
      </div>
      <div className="container text-center pb-4">
        <h2 className="text-danger">Hi, {props.name}</h2>
      </div>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/dashboard" className="btn btn-light my-2 w-100 p-3">
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <a href="/dashboard" className="btn btn-light my-2 w-100 p-3">
            Search
          </a>
        </li>
        <NavLink to="/settings" className="btn btn-light my-2 w-100 p-3">
          <i className="bi bi-gear-fill px-2"></i>Settings
        </NavLink>
      </ul>
      {/* <!-- </nav> --> */}
    </div>
  );
};

export default Sidebar;
