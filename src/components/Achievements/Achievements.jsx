import React, { useContext } from "react";
import "./Achievements.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";


const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>As Fresher Some Of My</span>
        <span>Achievements & Certifications</span>
        <spane>
          Some of my achievements are listed here ,if want to know more about ,
          <br />
          here you can download my resume just click on Download button 🤗
        </spane>
        <a href="https://drive.google.com/file/d/16H1p0IgJUXnP5OieVuezX6utrzWkpc5e/view" download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Algorthmic Tool Box"}
            detail={"I successfully completed this course on dsa from coursera .You can see details here"}
            url={"https://in.coursera.org/account/accomplishments/verify/GVALRFHAUEKM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"React(Basic)"}
            detail={"I have decent knowledge of reactjs .I  got this certificate from Hackerrank . You can see "}
            url={"https://www.hackerrank.com/certificates/3221c9013ba4"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"LeetCode"}
            detail={
              "You can see number of  question I solved on leetcode and my ranking & rating also, here is the link "
            }
            url={"https://leetcode.com/pratiksamrat14/"}
            color="rgba(252, 166, 31, 0.45)"
            val={"See Here"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
