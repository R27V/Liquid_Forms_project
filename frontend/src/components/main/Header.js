import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [loggedin, setLoggedin] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#232a69" }}
      >
        {/* Container wrapper */}
        <div className="container">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper     */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Link */}
              <li className="nav-item">
                <img src="logo1.png" style={{ height: "40px" }} />
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/main/home">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/main/signup">
                  Sign Up
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/user/manageAsset">
                  Manage Assets
                </NavLink>
              </li> */}
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/admin/userManager">
                  User Manager
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/contactInfo">
                  Contact Information
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/login">
                  Add Form
                </NavLink>
              </li>

              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/user/listForm">
                  List Form
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/profile">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/updateuser">
                  Update User
                </NavLink>
              </li> */}
            </ul>
            {/* Icons */}
            <ul className="navbar-nav d-flex flex-row me-1">
              <li className="nav-item me-3 me-lg-0">
                {loggedin ? (
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      setLoggedin(false);
                    }}
                  >
                    <i className="fas fa-sign-out-alt"></i>Logout
                  </button>
                ) : (
                  <NavLink className="btn btn-primary" to="/main/login">
                    <i className="fas fa-sign-in"></i> Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
