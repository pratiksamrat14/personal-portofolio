import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail,url, color,val="View Certificate"}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a href={url}><button className="c-button">{val}</button></a>
    </div>
  );
};

export default Card;
