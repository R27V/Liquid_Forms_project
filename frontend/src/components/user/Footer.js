import React from "react";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#232a69", color: "#ffffff" }}>
      {/* Footer */}
      <footer className="text-center text-lg-start">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                <i class="fa-brands fa-wpforms me-3"></i>
                  DIGITAL fORMS
                </h6>
                <p>
                  Our Digital form provides numerous features for building forms
                  and surveys without needing coding skills, with the security
                  standards.
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    SignUp
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Login
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    AboutUs
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3" /> Hazratganj, Lucknow UP
                  226024
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  digitalform2022@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3" /> +91 7985756123
                </p>
                <p>
                  <i className="fas fa-print me-3" /> +91 7309987188
                </p>
              </div>
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h2 className="text-uppercase fw-bold mb-4">Stay Updated</h2>
                <p>Subscribe to our newsletter to get our latest news.</p>
                <form className="footer_form">
                  <input
                    className="footer_email"
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                  />
                  <input
                    className="footer_submit"
                    type="submit"
                    defaultValue="Subscribe"
                  />
                </form>
              </div>
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Digitalforms.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
  );
};

export default Footer;
