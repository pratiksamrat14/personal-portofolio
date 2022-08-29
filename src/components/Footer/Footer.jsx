import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>pratiksamrat14@geca.ac</span>
        <div className="f-icons">
         <a href="https://www.instagram.com/_samrat_p01/"> <Insta color="white" size={"3rem"} /></a>
          <a href="https://www.facebook.com/profile.php?id=100078368372138"><Facebook color="white" size={"3rem"} /></a>
         <a href="https://github.com/pratiksamrat14"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
