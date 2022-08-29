import React, { useContext } from "react";
import "./Techstack.css";
import Node from "../../img/node.png";
import Mern from "../../img/mern-stack.png";
import REACT from "../../img/react.png";
import Express from "../../img/express.png";
import MongoDB from "../../img/mongoDB.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>See Here Is My</span>
          <span>Skillset</span>
          <spane>
            Frontend: HTML5,CSS4,ES6,ReactJs,React Hooks,Redux.
            <br />
            Backend: NodeJs,Express,mongoDB,Mysql.
            <br />
            Tools : Git/Github,Postman.
            <br />
            Other :c++,dsa,oops(c++,java),DBMS,OS(windows 10 + linux) .
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={REACT} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Express} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Mern} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Node} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={MongoDB} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
