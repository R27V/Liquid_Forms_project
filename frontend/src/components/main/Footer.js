import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container" />
      <footer>
        {/* Footer main */}
        <section className="ft-main">
          <div className="ft-main-item">
            <h2 className="ft-title">About</h2>
            <ul className="footer_ul">
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Resources</h2>
            <ul className="footer_ul">
              <li>
                <a href="#">Docs</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">eBooks</a>
              </li>
              <li>
                <a href="#">Webinars</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Contact</h2>
            <ul className="footer_ul">
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Sales</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Stay Updated</h2>
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
        </section>
        {/* Footer social */}
        <section className="ft-social">
          <ul className="footer_ul ft-social-list">
            <li>
              <a href="#">
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
            </li>
          </ul>
        </section>
        {/* Footer legal */}
        <section className="ft-legal">
          <ul className="footer_ul ft-legal-list">
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>© 2019 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
        Digitalforms.com
      </a>
      </li>
          </ul>
        </section>
      </footer>
    </div>
  );
};
export default Footer;
