import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "../Images/logo.jpg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top ">
        <div className="container-fluid">
          <Link className="navbar-brand black-white" to="/">
            <img className="NavLogo" src={NavLogo} alt="Jm" />
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
            <span className="navbar-toggler-icon p-4 "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link  active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Service">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Team">
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Contact">
                  Contact
                </Link>
              </li>
              <Link to ="/Contact"><button className="btn btn-danger">LoGin</button></Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
