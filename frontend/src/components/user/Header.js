import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import app_config from "../../config";
// import { useUserContext } from "../../context/UserProvider";

const Header = () => {
  const [loggedin, setLoggedin] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const url = app_config.api_url;

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
                <img src="logo.jpg" />
              </li>

              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/main/home">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/main/signup">
                  Sign Up
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/manageAsset">
                  Manage Assets
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/admin/userManager">
                  User Manager
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/contactInfo">
                  Contact Information
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/login">
                  Add Form
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/listForm">
                  List Form
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/profile">
                  Profile
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/admin/updateuser">
                  Update User
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/responseManage">
                  Response Manager
                </NavLink>
              </li>
            </ul>
            {/* Icons */}
            <ul className="navbar-nav d-flex flex-row me-1">
              <li>
                <div className="d-flex align-items-center mr-3 mt-1">
                  {/* Avatar */}
                  <div className="dropdown">
                    <a
                      className="dropdown-toggle d-flex align-items-center hidden-arrow"
                      href="#"
                      id="navbarDropdownMenuAvatar"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={
                          currentUser.avatar
                            ? url + "/" + currentUser.avatar
                            : "avatar.png"
                        }
                        className="rounded-circle"
                        height={30}
                        alt="User Avatar"
                        loading="lazy"
                      />
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdownMenuAvatar"
                    >
                      <li>
                        <NavLink className="dropdown-item" to="/user/profile">
                          My profile
                        </NavLink>
                      </li>

                      {/* <li>
                  <button onClick={logout} className="dropdown-item" href="#">
                    Logout
                  </button>
                </li> */}
                    </ul>
                  </div>
                </div>
              </li>
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
