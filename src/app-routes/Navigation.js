import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/companies">
          Companies
        </NavLink>
      </li>
      <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/jobs">
          Jobs
        </NavLink>
      </li>
      <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/profile">
          Profile
        </NavLink>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Log out
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
