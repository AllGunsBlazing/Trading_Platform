import React from "react";

function Universe() {
  return (
    // <div className="container mt-5">
    //   <div className="row">
    //     <div className="col text-center">
    //       <h1>The Zerodha Universe</h1>
    //       <h5 className="text-muted mt-4">
    //         Extend your trading and investment experience even further with our
    //         partner platforms
    //       </h5>
    //       <div className="col-4 p-3 ">
    //         <img src="Media/smallcaseLogo.png" />
    //         <p className="text-muted text-small"></p>
    //       </div>
    //       <div className="col-4 p-3 ">
    //         <img src="Media/smallcaseLogo.png" />
    //         <p className="text-muted text-small"></p>
    //       </div>
    //       <div className="col-4 p-3">
    //         <img src="" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaselogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaselogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaselogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
