import React from "react";
import scss from "./Facts.module.scss";
import { data, information } from "../../constants/Facts";
import chat from "../../assets/Facts/chat.svg";
import { Link } from "react-router-dom";
import bgImage from '../../assets/Facts/bg-image.svg'

function Facts() {
  let info = data.map((el, index) => (
    <div key={index}>
      <img src={el.img} alt="" />
      <span>{el.description}</span>
    </div>
  ));

  let news = information.map((el, index) => (
    <section className={scss.newsCard} key={index}>
      <img src={el.image} alt="" />
      <h1>{el.heading}</h1>
      <p>
        {el.type} | {el.date} | <img src={chat} alt="" /> {el.cmnts}
      </p>
      <span>{el.text}</span>
    </section>
  ));

  return (
    <div className={scss.facts}>
      <section className={scss.stat}>
        <h1>Some facts and figures</h1>
        <article>{info}</article>
        
      </section>
      <img src={bgImage} className={scss.bgImage} alt="" />
      <section className={scss.novost}> 
      <h1>Recent news</h1>
        <p  className={scss.news}>{news}</p>
        <main>
        <h1>Explore all our news posts</h1>
        <Link className={scss.btn} >View all news</Link>
      </main>
        </section>
     

    </div>
  );
}

export default Facts;
