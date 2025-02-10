import React from "react";
import scss from "./Portfolio.module.scss";
import construction from "../../assets/construction.svg";
import development from "../../assets/development.svg";
import interior from "../../assets/interior.svg";
import repairs from "../../assets/repairs.svg";
import house from "../../assets/house.svg";

function Portfolio() {
  const imgs = [
    {
      img: house,
      title: "All Projects",
    },
    {
      img: construction,
      title: "Construction",
    },
    {
      img: development,
      title: "Project Development",
    },
    {
      img: interior,
      title: "Interior Design",
    },
    {
      img: repairs,
      title: "Repairs",
    },
  ];

  const cards = imgs.map(({ img, title }, index) => (
    <div key={index}>
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  ));

  return (
    <>
      <section className={scss.portfolio}>{cards}</section>
    </>
  );
}
export default Portfolio;
