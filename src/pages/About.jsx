import Main from '../components/Main/Main'
import back from "../assets/main/about.svg"
import Footer from '../components/Footer/Footer'

const news = {
    img : back,
    title : "About Us",
    desc : "Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service."
}

function About() {
  return (
   <>
   <Main {...news} />
   <Footer/>
   </>
  )
}

export default About