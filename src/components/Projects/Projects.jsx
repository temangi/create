import React from "react";
import scss from "./Projects.module.scss";
import redfin from "../../assets/Projects/redfin.svg";
import cube2 from "../../assets/Projects/cube2.svg";
import pencil from "../../assets/Projects/pencil.svg";

function Projects() {
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
  ];
  const slides = Cards.map((el, index) => (
    <div
      style={{backgroundImage : `url(${el.img})`}}
    >
     <article>
     <h1>{el.title}</h1>
      <p>{el.desc}</p>
      <button>View Project</button>
     </article>
    </div>
  ));
  return (
    <section className={scss.projects}>
      <header>
        <h1>
          Browse our selected projects <br />
          and learn more about our work
        </h1>
      </header>
      <main>{slides}</main>
      <footer>
        <h1>Explore all our works</h1>
        <button>View portfolio</button>
      </footer>
    </section>
  );
}

export default Projects;
