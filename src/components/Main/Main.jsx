import React from "react";
import Header from "../Header/Header";
import scss from "./Main.module.scss"

function Main({ title, img, desc }) {
  return (
    <section  style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat : "no-repeat"
      }}>
      <Header />
      <article className={scss.main}
      >
        <p>HomePage / <span>{title}</span> </p>
        <h1>{title}</h1>
        <span>{desc}</span>
      </article>
    </section>
  );
}

export default Main;
