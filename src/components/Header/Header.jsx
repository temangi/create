import React from 'react'
import scss from './Header.module.scss'
import { headerLinks } from "../../constants/Header";
import logo from '../../assets/Header/logo.svg'
import phone from '../../assets/Header/phone.svg'
import chat from '../../assets/Header/chat.svg'

function Header() {

   const navs = headerLinks.map((el,index) => <a key={index} href={el.link}>{el.title}</a>)

  return (
    <div className={`${scss.header}`} id='header'>
        <img src={logo} alt="" />
        <nav>{navs}</nav>
        <aside>
            <div>
            <img src={phone} alt="" />
            <p>
                <h1>Call us</h1>
                <span>(405) 555-0128</span>
            </p>
            </div>
            <div>
            <img src={chat} alt="" />
            <p>
                <h1>Talk to us</h1>
                <span>hello@createx.com</span>
            </p>
            </div>
        </aside>
    </div>
  )
}

export default Header