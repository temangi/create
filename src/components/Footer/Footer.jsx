import React from "react";
import scss from "./Footer.module.scss";
import logo from "../../assets/Footer/logoC.svg";
import socials from "../../assets/Footer/socials.svg";
import heart from "../../assets/Footer/Heart.svg";
import strelka from "../../assets/Footer/strelkaup.svg";
import {Link} from "react-router-dom"

function Footer() {
  const aboutUs = [
    {
      title: "HEAD OFFICE",
      nm1: " 8502 Preston Rd. Inglewood, New York",
      nm2: " (405) 555-0128",
      nm3: " hello@createx.com",
    },
  ];

  const abt2 = [
    {
      title: "WHO WE ARE",
      nm1: {
        title : " About Us",
        link : "/about"
      },
      nm2: {
        title : " Available Positions",
        link : "/positions"
      },
      nm3: {
        title : " Contacts",
        link : "/contacts"
      }
    },
    {
      title: "OUR EXPERIENCE",
      nm1: {
        title : " Services",
        link : "/service"
      },
      nm2: {
        title : " Work",
        link : "/work"
      },
      nm3: {
        title :  " News",
        link : "/news"
      }
    },
  ];

  const dates = aboutUs.map((el, index) => (
    <aside key={index}>
      <h1>{el.title}</h1>
      <p>
        <span>Address: </span>
        {el.nm1}
      </p>
      <p>
        <span>Call: </span>
        {el.nm2}
      </p>
      <p>
        <span>Email: </span>
        {el.nm3}
      </p>
    </aside>
  ));

  const dates2 = abt2.map(({title , nm1 , nm2 , nm3}, index) => (
    <article key={index}>
      <h1>{title}</h1>
      <Link className={scss.footerLink} to={nm1.link} >{nm1.title}</Link>
      <Link className={scss.footerLink} to={nm2.link} >{nm2.title}</Link>
      <Link className={scss.footerLink} to={nm3.link} >{nm3.title}</Link>
    </article>
  ));



  return (
    <section className={scss.footer}>
      <header>
        <main>
          <div>
            <img src={logo} alt="" />
            <img src={socials} alt="" />
          </div>
          <span>
            Createx Construction Bureau has been successfully operating in the
            USA <br /> construction market since 2000. We are proud to offer you
            quality <br /> construction and exemplary service. Our mission is to
            set the highest <br /> standards for construction sphere.
          </span>
        </main>
        <article>
          <h1>Let’s stay in touch</h1>
          <div>
            <input type="text" placeholder="Your email address " />
            <button>SUBSCRIBE</button>
          </div>
          <p>
            *Subscribe to our newsletter to receive communications and early
            updates from Createx <br /> Construction Bureau.
          </p>
        </article>
      </header>
      <main>
        {dates}
        {dates2}
      </main>
      <footer>
        <p>
          © All rights reserved. Made with <img src={heart} alt="" />
          by Createx Studio
        </p>
        <a href="#header" className={scss.up}  >
          <span>GO TO TOP</span>
          <button><img src={strelka} alt="" /></button>
        </a>
      </footer>
    </section>
  );
}

export default Footer;
