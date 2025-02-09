import React, {useState,useEffect} from 'react'
import scss from './Header.module.scss'
import { headerLinks } from "../../constants/Header";
import logo from '../../assets/Header/logo.svg'
import phone from '../../assets/Header/phone.svg'
import chat from '../../assets/Header/chat.svg'
import { useLocation  } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Header() {
    const {pathname} = useLocation()
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

   const navs = headerLinks.map((el,index) => <Link className={pathname == el.link ? scss.link_active : scss.link_noActive} key={index} to={el.link}>{el.title}</Link>)

  return (
    <div className={`${scss.header}`} id='header' style={{background : scrolled || pathname == "/" ? "white" :  "none"}}>
        <Link to="/"><img src={logo} alt="" /></Link>
        <nav>{navs}</nav>
        <aside>
            <div>
            <img src={phone} alt="" />
            <article>
                <h1>Call us</h1>
                <span>(405) 555-0128</span>
            </article>
            </div>
            <div>
            <img src={chat} alt="" />
            <article>
                <h1>Talk to us</h1>
                <span>hello@createx.com</span>
            </article>
            </div>
        </aside>
    </div>
  )
}

export default Header