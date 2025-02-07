import Main from '../components/Main/Main'
import back from "../assets/main/work.svg"
import Portfolio from '../components/Portfolio/Portfolio'
import Company from '../components/Company/Company'
import Houses from "../components/Houses/Houses"
import Footer from '../components/Footer/Footer'

const news = {
    img : back,
    title : "Our Work",
    desc : "Our portfolio represents 20 years of construction experience backed by a passion for perfect client service, quality and innovations in consctuction industry."
    }

function Work() {
  return (
   <> 
   <Main {...news} />
   <Portfolio/>
   <Houses/> 
    <div className="company">
    <Company title={"Our clients"}/>
    </div>
    <Footer/>
   </>
  )
}

export default Work