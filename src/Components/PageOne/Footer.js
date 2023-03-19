import React from "react";
import "./Footer.css";
import pro14 from "../images/map.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer">
        <div className="u1-1">
          <h1 className="gg">RESOURCES</h1>
          
          <ul>
            <li>Home</li>
            <li>wate we do</li>
            <li>Media</li>
            <li>About us</li>
            <li>protection</li>
            <li>care</li>
          
            
          </ul>
        </div>
        <div className="u1-2">
          <h1 className="ss">Content</h1>
          <ul className="sss">
          <li>+963-993202409</li>
          <li>www.google.com</li>
          <li>www.youtup.com</li>
          <li>www.facebook.com</li>
          
          
           
          </ul>
          <img src={pro14} alt="" />
          <div className="row">
            <p>© 2023 All Rights Reserved. Diagnosed by a family doctor!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
