import React from "react";
import { NavLink } from "react-router-dom";

const Setting = () => {
  return (
    <div className="">
      <div>
        <h1 _ngcontent-gww-c105="">My Profile</h1>
        <ul class="list-group list-group-light">
          <li class="list-group-item border-0">
            <NavLink to="/">Home</NavLink>
          </li>
          <li class="list-group-item border-0">A second item</li>
          <li class="list-group-item border-0">A third item</li>
          <li class="list-group-item border-0">A fourth item</li>
          <li class="list-group-item border-0">And a fifth one</li>
          <li class="list-group-item border-0">
            <NavLink to="/logout">Logout</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Setting;
