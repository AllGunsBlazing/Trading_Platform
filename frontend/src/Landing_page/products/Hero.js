import React from "react";

function Hero() {
  return (
    <div className="container mb-5 border-bottom">
      <div className="text-center p-5 mt-5 p-3">
        <h1>Zerodha Products</h1>
        <h3 className="mt-5 mb-4 text-muted">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <h4 className="text-muted mb-4 mt-5">
          Check out our{" "}
          <a href="/" className="text-decoration-none">
            investment offerings →{" "}
          </a>
        </h4>
      </div>
    </div>
  );
}

export default Hero;
