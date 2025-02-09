import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import scss from "./style.module.scss";
import { Link } from "react-router-dom";

const imgs = [
  {
    css: scss.firstCard,
    text: "Даже если ты оказался в самой сложной ситуации, даже если кажется, что победа невозможна – настоящая битва идёт до тех пор, пока ты сам не решишь опустить меч",
  },
  {
    css: scss.secondCard,
    text: "Время не стоит на месте, одно поколение сменяет другое, но память, любовь и сила духа передаются дальше, как листва, опадающая и снова распускающаяся весной.",
  },
  {
    css: scss.thirdCard,
    text : " В жизни неизбежны трудности, поражения и моменты, когда кажется, что всё кончено. Но настоящая неудача – это не само поражение, а отказ продолжать двигаться вперёд. Если ты поднимаешься после падения, то ты всё ещё в игре."
  },
  {
    css:  scss.fourthCard,
    text : "Многие считают, что страх – это слабость, но на самом деле страх – это инструмент. Он показывает нам, где наши границы, и даёт возможность стать сильнее, если мы готовы смотреть ему в лицо и преодолевать его."
  },
  {
    css:  scss.fiveCard,
    text : " Часто мы сами ставим себе границы, говоря <я не смогу или> <это невозможно>. Но правда в том, что пока ты не попробуешь, ты не узнаешь своих истинных возможностей."
  },
  {
    css: scss.sixCard,
    text : "Когда умирает человек? Когда его сердце перестаёт биться? Нет. Когда его стреляют из пистолета? Нет. Когда он болен неизлечимой болезнью? Тоже нет! Человек умирает… когда его забывают!"
  },
];

function MainSlider() {
  const mainImgs = imgs.map(({css,text}, index) => (
    <div key={index} className={css}>
      <h1>
        <p>CREATEX</p>
        CONSTRUCTION
      </h1>
      <span>{text}</span>
      <main>
        <Link className={scss.sliderBtn} to="/about">
          Learn more about us
        </Link>
        <Link className={scss.sliderBtn} to="/contacts">
          SUBMIT REQUEST
        </Link>
      </main>
    </div>
  ));

  const settings = {
    infinite: true,
    speed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    adaptiveHeight: true,
    pauseOnHover: false,
  };

  return (
    <section className={scss.mainSlider}>
      <Slider {...settings}>{mainImgs}</Slider>
    </section>
  );
}

export default MainSlider;
