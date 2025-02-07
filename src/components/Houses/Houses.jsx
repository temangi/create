import React from "react";
import scss from "./Houses.module.scss";
import redfin from "../../assets/Projects/redfin.svg";
import cube2 from "../../assets/Projects/cube2.svg";
import pencil from "../../assets/Projects/pencil.svg";
import beach from "../../assets/Houses/beach.svg";
import bedroom from "../../assets/Houses/bedroom.svg";
import brown from "../../assets/Houses/brown.svg";
import cottage from "../../assets/Houses/cottage.svg";
import kids from "../../assets/Houses/kids.svg";
import scandi from "../../assets/Houses/scandi.svg";
import load from "../../assets/Houses/loading.svg";

function Houses() {
  const Cards = [
    {
      img: redfin,
      title: "Red Finger Building",
      desc: "Business Centers",
    },
    {
      img: cube2,
      title: "Cubes Building",
      desc: "Business Centers",
    },
    {
      img: pencil,
      title: "The Pencil Building",
      desc: "Stores & Malls",
    },
    {
      img: beach,
      title: "Luxury Beach House",
      desc: "Private houses",
    },
    {
      img: bedroom,
      title: "Modern Double Bedroom",
      desc: "Apartments & flats",
    },
    {
      img: brown,
      title: "Brown and Gray Painted House",
      desc: "Private houses",
    },
    {
      img: cottage,
      title: "Modern Cottage",
      desc: "Private houses",
    },
    {
      img: kids,
      title: "Kids Bedroom With Decorations",
      desc: "Apartments & flats",
    },
    {
      img: scandi,
      title: "Scandinavian Style Interior",
      desc: "Private houses",
    },
  ];

  return (
    <section className={scss.houses}>
      <main>
        {Cards.map((el, index) => (
          <div key={index} style={{ backgroundImage: `url(${el.img})` }}>
            <article>
              <h1>{el.title}</h1>
              <p>{el.desc}</p>
              <button>View Project</button>
            </article>
          </div>
        ))}
      </main>
      <footer>
        <img src={load} alt="" />
        <p>Load more</p>
      </footer>
    </section>
  );
}

export default Houses;
