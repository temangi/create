import React from "react";
import scss from "./Value.module.scss";
import back2 from "../../assets/Value/back2.svg"
import pause from "../../assets/Value/pause.svg"
import sound from "../../assets/Value/sound.svg"
import like from "../../assets/Value/like.svg"
import slipper from "../../assets/Value/slipper.svg"
import hand from "../../assets/Value/hand.svg"


function Value() {
  const ourCore =[
    {
      img : like,
      title : "Quality",
      descrip : "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.",
    },
    {
      img : hand,
      title : "Safety",
      descrip : "Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.",
    },
    {
      img : slipper,
      title : "Comfort",
      descrip : "Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.",
    }
  ]

  const Cores = ourCore.map((el,index) => (
    <div>
      <img src= {el.img} alt="" />
      <h1>{el.title}</h1>
      <p>{el.descrip}</p>
    </div>
  ))
  return (
    <section className={scss.value}>
      <header>
        <h1>We are Createx Construction Bureau </h1>
        <span>We are rightfully considered to be the best construction company in the USA.</span>
        <div>
          <p className={scss.pause}><img src={pause} alt="" /></p>
          <img className={scss.sound} src={sound} alt="" />
        </div>
      </header>
      <main>
        <h1>Our core values</h1>
        <span>Our mission is to set the highest standards for construction sphere.</span>
        <footer>{Cores}</footer>
      </main>
    </section>
  );
}

export default Value;
