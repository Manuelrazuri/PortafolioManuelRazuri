import React from "react";
import "./skills.scss";
import Lottie from "react-lottie";
import html5Data from "../../assets/lotties/html5.json";
import css3Data from "../../assets/lotties/css3.json";
import githubData from "../../assets/lotties/github.json";
import javascriptData from "../../assets/lotties/javascript-logo.json";
import reactData from "../../assets/lotties/react-logo.json";

export const Skills = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    animationData: html5Data,
  };
  return (
    <div className="skills" id="skills">
      <div className="skills__container">
        <div>
          <h1>Skills</h1>
          <p>
            En estas seccion enseñare las tecnologias en cual tengo conomientos
            y dominio.
          </p>
        </div>
        <div>
          <Lottie
            options={{ animationData: html5Data }}
            width={100}
            height={100}
          />
          <Lottie
            options={{ animationData: css3Data }}
            width={100}
            height={100}
          />
          <Lottie
            options={{ animationData: githubData }}
            width={100}
            height={100}
          />
          <Lottie
            options={{ animationData: javascriptData }}
            width={100}
            height={100}
          />
          <Lottie
            options={{ animationData: reactData }}
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};
