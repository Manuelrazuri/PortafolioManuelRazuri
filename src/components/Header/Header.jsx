import React from "react";
import "./header.scss";
import manuel from "../../IMG/LogoManuel.svg";

// import { NavLink, Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__image">
        <img src={manuel} alt="LogoManuel" width="140px" />
      </div>
      <div className="header__options">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>

          <li>
            <a href="/">who i me?</a>
          </li>

          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
