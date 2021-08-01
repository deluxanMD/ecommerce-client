import React from "react";
import "../../App.css";
// import { a } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main-navbar bg-main">
      <h1>
        <a href="">
          <i className="fas fa-shrefre"></i>eShop
        </a>
      </h1>
      <ul>
        <li>
          <a href="">Merchants</a>
        </li>
        <li>
          <a href="">Register</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
