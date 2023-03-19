import React from "react";
import Log from "../images/logo.png";
import img1 from "../images/icons8-search-50.png";
import Content from "./Content";

import Flip from "react-reveal/Flip";

import "./Header.css";

const Header = () => {
  return (
    <Flip>
      <div className="Header">
        <div className="continer">
          <ul>
            <li>HOME</li>
            
            <li>CONSULTATION </li>
          </ul>
          <ul className="ul">
            <li>DIAGGNOSED</li>
            <li>DOCTORES </li>
            <li>VIRUS</li>
          </ul>
          <div className="icon2">
            <img className="img3" src={Log} alt="" />
          </div>
          <div className="icon">
            <img className="img1" src={img1} alt="" />{" "}
          </div>
          <div className="icon1">
            <p>DM </p>
          </div>
        </div>
        <Content />
       
      </div>
    </Flip>
  );
};

export default Header;
