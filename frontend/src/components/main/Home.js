import React from "react";
import BasicSlider from "../common/BasicSlider";

const Home = () => {
  return (
    <>
      {/* <div className="homeBody p-3">
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
      </div> */}

      <div id="preview" className="preview">
        <div style={{ display: "none" }} />
        <div>
          <div data-draggable="true" style={{ position: "relative" }}>
            <div
              className="d-flex  align-items-center justify-content-center"
              style={{ backgroundColor: "#d5dded" }}
            >
              <h1
                className="m-4"
                style={{
                  fontSize: "50px",
                  color: "#232a69",
                  fontWeight: "bolder",
                }}
              >
                Get insights quickly, with Digital Forms
              </h1>
            </div>
          </div>
          <div data-draggable="true" style={{ position: "relative" }}>
            {/**/}
            {/**/}
            <section
              draggable="false"
              className="overflow-hidden pt-0"
              data-v-271253ee=""
            >
              <section className="mb-10 background-radial-gradient overflow-hidden">
                {" "}
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      " .background-radial-gradient { background-color: hsl(218, 41%, 15%); background-image: radial-gradient( 650px circle at 0% 0%, hsl(218, 41%, 35%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100% ), radial-gradient( 1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100% ); } #radius-shape-1 { height: 220px; width: 220px; top: -60px; left: -130px; background: radial-gradient(#44006b, #ad1fff); overflow: hidden; } #radius-shape-2 { border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%; bottom: -60px; right: -110px; width: 300px; height: 300px; background: radial-gradient(#44006b, #ad1fff); overflow: hidden; } .bg-glass { background-color: hsla(0, 0%, 100%, 0.9) !important; backdrop-filter: saturate(200%) blur(25px); } ",
                  }}
                />{" "}
                <div className="container px-4 py-5 px-md-5 text-center text-lg-start">
                  {" "}
                  <div className="row gx-lg-5 align-items-center mb-5">
                    {" "}
                    <div
                      className="col-lg-6 mb-5 mb-lg-0"
                      style={{ zIndex: 10 }}
                    >
                      {" "}
                      <h1
                        className="my-5 display-3 fw-bold ls-tight"
                        style={{ color: "hsl(218, 81%, 95%)" }}
                      >
                        {" "}
                        <span>The best site to</span> <br />{" "}
                        <span style={{ color: "hsl(218, 81%, 75%)" }}>
                          Build powerful online forms and customize them to your
                          heart's delight.
                        </span>{" "}
                      </h1>{" "}
                      <p
                        className="mb-4 opacity-70"
                        style={{
                          color: "hsl(218, 81%, 85%)",
                          fontSize: "20px",
                        }}
                      >
                        Our digital form gives you an award-winning interface,
                        easy customization, galleries, templates and reporting.
                        Check out our popular features.
                      </p>{" "}
                    </div>{" "}
                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                      {" "}
                      <div
                        id="radius-shape-1"
                        className="position-absolute rounded-circle shadow-5-strong"
                      />{" "}
                      <div
                        id="radius-shape-2"
                        className="position-absolute shadow-5-strong"
                      />{" "}
                      <div className="card bg-glass">
                        {" "}
                        <div className="card-body px-4 py-5 px-md-5">
                          {" "}
                          <form>
                            {" "}
                            {/* 2 column grid layout with text inputs for the first and last names */}{" "}
                            <div className="row">
                              {" "}
                              <div className="col-md-6 mb-4">
                                {" "}
                                <div className="form-outline">
                                  {" "}
                                  <input
                                    type="text"
                                    id="form3Example1"
                                    className="form-control"
                                  />{" "}
                                  <label
                                    className="form-label"
                                    htmlFor="form3Example1"
                                    style={{ marginLeft: 0 }}
                                  >
                                    First name
                                  </label>{" "}
                                  <div className="form-notch">
                                    <div
                                      className="form-notch-leading"
                                      style={{ width: 9 }}
                                    />
                                    <div
                                      className="form-notch-middle"
                                      style={{ width: "68.8px" }}
                                    />
                                    <div className="form-notch-trailing" />
                                  </div>
                                </div>{" "}
                              </div>{" "}
                              <div className="col-md-6 mb-4">
                                {" "}
                                <div className="form-outline">
                                  {" "}
                                  <input
                                    type="text"
                                    id="form3Example2"
                                    className="form-control"
                                  />{" "}
                                  <label
                                    className="form-label"
                                    htmlFor="form3Example2"
                                    style={{ marginLeft: 0 }}
                                  >
                                    Last name
                                  </label>{" "}
                                  <div className="form-notch">
                                    <div
                                      className="form-notch-leading"
                                      style={{ width: 9 }}
                                    />
                                    <div
                                      className="form-notch-middle"
                                      style={{ width: 68 }}
                                    />
                                    <div className="form-notch-trailing" />
                                  </div>
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                            {/* Email input */}{" "}
                            <div className="form-outline mb-4">
                              {" "}
                              <input
                                type="email"
                                id="form3Example3"
                                className="form-control"
                              />{" "}
                              <label
                                className="form-label"
                                htmlFor="form3Example3"
                                style={{ marginLeft: 0 }}
                              >
                                Email address
                              </label>{" "}
                              <div className="form-notch">
                                <div
                                  className="form-notch-leading"
                                  style={{ width: 9 }}
                                />
                                <div
                                  className="form-notch-middle"
                                  style={{ width: "88.8px" }}
                                />
                                <div className="form-notch-trailing" />
                              </div>
                            </div>{" "}
                            {/* Password input */}{" "}
                            <div className="form-outline mb-4">
                              {" "}
                              <input
                                type="password"
                                id="form3Example4"
                                className="form-control"
                              />{" "}
                              <label
                                className="form-label"
                                htmlFor="form3Example4"
                                style={{ marginLeft: 0 }}
                              >
                                Password
                              </label>{" "}
                              <div className="form-notch">
                                <div
                                  className="form-notch-leading"
                                  style={{ width: 9 }}
                                />
                                <div
                                  className="form-notch-middle"
                                  style={{ width: "64.8px" }}
                                />
                                <div className="form-notch-trailing" />
                              </div>
                            </div>{" "}
                            {/* Checkbox */}{" "}
                            <div className="form-check d-flex justify-content-center mb-4">
                              {" "}
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="form2Example33"
                                defaultChecked=""
                              />{" "}
                              <label
                                className="form-check-label"
                                htmlFor="form2Example33"
                              >
                                Subscribe to our newsletter
                              </label>{" "}
                            </div>{" "}
                            {/* Submit button */}{" "}
                            <button
                              type="submit"
                              className="btn  btn-primary btn-block mb-4"
                              aria-controls="#picker-editor"
                            >
                              Sign up
                            </button>{" "}
                            {/* Register buttons */}{" "}
                            <div className="text-center">
                              {" "}
                              <p>or sign up with:</p>{" "}
                              <button
                                type="button"
                                className="btn btn-link btn-floating mx-1"
                              >
                                {" "}
                                <i
                                  className="fab fa-facebook-f"
                                  aria-controls="#picker-editor"
                                />{" "}
                              </button>{" "}
                              <button
                                type="button"
                                className="btn btn-link btn-floating mx-1"
                              >
                                {" "}
                                <i
                                  className="fab fa-google"
                                  aria-controls="#picker-editor"
                                />{" "}
                              </button>{" "}
                              <button
                                type="button"
                                className="btn btn-link btn-floating mx-1"
                              >
                                {" "}
                                <i
                                  className="fab fa-twitter"
                                  aria-controls="#picker-editor"
                                />{" "}
                              </button>{" "}
                              <button
                                type="button"
                                className="btn btn-link btn-floating mx-1"
                              >
                                {" "}
                                <i
                                  className="fab fa-github"
                                  aria-controls="#picker-editor"
                                />{" "}
                              </button>{" "}
                            </div>{" "}
                          </form>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </section>
            </section>
            {/**/}
          </div>
          <div data-draggable="true" style={{ position: "relative" }}>
            {/**/}
            {/**/}
            <section
              draggable="false"
              className="container pt-5"
              data-v-271253ee=""
            >
              <section className="mb-10 text-center">
                {" "}
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      " hr.divider-vertical { position: absolute; right: 0; top: 0; width: 1px; background-image: linear-gradient( 180deg, transparent, hsl(0, 0%, 40%), transparent ); background-color: transparent; height: 100%; } ",
                  }}
                />{" "}
                <div className="row">
                  {" "}
                  <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 position-relative">
                    {" "}
                    <i
                      className="fas fa-cubes fa-3x text-primary mb-4"
                      aria-controls="#picker-editor"
                    />{" "}
                    <h5 className="text-primary fw-bold mb-3">5000+</h5>{" "}
                    <h6 className="fw-normal mb-0">Components</h6>{" "}
                    <hr className="divider-vertical d-none d-md-block" />{" "}
                  </div>{" "}
                  <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 position-relative">
                    {" "}
                    <i
                      className="fas fa-layer-group fa-3x text-primary mb-4"
                      aria-controls="#picker-editor"
                    />{" "}
                    <h5 className="text-primary fw-bold mb-3">490+</h5>{" "}
                    <h6 className="fw-normal mb-0">Design blocks</h6>{" "}
                    <hr className="divider-vertical d-none d-lg-block" />{" "}
                  </div>{" "}
                  <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 position-relative">
                    {" "}
                    <i
                      className="fas fa-image fa-3x text-primary mb-4"
                      aria-controls="#picker-editor"
                    />{" "}
                    <h5 className="text-primary fw-bold mb-3">100+</h5>{" "}
                    <h6 className="fw-normal mb-0">Templates</h6>{" "}
                    <hr className="divider-vertical d-none d-md-block" />{" "}
                  </div>{" "}
                  <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 position-relative">
                    {" "}
                    <i
                      className="fas fa-plug fa-3x text-primary mb-4"
                      aria-controls="#picker-editor"
                    />{" "}
                    <h5 className="text-primary fw-bold mb-3">28</h5>{" "}
                    <h6 className="fw-normal mb-0">Plugins</h6>{" "}
                  </div>{" "}
                </div>{" "}
              </section>
            </section>
            {/**/}
          </div>
          <div data-draggable="true" style={{ position: "relative" }}>
            {/**/}
            {/**/}
            <section
              draggable="false"
              className="container pt-5"
              data-v-271253ee=""
            >
              <section className="mb-10">
                {" "}
                <div className="d-flex justify-content-center">
                  {" "}
                  <div className="text-center" style={{ maxWidth: 700 }}>
                    {" "}
                    <p className="text-uppercase text-primary fw-bold mb-4">
                      Features
                    </p>{" "}
                    <h2 className="fw-bold mb-4">Why is it so great?</h2>{" "}
                    <p className="text-muted mb-5">
                      Nunc tincidunt vulputate elit. Mauris varius purus
                      malesuada neque iaculis malesuada. Aenean gravida magna
                      orci, non efficitur est porta id. Donec magna diam.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="row">
                  {" "}
                  <div className="col-lg-3 col-md-6 mb-5">
                    {" "}
                    <div className="d-flex align-items-start">
                      {" "}
                      <div className="flex-shrink-0">
                        {" "}
                        <i className="fas fa-check-circle fa-lg text-success fa-fw" />{" "}
                      </div>{" "}
                      <div className="flex-grow-1 ms-3">
                        {" "}
                        <p className="fw-bold mb-1">Support 24/7</p>{" "}
                        <p className="text-muted mb-0">
                          Pellentesque mollis, metus nec fringilla aliquam
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-3 col-md-6 mb-5">
                    {" "}
                    <div className="d-flex align-items-start">
                      {" "}
                      <div className="flex-shrink-0">
                        {" "}
                        <i className="fas fa-check-circle fa-lg text-success fa-fw" />{" "}
                      </div>{" "}
                      <div className="flex-grow-1 ms-3">
                        {" "}
                        <p className="fw-bold mb-1">Tracking</p>{" "}
                        <p className="text-muted mb-0">
                          Magna lacus iaculis elit, quis pharetra varius.
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-3 col-md-6 mb-5">
                    {" "}
                    <div className="d-flex align-items-start">
                      {" "}
                      <div className="flex-shrink-0">
                        {" "}
                        <i className="fas fa-check-circle fa-lg text-success fa-fw" />{" "}
                      </div>{" "}
                      <div className="flex-grow-1 ms-3">
                        {" "}
                        <p className="fw-bold mb-1">Reporting</p>{" "}
                        <p className="text-muted mb-0">
                          Pellentesque varius ex vel consequat quis.
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-3 col-md-6 mb-5">
                    {" "}
                    <div className="d-flex align-items-start">
                      {" "}
                      <div className="flex-shrink-0">
                        {" "}
                        <i className="fas fa-check-circle fa-lg text-success fa-fw" />{" "}
                      </div>{" "}
                      <div className="flex-grow-1 ms-3">
                        {" "}
                        <p className="fw-bold mb-1">Analytics</p>{" "}
                        <p className="text-muted mb-0">
                          Vestibulum gravida iaculis nisl, vel lobortis eros.
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-3 col-md-6 mb-5">
                    {" "}
                    <div className="d-flex align-items-start">
                      {" "}
                      <div className="flex-shrink-0">
                        {" "}
                        <i className="fas fa-check-circle fa-lg text-success fa-fw" />{" "}
                      </div>{" "}
                      <div className="flex-grow-1 ms-3">
                        {" "}
                        <p className="fw-bold mb-1">Huge community</p>{" "}
                        <p className="text-muted mb-0">
                          Praesent vulputate lacus bibendum augue .
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-3 col-md-6 mb-5">
                    {" "}
                    <div className="d-flex align-items-start">
                      {" "}
                      <div className="flex-shrink-0">
                        {" "}
                        <i className="fas fa-check-circle fa-lg text-success fa-fw" />{" "}
                      </div>{" "}
                      <div className="flex-grow-1 ms-3">
                        {" "}
                        <p className="fw-bold mb-1">Easy to use</p>{" "}
                        <p className="text-muted mb-0">
                          Sed mauris ex, imperdiet sit amet nisl ac, ultrices.
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-3 col-md-6 mb-5">
                    {" "}
                    <div className="d-flex align-items-start">
                      {" "}
                      <div className="flex-shrink-0">
                        {" "}
                        <i className="fas fa-check-circle fa-lg text-success fa-fw" />{" "}
                      </div>{" "}
                      <div className="flex-grow-1 ms-3">
                        {" "}
                        <p className="fw-bold mb-1">Frequent updates</p>{" "}
                        <p className="text-muted mb-0">
                          Aenean lectus ex, placerat id tellus in eros.
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-3 col-md-6 mb-5">
                    {" "}
                    <div className="d-flex align-items-start">
                      {" "}
                      <div className="flex-shrink-0">
                        {" "}
                        <i className="fas fa-check-circle fa-lg text-success fa-fw" />{" "}
                      </div>{" "}
                      <div className="flex-grow-1 ms-3">
                        {" "}
                        <p className="fw-bold mb-1">Responsive</p>{" "}
                        <p className="text-muted mb-0">
                          Donec consequat orci quis volutpat imperdiet.
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </section>
            </section>
            {/**/}
          </div>
          <div data-draggable="true" style={{ position: "relative" }}>
            {/**/}
            {/**/}
            <section
              draggable="false"
              className="container pt-5"
              data-v-271253ee=""
            >
              <section className="mb-10 text-center">
                {" "}
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      " .cascading-right { margin-right: -50px; } @media (max-width: 991.98px) { .cascading-right { margin-right: 0; } } ",
                  }}
                />{" "}
                {/* Jumbotron */}{" "}
                <div className="container py-4">
                  {" "}
                  <div className="row g-0 align-items-center">
                    {" "}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                      {" "}
                      <div
                        className="card cascading-right"
                        style={{
                          background: "hsla(0, 0%, 100%, 0.55)",
                          backdropFilter: "blur(30px)",
                        }}
                      >
                        {" "}
                        <div className="card-body py-5 px-md-5 shadow-5">
                          {" "}
                          <h2 className="fw-bold mb-6">
                            {" "}
                            <span>
                              Trusted by the best companies
                            </span> <br />{" "}
                            <span className="text-primary">
                              around the world
                            </span>{" "}
                          </h2>{" "}
                          <div className="row">
                            {" "}
                            <div className="col-6 mb-5">
                              {" "}
                              <img
                                src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo6-1.png"
                                className="img-fluid grayscale px-2 px-md-5"
                                alt=""
                                aria-controls="#picker-editor"
                              />{" "}
                            </div>{" "}
                            <div className="col-6 mb-5">
                              {" "}
                              <img
                                src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo5-1.png"
                                className="img-fluid grayscale px-2 px-md-5"
                                alt=""
                                aria-controls="#picker-editor"
                              />{" "}
                            </div>{" "}
                            <div className="col-6">
                              {" "}
                              <img
                                src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo3-1.png"
                                className="img-fluid grayscale px-2 px-md-5"
                                alt=""
                                aria-controls="#picker-editor"
                              />{" "}
                            </div>{" "}
                            <div className="col-6">
                              {" "}
                              <img
                                src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo4-1.png"
                                className="img-fluid grayscale px-2 px-md-5"
                                alt=""
                                aria-controls="#picker-editor"
                              />{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                      {" "}
                      <img
                        src="https://mdbootstrap.com/img/new/textures/full/166.jpg"
                        className="w-100 rounded-4 shadow-4"
                        alt=""
                        aria-controls="#picker-editor"
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Jumbotron */}{" "}
              </section>
            </section>
            {/**/}
          </div>
          <div data-draggable="true" style={{ position: "relative" }}>
            {/**/}
            {/**/}
            <section
              draggable="false"
              className="container pt-5"
              data-v-271253ee=""
            >
              <section className="mb-10 text-center text-lg-start">
                {" "}
                <h2 className="fw-bold mb-5 text-center">
                  <span>Meet the</span> <u className="text-primary">team</u>
                </h2>{" "}
                <div className="row gx-lg-5">
                  {" "}
                  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    {" "}
                    <div className="card mb-3 shadow-2-strong">
                      {" "}
                      <div className="card-body">
                        {" "}
                        <div className="row d-flex align-items-center">
                          {" "}
                          <div className="col-lg-5">
                            {" "}
                            <img
                              src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                              alt=""
                              className="img-fluid rounded-4 mb-4 mb-lg-0"
                              aria-controls="#picker-editor"
                            />{" "}
                          </div>{" "}
                          <div className="col-lg-7">
                            {" "}
                            <h5 className="fw-bold">Darren Randolph</h5>{" "}
                            <p className="text-muted">Marketing expert</p>{" "}
                            <ul className="list-unstyled mb-0">
                              {" "}
                              <a href="#!" className="px-1">
                                {" "}
                                <i
                                  className="fab fa-facebook"
                                  aria-controls="#picker-editor"
                                />{" "}
                              </a>{" "}
                              <a href="#!" className="px-1">
                                {" "}
                                <i
                                  className="fab fa-twitter"
                                  aria-controls="#picker-editor"
                                />{" "}
                              </a>{" "}
                              <a href="#!" className="px-1">
                                {" "}
                                <i
                                  className="fab fa-linkedin-in"
                                  aria-controls="#picker-editor"
                                />{" "}
                              </a>{" "}
                            </ul>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-4 mb-4 mb-lg-0">
                    {" "}
                    <div className="card mb-3 shadow-2-strong">
                      {" "}
                      <div className="card-body">
                        {" "}
                        <div className="row d-flex align-items-center">
                          {" "}
                          <div className="col-lg-5">
                            {" "}
                            <img
                              src="https://mdbootstrap.com/img/new/avatars/4.jpg"
                              alt=""
                              className="img-fluid rounded-4 mb-4 mb-lg-0"
                              aria-controls="#picker-editor"
                            />{" "}
                          </div>{" "}
                          <div className="col-lg-7">
                            {" "}
                            <h5 className="fw-bold">Maliha Welch</h5>{" "}
                            <p className="text-muted">Web designer</p>{" "}
                            <ul className="list-unstyled mb-0">
                              {" "}
                              <a href="#!" className="px-1">
                                {" "}
                                <i
                                  className="fab fa-dribbble"
                                  aria-controls="#picker-editor"
                                />{" "}
                              </a>{" "}
                              <a href="#!" className="px-1">
                                {" "}
                                <i
                                  className="fab fa-twitter"
                                  aria-controls="#picker-editor"
                                />{" "}
                              </a>{" "}
                              <a href="#!" className="px-1">
                                {" "}
                                <i
                                  className="fab fa-linkedin-in"
                                  aria-controls="#picker-editor"
                                />{" "}
                              </a>{" "}
                            </ul>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-4 mb-4 mb-lg-0">
                    {" "}
                    <div className="card mb-3 shadow-2-strong">
                      {" "}
                      <div className="card-body">
                        {" "}
                        <div className="row d-flex align-items-center">
                          {" "}
                          <div className="col-lg-5">
                            {" "}
                            <img
                              src="https://mdbootstrap.com/img/new/avatars/12.jpg"
                              alt=""
                              className="img-fluid rounded-4 mb-4 mb-lg-0"
                              aria-controls="#picker-editor"
                            />{" "}
                          </div>{" "}
                          <div className="col-lg-7">
                            {" "}
                            <h5 className="fw-bold">Avaya Hills</h5>{" "}
                            <p className="text-muted">Copywritter</p>{" "}
                            <ul className="list-unstyled mb-0">
                              {" "}
                              <a href="#!" className="px-1">
                                {" "}
                                <i
                                  className="fab fa-facebook"
                                  aria-controls="#picker-editor"
                                />{" "}
                              </a>{" "}
                              <a href="#!" className="px-1">
                                {" "}
                                <i
                                  className="fab fa-twitter"
                                  aria-controls="#picker-editor"
                                />{" "}
                              </a>{" "}
                              <a href="#!" className="px-1">
                                {" "}
                                <i
                                  className="fab fa-linkedin-in"
                                  aria-controls="#picker-editor"
                                />{" "}
                              </a>{" "}
                            </ul>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </section>
            </section>
            {/**/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
