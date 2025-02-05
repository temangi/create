import React from "react";
import scss from "./ServiceCards.module.scss";
import { arr2 } from "../../constants/ServiceCards";

function ServiceCards() {
  let cards = arr2.map((i, index) => (
    <article key={index} className={index % 2 === 1 ? scss.reverse : ""}>
      <img src={i.img} alt="nnn" />
      <div>
        <h1>{i.heading}</h1>
        <span>
         {i.text}
        </span>
        <button>Learn more</button>
      </div>
    </article>
  ));

  return <div className={scss.serviceCards}>
    <main>{cards}</main>
  </div>;
}

export default ServiceCards;
