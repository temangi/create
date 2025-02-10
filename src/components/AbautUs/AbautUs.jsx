import React from "react";
import scss from "./AbautUs.module.scss";
import like from "../../assets/like.svg";
import painting from "../../assets/painting.svg";
import helmet from "../../assets/helmet.svg";
import pantone from "../../assets/pantone.svg";
import lisa from "../../assets/lisa.jpg";
import lalisa from "../../assets/lalisa.jpg";

function AbautUs() {
  const imgs = [
    {
      img: like,
      title: "60%",
      desc: "Clients on the recommendation of friends",
    },
    {
      img: painting,
      title: "2400+",
      desc: "Apartments renovated",
    },
    {
      img: helmet,
      title: "670",
      desc: "Qualified specialists",
    },
    {
      img: pantone,
      title: "150000+ m2",
      desc: "Finishing work was carried out",
    },
  ];

  const cards = imgs.map(({ img, title, desc }, index) => (
    <div key={index}>
      <img src={img} alt={title} />
      <p>{title}</p>
      <span>{desc}</span>
    </div>
  ));

  return (
    <section className={scss.ab}>
      <section className={scss.abautUs}>{cards}</section>
      <section className={scss.abaut}>
        <img className={scss.lisa} src={lisa} alt="" />
        <article>
          <p>
            Лалиса Манобан родилась - 27 марта 1997г в Таиланде, более
            известная как Лиса — тайская певица, танцовщица  и рэпер.
            Является самой младшей участницей южнокорейской гёрл-группы
            Blackpink, сформированной в 2016 году лейблом YG
            Entertainment. Лиса дебютировала сольно с сингловым-альбомом
            Lalisa в сентябре 2021 года. За неделю выпуска альбома в
            Республике Корея было продано более 736 000 копий, что сделало её
            первой исполнительницей, сделавшей это. Музыкальный видеоклип
            одноимённого сингла набрал 73,6 миллиона просмотров на YouTube за
            первые 24 часа после его выпуска, став самым просматриваемым
            музыкальным видео сольного исполнителя на платформе за первые 24
            часа.
          </p>
          <div className={scss.abautleft}>
            <p>Lalisa Manoban</p>
            <img src={lalisa} alt="" />
          </div>
        </article>
      </section>
    </section>
  );
}
export default AbautUs;
