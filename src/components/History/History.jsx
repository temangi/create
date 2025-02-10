import React, { useState, useRef } from "react";
import scss from "./History.module.scss";
import { arr, slides } from "../../constants/History";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function History() {
  const [active, setActive] = useState(0);
  const sliderRef = useRef(null);

  const handleClick = (index) => {
    setActive(index);
    sliderRef.current.slickGoTo(index);
  };

  const settings = {
    infinite: true,
    speed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 12000,
    arrows: false,
    pauseOnHover: false,
    adaptiveHeight: false,
    beforeChange: (current, next) => setActive(next),
  };

  const slider = slides.map((el, index) => (
    <main key={index} className={scss.slides}>
      <img src={el.img} alt="" />
      <p>{el.text}</p>
    </main>
  ));
  

  const texts = arr.map((el, index) => (
    <div
      onClick={() => handleClick(index)}
      className={index === active ? scss.active : scss.nonActive}
      key={index}
    >
      <p></p>
      <span>{el}</span>
    </div>
  ));

  return (
    <div className={scss.history}>
      <h1>Our history</h1>
      <div>
        <article>{texts}</article>
        <section>
          {" "}
          <Slider ref={sliderRef} {...settings}>
            {slider}
          </Slider>
        </section>
      </div>
    </div>
  );
}

export default History;
