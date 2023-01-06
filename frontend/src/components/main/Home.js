import React from "react";

 const Home = () => {
    return (
      <>
    <div className="d-flex flex-column align-items-center justify-content-center">
     
          <h1>Get insights quickly, with Digital Forms</h1>
         
          
        <p>Easily create professional online forms, surveys and workflows and analyze responses in real-time.</p>
        
        <div className="d flex  flex-column align-items-left justify-content-left">
          <img src="templates1.png" />
        </div>
          
     </div>
     <div
  className="background"
  style={{
    backgroundImage:
      "url(https://images.saymedia-content.com/.image/t_share/MTc4NzM1OTc4MzE0MzQzOTM1/how-to-create-cool-website-backgrounds-the-ultimate-guide.png)"
  }}
>
  <section>
    <div className="row">
      <div className="col-md about">
        <div className="d-flex flex-column align-items-start justify-content-center">
          <div>
            <p className="header-title">
              Hello!  <br />
              <b></b>
            </p>
            <p className="header-content">
              Digital helps in taking Survey, test, to make questionaire.{" "}
            </p>
            <p className="text1">
              <button className="btn btn-secondary btn-lg">
                <a href=".pdf" style={{ color: "white" }}>
                  {" "}
                  Download 
                </a>{" "}
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              <button className="btn btn-secondary btn-lg">
                {/* <a href="contactMe.html" style={{ color: "white" }}>
                  Contact Me
                </a> */}
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md h-1500 d-flex flex-column align-items-start justify-content-center">
        <div className="text">
          {/* <img src="selfie.jpg" alt="" height="450px" width="350px" /> */}
        </div>
      </div>
    </div>
  </section>
</div>


   </>
    )
    };

 export default Home; 