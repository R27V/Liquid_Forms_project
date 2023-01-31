import React from "react";
import HeroSlider, { Slide } from "hero-slider";
import "./BasicSlider.css";

// const img =
  // "E:StudyRenuMERN Stack DevelopmentMajor_ProjectsLiquid_Forms\frontend\public\main\ContactForm.jpg";
const registration = "http://www.dreamtemplate.com/blog/wp-content/uploads/2011/09/pic1-a29.jpg";
const contact = "ContactForm.jpg";
const form = "https://i.pinimg.com/736x/b4/fc/4a/b4fc4a7cea9a65dbcca7a4456eb65f0a--survey-ui-design-quiz-design.jpg";

const bogliasco = "https://blog.hubspot.com/hs-fs/hubfs/Google%20Drive%20Integration/Update%20feedback%20form%20template-Mar-13-2021-05-35-29-27-PM.png?width=600&name=Update%20feedback%20form%20template-Mar-13-2021-05-35-29-27-PM.png";
const countyClare = "https://www.questionpro.com/blog/wp-content/uploads/2019/06/Blog_website.jpg";
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
          slidingDuration: 100,
          slidingDelay: 60,
          shouldAutoplay: true,
          shouldDisplayButton: true,
          autoplayDuration: 1000,
          height: "50vh",
        }}
      >
         <Slide
          background={{
            backgroundImageSrc: countyClare ,
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
        <Slide
          background={{
            backgroundImageSrc:bogliasco ,
            backgroundAttachment: "fixed",
          }}
        />
      </HeroSlider> 
    </div>
  );
};
export default BasicSlider;
