import React from "react";
import scss from "./Ratings.module.scss";
import { people } from "../../constants/Ratings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Company from "../Company/Company";

function Ratings() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className={scss.ratings}>
      <Company title={"Supported by 12+ partners"}/>
      <h1>What our clients are saying</h1>
      <Slider {...settings}>
        {people.map((el, index) => (
          <div key={index} className={scss.eachRating}>
            <img src={el.img} alt="Client" />
            <p>{el.text}</p>
            <div>
              <h1>{el.name}</h1>
              <span>{el.position}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Ratings;
