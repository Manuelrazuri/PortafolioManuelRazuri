import React from "react";
import "./home.scss";
import gokufront from "../../IMG/gokufront.svg";
// import facebookData from "../../IMG/facebook.svg";
// import linkenidData from "../../IMG/linkenid.svg";
// import instadData from "../../IMG/instagram.svg";
// import githubData from "../../IMG/github.svg";
// import wtspData from "../../IMG/whatsapp.svg";
import facebookData from "../../IMG/icon-facebook.png";
import linkenidData from "../../IMG/icon-linkenid.png";
import instadData from "../../IMG/icon-instagram.png";
import githubData from "../../IMG/icon-github.png";
import wtspData from "../../IMG/icon-whatsapp.png";
export const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <div className="home__container">
          <div
            className="home__container-title"
            data-aos="fade-up-right"
            data-aos-duration="1500"
          >
            <h1>Welcome </h1>
            <p>to briefcase </p>
          </div>
          <div className="home__container-image" data-aos="flip-left">
            <img src={gokufront} alt="gokufrontend" />
          </div>
          <div className="home__container-links">
            <div>
              <a
                href="https://www.facebook.com/ManuelRazuriSeminario/"
                target="_blank"
              >
                <img
                  src={facebookData}
                  alt="Iconofacebook"
                  width="30px"
                  height="30px"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/razurimanuel/"
                target="_blank"
              >
                <img
                  src={linkenidData}
                  alt="IconolinkenId"
                  width="30px"
                  height="30px"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/manuelrazuriseminario/?hl=es-la"
                target="_blank"
              >
                <img
                  src={instadData}
                  alt="Iconoinstagram"
                  width="30px"
                  height="30px"
                />
              </a>
            </div>
            <div>
              <a href="https://github.com/Manuelrazuri" target="_blank">
                <img
                  src={githubData}
                  alt="Iconogithub"
                  width="30px"
                  height="30px"
                />
              </a>
            </div>
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=+51 963002441&text=Hola,%20quiero%20contactarme%20contigo%20para..."
                target="_blank"
              >
                <img
                  src={wtspData}
                  alt="Iconogithub"
                  width="30px"
                  height="30px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
