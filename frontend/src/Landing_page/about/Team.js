import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center mt-5">People</h1>
      </div>

      <div
        className="row p-5 mt-5 text-muted fs-6"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="Media/nithinKamath.jpg"
            style={{
              borderRadius: "100%",
              height: "75%",
              width: "60%",
            }}
            alt="founder-image"
          />
          <h4 className=" mt-3">Nithin kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-4">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
            Playing basketball is his zen.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p> Plays Basketball is his zen</p>
          <p>
            {" "}
            Connect on{" "}
            <a href="\" style={{ textDecoration: "none" }}>
              Homepage{" "}
            </a>
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA{" "}
            </a>{" "}
            /{" "}
            <a href="https://x.com/home" style={{ textDecoration: "none" }}>
              Twitter{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
