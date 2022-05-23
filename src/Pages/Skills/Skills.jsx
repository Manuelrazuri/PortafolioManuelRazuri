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
import sqlData from "../../IMG/sql.png";

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
          <div className="skills__container-animation-html5" title="HTML5">
            <img
              src={html5Data}
              alt="IconoHtml5"
              width="100px"
              height="100px"
            />
          </div>
          <div className="skills__container-animation-css3" title="CSS3">
            <img src={css3Data} alt="Iconocss3" width="100px" height="100px" />
          </div>
          <div
            className="skills__container-animation-boostrap"
            title="BOOSTRAP"
          >
            <img
              src={bosstrapData}
              alt="Iconoboostrap"
              width="100px"
              height="100px"
            />
          </div>
          <div
            className="skills__container-animation-javascript"
            title="JavaScript"
          >
            <img src={JSData} alt="IconoJS" width="100px" height="100px" />
          </div>
          <div className="skills__container-animation-react" title="REACT">
            <img
              src={reactData}
              alt="Iconoreact"
              width="100px"
              height="100px"
            />
          </div>
          <div className="skills__container-animation-github" title="GITHUB">
            <img
              src={githubData}
              alt="Iconogithub"
              width="100px"
              height="100px"
            />
          </div>
          <div
            className="skills__container-animation-azure"
            title="Microsoft Azure"
          >
            <img
              src={azureData}
              alt="Iconoazure"
              width="100px"
              height="100px"
            />
          </div>
          <div className="skills__container-animation-sql" title="SQL">
            <img src={sqlData} alt="Iconosql" width="100px" height="100px" />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
