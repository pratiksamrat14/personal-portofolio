import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Education.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>94.60</div>
        <span  style={{color: darkMode?'white':''}}>percentage </span>
        <span>SSC Board</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>82.86</div>
        <span  style={{color: darkMode?'white':''}}>percentage</span>
        <span>HSC Board</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>8.5</div>
        <span  style={{color: darkMode?'white':''}}>CGPA</span>
        <span>B.Tech</span>
      </div>
    </div>
  );
};

export default Experience;
