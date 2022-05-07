import React from "react";
import "./contact.scss";
import Lottie from "react-lottie";
import contactlogoData from "../../assets/lotties/contact-chat.json";

export const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    animationData: contactlogoData,
  };
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__container-info">
          <div>
            <Lottie
              options={{ animationData: contactlogoData }}
              width={320}
              height={320}
            />
          </div>
          <div>
            <p>Lima, Perú</p>
            <p>manuel.r.seminario@gmail.com</p>
            <p>963-002-441</p>
          </div>
          <div classname="contact__container-form">
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
