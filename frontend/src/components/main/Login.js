import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const loginSubmit = async (formdata, { resetForm }) => {
    console.log(formdata);
    resetForm();

    const response = await fetch("http://localhost:5000/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("request sent");
      resetForm();
      const data = await response.json();
      if (data.isAdmin) {
        sessionStorage.setItem("admin", JSON.stringify(data));
        navigate("/admin/usermanager");
      } else {
        sessionStorage.setItem("user", JSON.stringify(data));
        navigate("/user/listForm");
      }
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "You have successfully logged in ☺",
      });
      // navigate("/addForm/:formid");
    } else if (response.status === 401) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Invalid Credentials",
      });
    } else {
      console.log("Unknown error occured");
    }
  };
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        background: "linear-gradient(0deg, red, yellow)",
        backgroundImage: `url(https://wallpaperaccess.com/full/1900932.jpg)`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="container d-flex align-items-center justify-content-center">
        <div className="card" style={{ width: "500px", height: "370px" }}>
          <div className="card-body">
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={loginSubmit}
            >
              {({ handleSubmit, values, handleChange, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-center mb-3 login-title">LOGIN HERE</h3>

                  <div className="text-center mb-4">
                    <TextField
                      fullWidth
                      id="email"
                      label="Email address"
                      variant="outlined"
                      size="small"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && touched.email ? (
                      <div>{errors.email}</div>
                    ) : null}
                  </div>

                  <div className="text-center mb-4">
                    <TextField
                      fullWidth
                      type="password"
                      id="password"
                      label="Enter password"
                      variant="outlined"
                      size="small"
                      value={values.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="row">
                    <div className="form-group clearfix col d-flex justify-content-center">
                      <div className="custom-control custom-checkbox float-left m-6">
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Remember me"
                          />
                        </FormGroup>
                      </div>
                      <div className="col d-flex justify-content-center align-items-center">
                        <a href="#" id="forgot-link">
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <div className="row mb-2"> */}
                  <div className="text-center mb-3">
                    <Button fullWidth type="submit" variant="contained">
                      Submit
                    </Button>
                  </div>
                    <div className="d-flex justify-content-center align-items-center">
                      NO ACCOUNT? <span>
                        <Link to="/main/signup">SIGN UP</Link>
                      </span>
                    </div>
                  {/* </div> */}
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
