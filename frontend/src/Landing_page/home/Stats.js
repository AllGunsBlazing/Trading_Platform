import React from "react";

function Stats() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mt-5 d-flex flex-column p-5">
          <h1 className="mb-4">Trust With Confidence</h1>
          <ul className="list-unstyled mt-5">
            <li className="mb-5">
              <h3>Customer-First Always</h3>
              <p className="text-muted">
                That's why 1.3+ crrore trsut Zerodha with 3.5+ lakh crore worth
                of equity investment.1.3+ crrore trsut Zerodha with 3.5+ lakh
                crore worth of equity investment.
              </p>
            </li>
            <li className="mb-5">
              <h3>No spam or Gimmicks</h3>
              <p className="text-muted">
                No gimmicks,spam or annoying push notification.High quality apps
                that you use at your pace.spam or annoying push
                notification.High quality apps that you use at your pace.
              </p>
            </li>
            <li className="mb-5">
              <h3>The Zerodha Universe</h3>
              <p className="text-muted">
                Not just an app, but a whole ecosystem.Our investments in
                various startups are catered to your needs.Not just an app, but
                a whole ecosystem.
              </p>
            </li>
            <li className="mb-5">
              <h3>Do better with Money</h3>
              <p className="text-muted">
                With initiatives like nudge and Kill Switch, we don't just
                facilitate transactions,but actively help you do better with
                your money.With initiatives like nudge and Kill Switch, we don't
                just facilitate transactions.
              </p>
            </li>
          </ul>
          {/* 
                    d-flex flex-column → Ensures everything inside the column stacks properly and it's general behaviour is that any element after is placed on the side and not below it.
                    So use flex
                    mb-4 on h2 → Adds margin-bottom to separate the heading from the list.list-unstyled on <ul> → Removes default list styles for a cleaner look. */}
        </div>
        <div className="col-6 d-flex flex-column justify-content-center">
          <img src="Media/ecosystem.png" className="img-fluid w-100%" />
          {/* img-fluid - automatically resizes according to container while maintaining <aspect-size></aspect-size> */}

          <div className="d-flex justify-content-center gap-4 mt-4 'text-center p-5">
            <a
              href=""
              className="fw-bold text-primary"
              style={{ textDecoration: "none" }}
            >
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a
              href=""
              className="fw-bold text-primary"
              style={{ textDecoration: "none" }}
            >
              Try Kite
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
