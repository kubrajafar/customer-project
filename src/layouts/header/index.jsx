import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <Link  to={"/"}>
          logo
        </Link>
      </div>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/customer-list"}>Customer List</NavLink>
        </li>

        <li>
          <NavLink to={"/favorite-customer"}>Favorite Customer</NavLink>
        </li>
        <li>
          <NavLink to={"/add-customer"}>Add Customer</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
