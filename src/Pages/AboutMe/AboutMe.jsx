import React from "react";
import "./aboutMe.scss";
import imageabout from "../../IMG/imageabout.svg";
import { Button } from "primereact/button";

export const AboutMe = () => {
  return (
    <div className="aboutme" id="aboutme">
      <div className="aboutme__container">
        <div className="aboutme__container-text">
          <h1>About Me</h1>
          <p>
            ! Hola! mi nombre es Manuel Razuri, soy estudiante universitario de
            ingeniera de sistemas e informática. me encanta investigar cada
            tecnología nueva que sale en el mundo. cuento con experiencia como
            analista ti. actualmente me estoy enfocando en aprender frotend de
            forma constante e intensiva, para poder llegar a mis logros
            correspondientes. si quieres saber más de mi puedes ingresar a mis
            redes sociales y contáctame conmigo.
          </p>
          <Button label="Escribeme" />
        </div>
        <div className="aboutme__container-image">
          <img src={imageabout} alt="imageabout" />
        </div>
      </div>
    </div>
  );
};
