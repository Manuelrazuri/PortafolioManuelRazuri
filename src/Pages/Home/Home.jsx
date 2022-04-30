import React from "react";
import "./home.scss";
import gokufront from "../../IMG/gokufront.svg";

export const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <div className="home__container">
          <div className="home__container-title">
            <h1>Welcome </h1>
            <p>to briefcase </p>
          </div>
          <div className="home__container-image">
            <img src={gokufront} alt="gokufrontend" />
          </div>
        </div>
      </div>
    </>
  );
};
