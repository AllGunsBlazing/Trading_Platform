import React from "react";
function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6 justify-content-centre">
          <img
            className=""
            style={{ width: "80%" }}
            src="Media/education.svg"
          />
        </div>
        <div className="col-6">
          <h1 className="mb-3 mt-5 fs-2">Free And Open Market Education</h1>
          <p className="">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }} className="mb-5 mt-2">
            Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" className="mt-3" style={{ textDecoration: "none" }}>
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
