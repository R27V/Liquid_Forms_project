import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Button,TextField } from "@mui/material";

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
      sessionStorage.setItem("user", JSON.stringify(data));
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Loggedin Successfully",
      });

      navigate("/addForm/:formid");
    } else if (response.status === 401) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Loggedin Failed",
      });
    } else {
      console.log("Unknown error occured");
    }
  };
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        backgroundImage: `url(https://wallpaperaccess.com/full/1900932.jpg)`,
        height: "100vh",
      }}
    >
      <div className="container d-flex align-items-center justify-content-center">
        <div className="card" style={{ width: "500px", height: "300px" }}>
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

                  {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl> */}

                  <Button type="submit" variant="contained">
                    Submit
                  </Button>
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
