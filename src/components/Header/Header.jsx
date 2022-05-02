import React from "react";
import "./header.scss";
import manuel from "../../IMG/LogoManuel.svg";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__image">
        <img src={manuel} alt="LogoManuel" width="140px" />
      </div>
      <div className="header__options">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutme">About me</a>
          </li>

          <li>
            <a href="skills">Skills</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
