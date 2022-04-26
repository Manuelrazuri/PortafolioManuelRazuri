import React from "react";
import "./header.scss";
import manuel from "../../IMG/LogoManuel.svg";

// import { NavLink, Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__image">
        <img src={manuel} alt="LogoManuel logo" width="140px" />
      </div>
      <div className="header__options">
        <p>Home</p>
        <p>Skills</p>
        <p>hola</p>
      </div>
    </div>
  );
};
