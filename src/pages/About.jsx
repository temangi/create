import Main from '../components/Main/Main'
import back from "../assets/main/about.svg"
import AbautUs from '../components/AbautUs/AbautUs'
import History from '../components/History/History'
import Footer from '../components/Footer/Footer'
import Team from '../components/Team/Team'

const news = {
    img : back,
    title : "About Us",
    desc : "Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service."
}

function About() {
  return (
   <>
   <Main {...news} />
   <AbautUs/>
   <History/>
   <Team/>
   <Footer/>
   </>
  )
}

export default About