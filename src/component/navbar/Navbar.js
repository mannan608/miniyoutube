import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "../SearchBox";

const Navbar = () => {
  return (
    <div className="wrapper">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <SearchBox />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
