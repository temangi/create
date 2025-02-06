import Main from '../components/Main/Main'
import back from "../assets/main/work.svg"
import Imgs from '../components/imgs/imgs'

const news = {
    img : back,
    title : "Our Work",
    desc : "Our portfolio represents 20 years of construction experience backed by a passion for perfect client service, quality and innovations in consctuction industry."
    }

function Work() {
  return (
   <>
   <Main {...news} />
    <Imgs title={"Our clients"}/>
   </>
  )
}

export default Work