import React from 'react'
import scss from "./Categories.module.scss"
import { useState } from 'react';

 function Categories() {
    const [arr,setArr] = useState ("All News")

    const imgs = [
        {
            desc: "All News",
        },
        {
            desc: "Company News",
        },
        {
            desc: "Innovation",
        },
        {
            desc: "Industry News",
        },
        {
            desc: "Expert Tips",
        },
        {
            desc: "Marketing",
        },
    ];

    const cards = imgs.map(({ desc }, index) => (
        <p className={arr == desc ? scss.active: scss.noActive} onClick={() => setArr(desc)  } key={index}>{desc}</p>
      ));

  return (
    <>
    <section className={scss.categories}>
        <h1>Categories</h1>
        <main>{cards}</main>
    </section>
    </>
  )
}
export default Categories