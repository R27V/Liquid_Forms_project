import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="homeBody">
        <div className="d-flex  align-items-center justify-content-center">
          <h1 className="m-4" style={{ color: "#232a69" }}>
            Get insights quickly, with Digital Forms
          </h1>
        </div>
        <div className="row">
          <div className="col-md define">
        <div className="d-flex  align-items-start justify-content-end">
          <div>
            {" "}
            <p className="header-content ">
              Digital Forms helps in taking Survey, test, to make questionaire.
              Digital Forms helps in taking Survey, test, to make questionaire.{" "}
              Digital Forms helps in taking Survey, test, to make questionaire.
              Digital Forms helps in taking Survey, test, to make questionaire.
            </p>
          </div>
          </div>
          </div>
          <div className="col-md main">
          <div className="d-flex  align-items-start justify-content-end">
            <section className="card-lg__container">
              <p className="card__text-sm">Sierra Desert - Morocco</p>
              <h1 className="card__text-lg">Marrakech Merzouga</h1>
              <p className="card__text-md">
                Duis aute irure dolor in reprehenderit in voluptate nulla
                pariatur.
              </p>
              <a href="#" className="card__btn">
                Discover Location
              </a>
            </section>
            <section className="card-sm__container">
              {/*- START: CARD -*/}
              <section
                className="card-sm"
                style={{
                  backgroundImage:
                    'url("https://www.mirandawashburn.com/media/projects/travelHomepage/losLancesBeach.jpeg")',
                }}
              >
                <p className="card__text-sm">Tanifa - Spain</p>
                <h1 className="card__text-lg">Los Lances Beach</h1>
              </section>
              {/*- END: CARD -*/}
              {/*- START: CARD -*/}
              <section
                className="card-sm"
                style={{
                  backgroundImage:
                    'url("https://www.mirandawashburn.com/media/projects/travelHomepage/japanAlpsMonkeys.jpeg")',
                  backgroundPosition: "center right",
                }}
              >
                <p className="card__text-sm">Japan Alps</p>
                <h1 className="card__text-lg">Nagano Prefecture</h1>
              </section>
              {/*- END: CARD -*/}
              {/*- START: CARD -*/}
              <section
                className="card-sm"
                style={{
                  backgroundImage:
                    'url("https://www.mirandawashburn.com/media/projects/travelHomepage/sierraNevada.jpeg")',
                }}
              >
                <p className="card__text-sm">Sierra Nevada - USA</p>
                <h1 className="card__text-lg">Yosemite National</h1>
              </section>
              {/*- END: CARD -*/}
              {/*- START: CARD -*/}
              <section
                className="card-sm"
                style={{
                  backgroundImage:
                    'url("https://www.mirandawashburn.com/media/projects/travelHomepage/cappadociaTurkey.jpeg")',
                }}
              >
                <p className="card__text-sm">Cappadocia - Turkey</p>
                <h1 className="card__text-lg">Goreme &nbsp; Valley</h1>
              </section>
              {/*- END: CARD -*/}
            </section>
          </div>
        </div>
        
        </div>
      </div>
    </>
  );
};

export default Home;
