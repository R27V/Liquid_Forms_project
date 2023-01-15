import React from "react";
import BasicSlider from "../common/BasicSlider";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="homeBody p-3">
        <div className="d-flex  align-items-center justify-content-center">
          <h1
            className="m-4"
            style={{ fontSize: "50px", color: "#232a69", fontWeight: "bolder" }}
          >
            Get insights quickly, with Digital Forms
          </h1>
        </div>
        <div className="row">
          <div className="col-md-6 define">
            <div className="m-2 d-flex  align-items-start justify-content-end">
              <div>
                {" "}
                <p className="header-content ">
                  Build powerful online forms and customize them to your heart's
                  delight.
                </p>
                <p style={{ fontSize: "30px" }}>
                  Our digital form gives you an award-winning interface, easy
                  customization, galleries, templates and reporting. Check out
                  our popular features.
                </p>
                <button className="btn btn-primary"> SIGN UP NOW</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 main">
            <div
              className="d-flex  align-items-start justify-content-end"
              style={{ height: "560px", overflow: "hidden" }}
            >
              <BasicSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
