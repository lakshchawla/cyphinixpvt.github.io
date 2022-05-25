import React from "react";
import Header from "./components/Header";
import redlogo from "./../logos/logo-red.png";
import adversery from "./../logos/adversery.svg";
import bg1 from "./Backgrounds/bg1.jpg";
import bg2 from "./Backgrounds/bg2.jpg";
import bg3 from "./Backgrounds/bg3.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="introPage">
        <div className="bgContent">
          <div className="introText">
            <h3 className="text-white">Welcome to the</h3>
            <h1 className="gradient-text">
              <img src={redlogo} alt="" srcset="" height="100" /> Cyphinix
            </h1>
          </div>
        </div>
      </div>

      <div className="backgroundImg">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2000">
              <img src={bg1} className="bgImg" />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={bg2} className="bgImg" />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={bg3} className="bgImg" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="col-md-10 p-2 ms-auto me-auto">
        <h2 className="text-center Quote mt-5 mb-5">
          Rise with <span>security</span>/ Rise from the fire of{" "}
          <span>cybercrimes</span>
        </h2>
        <p>
          At Cyphinix, we are here to help you and your business rise fearlessly
          like Phoenix from the fire of cybercrimes and threats. The increase in
          the number of <strong> Small And Midsize Business (SMBs) </strong>{" "}
          coming online has directly increased the probability of SMBs getting
          targeted by cybercriminals and hackers. Therefore, With our
          customizable and affordable services, our dedicated(/experienced) team
          and solutions(/protection) will tackle all the cyber hurdles for the
          smooth conduct of your business.
        </p>
      </div>

      <div className="Page">
        <div className="col-md-6">
          <div className="text-center w-full mx-auto">
            <span className="text-hollow text-transparent">OUR SERVICES</span>
          </div>
        </div>

        <div className="displayCards row container ms-auto me-auto justify-content-center">
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="card">
              <div className="card-body">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-hdd-network-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5.5v3A1.5 1.5 0 0 0 6 11.5H.5a.5.5 0 0 0 0 1H6A1.5 1.5 0 0 0 7.5 14h1a1.5 1.5 0 0 0 1.5-1.5h5.5a.5.5 0 0 0 0-1H10A1.5 1.5 0 0 0 8.5 10V7H14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                </svg>
                <h5 className="card-title">Network Security Assessment</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="card">
              <div className="card-body">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-window-stack"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM6 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                  <path d="M12 1a2 2 0 0 1 2 2 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10ZM2 12V5a2 2 0 0 1 2-2h9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Zm1-4v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H3Zm12-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2h12Z" />
                </svg>
                <h5 className="card-title">Application Security Assessment</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="card">
              <div className="card-body">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-motherboard"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.5 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Zm2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Zm-10 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM5 3a1 1 0 0 0-1 1h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3Zm0 1h3v3H5V4Zm6.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2Z" />
                  <path d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2H1Zm1 11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11Z" />
                </svg>
                <h5 className="card-title">Iot Security Assessment</h5>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4">
            <div className="card">
              <div className="card-body">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-person-lines-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                </svg>
                <h5 className="card-title">Adversary Simulation</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="card">
              <div className="card-body">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-shield-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                  <path d="M8 4.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V9a.5.5 0 0 1-1 0V7.5H6a.5.5 0 0 1 0-1h1.5V5a.5.5 0 0 1 .5-.5z" />
                </svg>
                <h5 className="card-title">Blue Teaming Solutions</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <Link to="/service1">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">More...</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="PageWhite">
        <div className="Achievements">
          <div className="col-md-6 mb-5">
            <div className="text-center w-full mx-auto">
              <span className="text-hollow text-transparent">ABOUT US</span>
            </div>
          </div>

          <div className="col-md-10 p-2 ms-auto me-auto">
            <h2 className="mt-5 mb-3">Our Vision</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              dolorem, sit optio reprehenderit praesentium neque sequi? Non
              earum, vero expedita aut tempora blanditiis nostrum autem commodi.
              Ut laborum recusandae officiis.
            </p>

            <h2 className="mt-5 mb-3">Our Vision</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              dolorem, sit optio reprehenderit praesentium neque sequi? Non
              earum, vero expedita aut tempora blanditiis nostrum autem commodi.
              Ut laborum recusandae officiis.
            </p>
          </div>
        </div>
      </div> */}

      <div className="PageWhite">
        <div className="Achievements">
          <div className="highlightText">
            <h1>Don't worry!</h1>
            <h2>Our Ace values are for your ease</h2>
          </div>

          <div className="col-md-10 mt-5 p-2 ms-auto me-auto">
            <div className="Testimonials Quality row justify-content-around">
              <div class="col-md-4 p-0 mt-3">
                <div class="card border-0">
                  <div class="card-body">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill="currentColor"
                      class="bi bi-check2-circle mb-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                    <h5 class="card-title mb-3">Accuracy</h5>
                    <p class="card-text">
                      Doing the right thing at the right dose right. We are here
                      to safeguard you from the fire of the exact probable cyber
                      hurdle in your way.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4 p-0 mt-3">
                <div class="card">
                  <div class="card-body">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill="currentColor"
                      class="bi bi-puzzle mb-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7a.5.5 0 0 1 .5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 0 0-.115.118.113.113 0 0 0-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 0 0 .27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 0 0 .271-.194.213.213 0 0 0 .039-.063v-.009a.112.112 0 0 0-.012-.025.459.459 0 0 0-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 0 1 9 2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9a.5.5 0 0 1-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 0 0 .115-.118.113.113 0 0 0 .012-.025L9.5 11.5v-.003a.214.214 0 0 0-.039-.064.859.859 0 0 0-.27-.193C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 0 0-.271.194.214.214 0 0 0-.039.063v.003l.001.006a.113.113 0 0 0 .012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 0 1-.5.5H4.605a1.5 1.5 0 0 1-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855zM4.605 3a.5.5 0 0 0-.498.55l.001.007.29 3.4A.5.5 0 0 1 3.9 7.5h-.782c-.696 0-1.182-.497-1.469-.872a.459.459 0 0 0-.118-.115.112.112 0 0 0-.025-.012L1.5 6.5h-.003a.213.213 0 0 0-.064.039.86.86 0 0 0-.193.27C1.1 7.09 1 7.51 1 8c0 .491.1.912.24 1.19.07.14.14.225.194.271a.213.213 0 0 0 .063.039H1.5l.006-.001a.112.112 0 0 0 .025-.012.459.459 0 0 0 .118-.115c.287-.375.773-.872 1.469-.872H3.9a.5.5 0 0 1 .498.542l-.29 3.408a.5.5 0 0 0 .497.55h1.878c-.048-.166-.195-.352-.463-.557-.274-.21-.52-.528-.52-.943 0-.568.447-.947.862-1.154C6.807 10.123 7.387 10 8 10s1.193.123 1.638.346c.415.207.862.586.862 1.154 0 .415-.246.733-.52.943-.268.205-.415.39-.463.557h1.878a.5.5 0 0 0 .498-.55l-.001-.007-.29-3.4A.5.5 0 0 1 12.1 8.5h.782c.696 0 1.182.497 1.469.872.05.065.091.099.118.115.013.008.021.01.025.012a.02.02 0 0 0 .006.001h.003a.214.214 0 0 0 .064-.039.86.86 0 0 0 .193-.27c.14-.28.24-.7.24-1.191 0-.492-.1-.912-.24-1.19a.86.86 0 0 0-.194-.271.215.215 0 0 0-.063-.039H14.5l-.006.001a.113.113 0 0 0-.025.012.459.459 0 0 0-.118.115c-.287.375-.773.872-1.469.872H12.1a.5.5 0 0 1-.498-.543l.29-3.407a.5.5 0 0 0-.497-.55H9.517c.048.166.195.352.463.557.274.21.52.528.52.943 0 .568-.447.947-.862 1.154C9.193 5.877 8.613 6 8 6s-1.193-.123-1.638-.346C5.947 5.447 5.5 5.068 5.5 4.5c0-.415.246-.733.52-.943.268-.205.415-.39.463-.557H4.605z" />
                    </svg>
                    <h5 class="card-title mb-3">Effectiveness</h5>
                    <p class="card-text">
                      With our solutions and services, we will track the risks
                      effectively and crack those efficiently.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4 p-0 mt-3">
                <div class="card">
                  <div class="card-body">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill="currentColor"
                      class="bi bi-hand-thumbs-up mb-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                    </svg>
                    <h5 class="card-title mb-3">Confidentiality</h5>
                    <p class="card-text">
                      Confidentiality is the base of cybersecurity. At Cyphinix,
                      we take the responsibility to protect your confidential
                      information from unauthorized use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="PageWhite">
        <div className="col-md-6 mb-5">
          <div className="text-center w-full mx-auto">
            <span className="text-hollow text-transparent">TESTIMONIALS</span>
          </div>
        </div>
        <div className="col-md-10 p-2 ms-auto me-auto">
          <div className="Testimonials row justify-content-center">
            <div class="col-md-4 p-5 mt-3">
              <div class="card">
                <div class="card-body">
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum dolorem, sit optio reprehenderit praesentium neque
                    sequi? Non earum, vero expedita aut tempora blanditiis
                    nostrum autem commodi. Ut laborum recusandae officiis.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 p-5 mt-3">
              <div class="card">
                <div class="card-body">
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum dolorem, sit optio reprehenderit praesentium neque
                    sequi? Non earum, vero expedita aut tempora blanditiis
                    nostrum autem commodi. Ut laborum recusandae officiis.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 p-5 mt-3">
              <div class="card">
                <div class="card-body">
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum dolorem, sit optio reprehenderit praesentium neque
                    sequi? Non earum, vero expedita aut tempora blanditiis
                    nostrum autem commodi. Ut laborum recusandae officiis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="joinUs row ms-auto me-auto">
        <div className="col-md-8 mt-4 mt-auto mb-auto">
          <h1>Don't Late, Join us today</h1>
          <p>Experience our top-notch services.</p>
        </div>
        <div className="col-md-4 mt-4 m-auto">
          <h1>
            <a className="btn contactBtn">Services</a>
          </h1>
          <h1>
            <a className="btn contactBtn">Contact us</a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
