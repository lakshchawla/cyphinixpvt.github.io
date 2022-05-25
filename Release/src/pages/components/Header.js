import React from "react";
import redlogo from "./../../logos/logo-red.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link to="#" className="navbar-brand ms-4s">
          <img src={redlogo} className="ms-4 me-2" alt="" srcset="" height="40" />
          Cyphinix
        </Link>

        <ul className="nav-list ms-auto " id="navList">
          <li>
            <a className="link" href="/">Home</a>
          </li>
          <li>
            <Link className="link" to="#!">Blog</Link>
          </li>
          <li>
            <Link className="link" to="#!">Pricing</Link>
          </li>
          <li>
            <Link className="link" to="#!">Services</Link>
            <ul className="nav-dropdown">
              <li>
                <Link to="/service1">Network Security Assessment</Link>
              </li>
              <li>
                <Link to="/service2">Application Security Assessment</Link>
              </li>
              <li>
                <Link to="/service3">Iot Security Assessment</Link>
              </li>
              <li>
                <Link to="/service4">Adversary Simulation</Link>
              </li>
              <li>
                <Link to="/service5">Blue Teaming Solutions</Link>
              </li>
              <li>
                <Link to="/service6">Security Training & Awareness Program</Link>
              </li>
              <li>
                <Link to="/service7">Others</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="link" to="#!">About</Link>
          </li>
          <li>
            <Link className="link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="nav-mobile">
            <a id="nav-toggle" href="#!"><span></span></a>
        </div>
    </nav>
    
  );
}

export default Header;
