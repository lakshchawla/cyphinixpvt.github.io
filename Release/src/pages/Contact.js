import React from "react";

function Contact() {
  return (
    <div class="col-md-10 mt-5 mb-5 p-2 ms-auto me-auto">

        <div class="row">
            <div class="col-md-6 pe-5">
                <div class=" mb-4 w-full mx-auto">
                    <span class="text-hollow text-transparent">CONTACT US</span>
                </div>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minus nesciunt culpa error maxime sit est
                quod aliquam eaque autem, blanditiis, soluta repellat. Ut necessitatibus excepturi expedita rem pariatur
                rerum?
            </div>

            <div class="col-md-6 ps-5">
                <div class="card shadow-lg p-3">
                    <form action="" method="post">
                    <h2 class="mt-2 mb-4">Drop a Message</h2>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input class="form-control" type="text" placeholder="John Doe"
                            aria-label="default input example"/>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Company</label>
                        <input class="form-control" type="text" placeholder="Company inc."
                            aria-label="default input example"/>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button class="btn msgBtn" type="submit">Submit</button>
                </form>
                </div>
            </div>
        </div>


    </div>
  );
}

export default Contact;
