import Main from '../components/Main/Main'
import back from "../assets/main/work.svg"
import Portfolio from '../components/Portfolio/Portfolio'
import Company from '../components/Company/Company'

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
    <Company title={"Our clients"}/>
   </>
  )
}

export default Work