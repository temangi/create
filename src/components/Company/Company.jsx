import React from 'react'
import scss from "./Imgs.module.scss"
import consulting from "../../assets/consulting.svg"
import higher from "../../assets/higher.svg"
import sentinal from "../../assets/sentinal.svg"
import happy from "../../assets/happy.svg"
import forsale from "../../assets/forsale.svg"
import sunset from "../../assets/sunset.svg"



function Company({title}) {
  return (
    <section className={scss.imgs}>
      <h1>{title}</h1>
        <main>
          <img src={consulting} alt="" />
          <img src={higher} alt="" />
          <img src={sentinal} alt="" />
          <img src={happy} alt="" />
          <img src={forsale} alt="" />
          <img src={sunset} alt="" />
        </main>
    </section>
  )
}

export default Company  