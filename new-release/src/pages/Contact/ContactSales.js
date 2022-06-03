import React from "react";

function ContactSales() {
  return (
    <div class="ParentDiv">
      <div class="marginFill"></div>

      <div class=" mb-4 w-full mx-auto">
        <span class="text-hollow text-transparent">CONTACT SALES</span>
      </div>

      <div class="row">
        <div class="mt-3 col-md-7">
          <h3>Schedule your call with our team at your convenience.</h3>
          <a
            href=""
            class="btn homeBtn mt-2"
            onclick="Calendly.initPopupWidget({url: 'https://calendly.com/lakshaychawla6677/client-meeting'});return false;"
          >
            Schedule
          </a>

          <h5 class="mt-5">or</h5>
          <h3 class="mt-3">
            Drop us an email at
            <a href="sales@cyphinix.com">sales@cyphinix.com</a>
          </h3>

          <p class="mt-5">
            Didn't find what were you looking for,{" "}
            <a href="/contact">go back.</a>{" "}
          </p>
        </div>

        <div class="mt-3 col-md-5">
          <div class="card shadow-lg p-3">
            <form action="/send-message" method="post">
              <h2 class="mt-2 mb-4">Drop a Message</h2>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Name
                </label>
                <input
                  name="name"
                  class="form-control"
                  type="text"
                  placeholder="John Doe"
                  aria-label="default input example"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Company
                </label>
                <input
                  name="company"
                  class="form-control"
                  type="text"
                  placeholder="Company inc."
                  aria-label="default input example"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  name="msg"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <input type="checkbox" name="" id="receiveComm" />
              <label for="receiveComm" className="ms-2">
                I agree to receive further Communications from Cyphinix
              </label>

              <button class="btn msgBtn d-block mt-2" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="marginFill"></div>
    </div>
  );
}

export default ContactSales;
