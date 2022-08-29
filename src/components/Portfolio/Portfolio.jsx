import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Weatherapp from "../../img/weatherapp.png"
import Todolist from "../../img/todolist.png"
import Intuition from "../../img/intuition.jpg"
import HOC from "../../img/resturant.jpg";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://pratiksamrat14.github.io/Todo-List/"><img src={Todolist} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
         <a href="https://pratiksamrat14.github.io/weather-App/"><img src={Weatherapp} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://pratiksamrat14.github.io/Resturant-Website-Menu-Page/"><img src={HOC} alt="" /></a>
          
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://thetechnicalappbyme.herokuapp.com/"><img src={Intuition} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
