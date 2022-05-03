import React from "react";
import "./skills.scss";
import Lottie from "react-lottie";
import html5Data from "../../assets/lotties/html5.json";
import css3Data from "../../assets/lotties/css3.json";
import githubData from "../../assets/lotties/github.json";
import javascriptData from "../../assets/lotties/javascript-logo.json";
import reactData from "../../assets/lotties/react-logo.json";
// import AOS from "aos";

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
            <Lottie
              options={{ animationData: html5Data }}
              width={120}
              height={100}
            />
          </div>
          <div>
            <Lottie
              options={{ animationData: css3Data }}
              width={120}
              height={120}
            />
          </div>
          <div>
            <Lottie
              options={{ animationData: githubData }}
              width={120}
              height={120}
            />
          </div>
          <div>
            <Lottie
              options={{ animationData: javascriptData }}
              width={120}
              height={120}
            />
          </div>
          <div>
            <Lottie
              options={{ animationData: reactData }}
              width={120}
              height={120}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
