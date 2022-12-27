import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from 'yup';
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const signUpSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
   });

  const userSubmit = async (formdata, { resetForm }) => {
    console.log(formdata);

    const response = await fetch("http://localhost:5000/user/add", {
      method: "Post",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("request sent");
      resetForm();
      Swal.fire({
        icon: "success",
        title: "Awsome",
        text: "User Signed_up!!",
      });

      navigate("/login");
    } else {
      console.log("some error occured");
      Swal.fire({
        icon: "error",
        title: "wrong",
        text: "Some error",
      });
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        boxSizing: "border-box",
        boxShadow:
          "2px 2px 4px 2px rgb(0 0 0 / 31%), -2px -2px 3px 2px rgb(0 0 0 / 31%)",
        borderRadius: "5px",
        backgroundImage: `url(http://chitrahandicraft.com/wp-content/uploads/2019/02/login-page-background-images-hd-10.jpg)`,
        height: "100vh",
      }}
    >
      <div className="container d-flex align-items-center justify-content-center mt-4">
        <div className="card" style={{ width: "500px", height: "460px" }}>
          <div className="card-body">
            <Formik
              initialValues={{ name: "", email: "", password: "", age: "0" }}
              validationSchema={signUpSchema}
              onSubmit={userSubmit}
            >
              {({ values, handleSubmit, handleChange, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-center mb-4">CREATE AN ACCOUNT HERE</h3>
                  
                  <div className="text-center mb-4">
                    <TextField fullWidth id="name" label="Enter Name" variant="outlined" size="small"
                  value={values.name}
                  onChange={handleChange} />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  )
                  : 
                   null
                   }
                  </div>

                 
                  <div className="text-center mb-4"> 
                  <TextField fullWidth id="email" label="Email address" variant="outlined" size="small"
                  value={values.email}
                  onChange={handleChange} />
                  {errors.email && touched.email ? <div>{errors.email}</div> : null }
                  </div>

                 
                  <div className="text-center mb-4"> 
                  <TextField fullWidth type="password" id="password" label="Enter password" variant="outlined" size="small"
                  value={values.password}
                  onChange={handleChange} />
                  </div>

                 
                   <div className="text-center mb-4">
                    <TextField fullWidth id="age" label="Enter Age" variant="outlined" size="small"
                  value={values.age}
                  onChange={handleChange} />
                  </div>

                  <div className="text-center mb-3">
                    <Button fullWidth type="submit" variant="contained">
                    Submit
                  </Button></div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
