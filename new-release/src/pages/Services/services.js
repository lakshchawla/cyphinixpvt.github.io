import React from "react";
import serviceImg from "./../../images/Services.png";

function Services() {
  return (
    <div class="ParentDiv Services">
      <div class="marginFill"></div>
      <div class="marginFill"></div>
      <div class=" text-center mb-3">
        <span class="text-hollow text-transparent">SERVICES</span>
      </div>

      <p class="fs-4 col-md-8 ms-auto me-auto text-center">
      Check out our solutions and services for more information about how we can help you protect yourself or your business from today's cyber threats. 
      </p>
      <h2 class="testQuote fs-3 mt-4 mb-5">
      Protect your business, customers, and data.
      </h2>

      <div class="row mt-5">
        <div class="col-md-5">
          <img src={serviceImg} width="100%" />
        </div>


        <div class="accordion col-md-7" id="accordionExample">
        <h4 class="text-center mb-4">View our Advanced Services</h4>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Application Security Assessment
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Application Security Assessment is the assessment procedure for
                finding out the threats and knowing the gaps for bridging those.
                It helps in making the applications and software more secure.
                Sub-services we offer in Application Security Assessment are Web
                application penetration testing, API security testing, Mobile
                application penetration testing, and security code review.
                <a
                  class="mt-3 link-danger text-decoration-none d-flex"
                  href="/application-security-assessment"
                >
                  View Service
                </a>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Blue Teaming Solutions
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Blue teaming solutions are 24/7 services as a solution to all
                your problems. It secures your business on and off business
                hours and days by identifying, blocking, and fighting the
                security risks approaching your business while sustaining the
                regular working pace without disruption. The sub-services we
                offer in blue teaming solutions are SIEM, SOC, MSSP, and Digital
                forensics and incident response.
                <a
                  class="mt-3 link-danger text-decoration-none d-flex"
                  href="/blue-teaming-solutions"
                >
                  View Service
                </a>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                IOT Security Assessment
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Internet of Thing security assessment is a security audit used
                  for identifying potential risks that may prove to be
                  problematic in the future. It helps in eliminating those risks
                  in the beginning before becoming a real problem.
                </p>
                <p>
                  Sub-services we offer in the IoT Security Assessment are IoT
                  device penetration testing, medical device penetration
                  testing, ATM penetration testing, and drone penetration
                  testing.
                </p>
                <a
                  class="mt-3 link-danger text-decoration-none d-flex"
                  href="/iot-security-assessment"
                >
                  View Service
                </a>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Network Security Assessment
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Network Security Assessment identifies potential entry portals
                  used by cybercriminals as vulnerability points in your network
                  and devices. By securing the weak and risky points, we
                  eliminate the opportunities for breaching and hacking your
                  data.
                </p>
                <p>
                  Sub-services we offer in Network Security Assessment to give a
                  360° view of the network for securing it are:
                </p>
                <a
                  class="mt-3 link-danger text-decoration-none d-flex"
                  href="/network-security-assessment"
                >
                  View Service
                </a>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Adversery Simulation
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Adversary simulation investigates the security tools of an
                organization. Its comprehensive report gives the information
                about the working condition of the security system installed to
                make strategic decisions regarding the security of the sensitive
                information stored for the future. The sub-services we offer in
                adversary simulation are Red team assessment, Purple team
                assessment, and Blue team assessment.
                <a
                  class="mt-3 link-danger text-decoration-none d-flex"
                  href="/adversery-simulation"
                >
                  View Service
                </a>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading6">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse6"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Security Training and Awareness
              </button>
            </h2>
            <div
              id="collapse6"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Apart from offering security solutions to help your business
                  rise like a Phoenix, Cyphinix provides training and awareness
                  programs to help your business and employees learn more about
                  cybercrimes which will help your business deal effectively and
                  efficiently with cyber issues.
                </p>
                <p>
                  The sub-services we offer in security training and awareness
                  programs are corporate training, cyber security workshop,
                  digital safety and awareness program, security simulation lab
                  practices, and competitive hacking challenges.
                </p>
                <a
                  class="mt-3 link-danger text-decoration-none d-flex"
                  href="/security-training-and-awareness"
                >
                  View Service
                </a>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading7">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse7"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Other Security Services
              </button>
            </h2>
            <div
              id="collapse7"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <ul>
                  <li>Phishing Simulation</li>
                  <li>Spam and DDOS Management</li>
                  <li>Email Security</li>
                </ul>
                <a
                  class="mt-3 link-danger text-decoration-none d-flex"
                  href="/other-security Services"
                >
                  View Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="marginFill"></div>
    </div>
  );
}

export default Services;
