import React from 'react'
import { information } from '../../constants/SomeNews';
import scss from './SomeNews.module.scss'
import chat from '../../assets/Facts/chat.svg'

function SomeNews() {
     let news = information.map((el, index) => (
        <section className={scss.newsCard} key={index}>
          <img src={el.image}  className={scss.image} alt="" />
          <h1>{el.heading}</h1>
          <p>
            {el.type} | {el.date} | <img src={chat} alt="" /> {el.cmnts}
          </p>
          <span>{el.text}</span>
        </section>
      ));
  return (
    <div className={scss.someNews}>
        <main>{news}</main>
    </div>
  )
}

export default SomeNews