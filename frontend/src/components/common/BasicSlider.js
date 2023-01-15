import React from "react";
import HeroSlider, { Slide } from "hero-slider";
import "./BasicSlider.css";

// const img =
  // "E:StudyRenuMERN Stack DevelopmentMajor_ProjectsLiquid_Forms\frontend\public\main\ContactForm.jpg";
const registration = "https://wallpaperaccess.com/full/643353.png";
const contact = "https://wallpaperaccess.com/full/2906429.jpg";
const form = "https://wallpaperaccess.com/full/2722030.jpg";

const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
// const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
// const craterRock = "https://i.imgur.com/8DYumaY.jpg";
// const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

const BasicSlider = () => {
  return (
    <div
      style={{
        width: "100em"
      }}
      // className="jjj"
    >
      {/* <img src="E:Study\Renu\MERN Stack Development\Major_Projects\Liquid_Forms\frontend\public\main\ContactForm.jpg" />
      <img src="../../" /> */}
      
       <HeroSlider
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>
          console.log("onBeforeChange", previousSlide, nextSlide)
        }
        onChange={(nextSlide) => console.log("onChange", nextSlide)}
        onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.33)",
        }}
        settings={{
          slidingDuration: 250,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButton: true,
          autoplayDuration: 2000,
          height: "50vh",
        }}
      >
         <Slide
          background={{
            backgroundImageSrc: bogliasco,
            backgroundAttachment: "fixed",
          }}
        /> 
         <Slide
          background={{
            backgroundImageSrc: registration,
            backgroundAttachment: "fixed",
          }}
        />

        <Slide
          background={{
            backgroundImageSrc: contact,
            backgroundAttachment: "fixed",
          }}
        />
        <Slide
          background={{
            backgroundImageSrc: form,
            backgroundAttachment: "fixed",
          }}
        />
      </HeroSlider> 
    </div>
  );
};
export default BasicSlider;
