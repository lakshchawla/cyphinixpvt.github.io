import React from "react";

function Blogs() {
  return (
    <div class="ParentDiv">
    <div class="marginFill"></div>
    <div class="marginFill"></div>

    <div class="col-md-6 mb-5">
      <div class="text-center w-full mx-auto">
        <span class="text-hollow text-transparent">TOP BLOGS</span>
      </div>
    </div>

    <div class="Blog row">
      <div class="col-md-4 col-sm-6 mt-3">
        <div class="card cardMain">
          <div class="cardImg"></div>
          <div class="card-body">
            <h5 class="card-title">How Hackers can jam cell phone signals?</h5>
            <p class="card-text mb-5">
              Mobile phones are used for a variety of purposes, such as keeping in touch with family members, for
              conducting business, and in order to have access to a telephone in the event of an emergency. Some people
              carry more than...
            </p>

            <a href="/blogs-how-hackers-can-jam-cell-phone-signals" class="cardLink">
              Read More
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="marginFill"></div>
  </div>
  );
}

export default Blogs;
