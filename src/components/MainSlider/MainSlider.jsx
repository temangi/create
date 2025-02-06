import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import scss from "./style.module.scss";
import { Link } from "react-router-dom";


const imgs = [scss.firstCard , scss.secondCard , scss.thirdCard]

function MainSlider() {
  const mainImgs = imgs.map((el, index) => (
    <div
      key={index}
      className={el}
    >
      <h1>
        <p>CREATEX</p>
        CONSTRUCTION
      </h1>
      <span>
        Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat,
        dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget
        pellentesque integer ipsum elementum felis.
      </span>
      <main>
        <Link className={scss.sliderBtn} to="/about">Learn more about us</Link>
        <Link className={scss.sliderBtn} to="/contacts">SUBMIT REQUEST</Link>
      </main>
    </div>
  ));

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,      
    autoplaySpeed: 5000,
  };
  return (
    <section className={scss.mainSlider}>
      <Slider {...settings}>{mainImgs}</Slider>
    </section>
  );
}

export default MainSlider;
