import React from "react";
import "../styles/navbarStyles/navbarStyles.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="wrap">
        <Link to="/">
          <p>
            The<span>Cocktail</span>DB
          </p>
        </Link>
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
