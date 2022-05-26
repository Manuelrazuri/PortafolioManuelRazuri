import React from "react";
import "./aboutMe.scss";
import Lottie from "react-lottie";
import golifeData from "../../assets/lotties/golife.json";
// import imageabout from "../../IMG/imageabout.svg";
import { Button } from "primereact/button";

export const AboutMe = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    animationData: golifeData,
  };
  return (
    <div className="aboutme" id="aboutme">
      <div className="aboutme__container">
        <div
          className="aboutme__container-text"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h1>About Me</h1>
          <p>
            ! Hello! my name is Manuel Razuri, I am a university student of
            systems engineering and computer science. I like to investigate
            every new technology that comes out in the world, I have experience
            as an IT analyst. I am currently focused on learning frontend
            programming in a constant and intensive way, in order to reach my
            corresponding achievements. If you want to know more about me you
            can visit my social networks and contact me.
          </p>
          <a href="#contact">
            <Button label="Escribeme" />
          </a>
        </div>
        <div className="aboutme__container-image">
          <Lottie
            options={{ animationData: golifeData }}
            width={320}
            height={320}
          />
        </div>
      </div>
    </div>
  );
};
