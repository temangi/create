import React from "react";
import scss from "./Team.module.scss";
import linkedIn from "../../assets/Team/Linked-In.svg";
import facebook from "../../assets/Team/Facebook.svg";
import twitter from "../../assets/Team/Twitter.svg";
import { teamCard, socials } from "../../constants/Team";

function Team() {
  let socialpg = socials.map((el, index) => <img key={index} src={el} />);
  let cards = teamCard.map(({ img, name, position }, index) => (
    <section key={index} className={scss.eachCard}>
      <main className={scss.main} style={{ backgroundImage: `url(${img})` }}>
        <div>{socialpg}</div>
      </main>
      <article>
        <h1>{name}</h1>
        <span>{position}</span>
      </article>
    </section>
  ));

  return (
    <div className={scss.team}>
      <section>
        <h1>Our team</h1>
        <span>People are at the heart of Createx Construction Bureau </span>
      </section>
      <section className={scss.cards}>{cards}</section>
      <p>
        Become a part of the best team in the construction market of the USA.{" "}
        <span>Available Positions</span>
      </p>
    </div>
  );
}

export default Team;
