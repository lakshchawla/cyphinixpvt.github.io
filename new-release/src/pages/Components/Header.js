import React, { Component } from "react";
import redlogo from "./../../logos/logo-red.png";
import { Link } from "react-router-dom";

function Header() {
  return (
<nav class="navbar navbar-expand-lg fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand ms-3 fw-bold" href="#">
      <img src={redlogo} class="me-2" alt="" srcset="" height="40" />
      Cyphinix
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
  <div class="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
    <ul class="navbar-nav mb-2 mb-lg-0">
      <li class="nav-item ms-3">
        <a class="nav-link text-black" aria-current="page" href="/">
          Home
        </a>
      </li>

      <li class="nav-item ms-3 dropdown">
        <a class="nav-link text-black dropdown-toggle" href="#" id="navbarDropdown" role="button"
          data-bs-toggle="dropdown" aria-expanded="false">
          Services
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a class="dropdown-item" href="/application-security-assessment">
              Application Security Assessment
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="/blue-teaming-solutions">
              Blue Teaming Solutions
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="/iot-security-assessment">
              IOT Security Assessment
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="/network-security-assessment">
              Network Security Assessment
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="/adversery-simulation">
              Adversery Simulation
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="/security-training-and-awareness">
              Security Training and Awareness
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="/other-security-services">
              Other Security Services
            </a>
          </li>
        </ul>
      </li>

      <li class="nav-item ms-3">
        <a class="nav-link text-black" href="/blogs">
          Blog
        </a>
      </li>



      <li class="nav-item ms-3">
        <a class="nav-link text-black" href="#">
          About
        </a>
      </li>
      <li class="nav-item ms-3">
        <a class="nav-link text-black" href="/contact">
          Contact
        </a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Header;
