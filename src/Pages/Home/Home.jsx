import React from "react";
import "./home.scss";
import gokufront from "../../IMG/gokufront.svg";

export const Home = () => {
  return (
    <div className="home">
      <div className="home__title">
        <h1>Welcome to briefcase </h1>
      </div>
      <div className="home__image">
        <img src={gokufront} alt="gokufrontend" />
      </div>
    </div>
  );
};
