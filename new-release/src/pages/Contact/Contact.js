import React from "react";

function Contact() {
  return (
    <div class="ParentDiv">
    <div class="marginFill"></div>

    <div class=" mb-4 w-full mx-auto">
      <span class="text-hollow text-transparent">CONTACT US</span>
    </div>

    <div class="row">
      <div class="contactPage mt-3 col-md-7">
        <div class="displayCards row container ms-auto me-auto justify-content-center">
          <div class="col-lg-6 mt-4">
            <a href="/contact-sales">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-center">Sales</h5>
                  <h6 class="text-center">Get in touch</h6>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-6 mt-4">
            <a href="mailto:support@cyphinix.com">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-center">General Enquiry</h5>
                  <h6 class="text-center">Drop us a mail</h6>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="mt-5">
          <h3 class="mt-3 fs-4">Email: support@cyphinix.xom</h3>
          <h3 class="mt-3 fs-4">Phone: +91 XXX XXX XXXX</h3>
          <h3 class="mt-3 fs-4">Location: Nashik, Maharashtra, IN</h3>
        </div>
      </div>

      <div class="mt-3 col-md-5">
        <div class="card shadow-lg p-3">
          <form action="/send-message" method="post">
            <h2 class="mt-2 mb-4">Drop a Message</h2>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Name
              </label>
              <input name="name" class="form-control" type="text" placeholder="John Doe"
                aria-label="default input example" />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Company
              </label>
              <input name="company" class="form-control" type="text" placeholder="Company inc."
                aria-label="default input example" />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input name="email" type="email" class="form-control" id="exampleFormControlInput1"
                placeholder="name@example.com" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea name="msg" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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

export default Contact;
