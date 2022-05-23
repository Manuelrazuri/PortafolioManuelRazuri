import React from "react";
import "./skills.scss";
// import Lottie from "react-lottie";
import html5Data from "../../IMG/html5.svg";
import css3Data from "../../IMG/css3.svg";
import bosstrapData from "../../IMG/boostrap.svg";
import JSData from "../../IMG/javaScript.png";
import reactData from "../../IMG/react.svg";
import githubData from "../../IMG/github.svg";
import azureData from "../../IMG/azure.svg";

export const Skills = () => {
  //   const defaultOptions = {
  //     loop: true,
  //     autoplay: true,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice",
  //     },
  //     animationData: html5Data,
  //   };
  return (
    <div className="skills" id="skills">
      <div className="skills__container">
        <div className="skills__container-text">
          <h1>Skills</h1>
          <p>
            In this section I will show the technologies which I have knowledge
            and mastery.
          </p>
        </div>
        <div
          className="skills__container-animation"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div>
            <div title="HTML5">
              <img
                src={html5Data}
                alt="IconoHtml5"
                width="40px"
                height="40px"
              />
            </div>
            <div title="CSS3">
              <img src={css3Data} alt="Iconocss3" width="40px" height="40px" />
            </div>
            <div title="BOOSTRAP">
              <img
                src={bosstrapData}
                alt="Iconoboostrap"
                width="40px"
                height="40px"
              />
            </div>
            <div title="JavaScript">
              <img src={JSData} alt="IconoJS" width="40px" height="40px" />
            </div>
            <div title="REACT">
              <img
                src={reactData}
                alt="Iconoreact"
                width="40px"
                height="40px"
              />
            </div>
            <div title="GITHUB">
              <img
                src={githubData}
                alt="Iconogithub"
                width="40px"
                height="40px"
              />
            </div>
            <div title="Microsoft Azure">
              <img
                src={azureData}
                alt="Iconoazure"
                width="40px"
                height="40px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
