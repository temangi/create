import React from "react";
import scss from "./Benefits.module.scss";
import { arr } from "../../../constants/Positions";

function Benefits() {
  const cards = arr.map(({ img, h1, text }, index) => (
    <section key={index} className={scss.benefitCard}>
      <img src={img} alt="" />
      <h1>{h1}</h1>
      <p>{text}</p>
    </section>
  ));

  return (
    <section className={scss.benefits}>
      <h1>Employee benefits</h1>
      <p>There’s always room for talent.</p>
      <main>{cards}</main>
    </section>
  );
}

export default Benefits;
