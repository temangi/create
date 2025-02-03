import scss from "./style.module.scss"
import { info } from "../../constants/Service"

function Service() {

    const cards = info.map(({img,title},index) => (
        <div key={index}>
            <img src={img} alt={title} />
            <p>{title}</p>
        </div>
    ))
  return (
   <section className={`${scss.service}`}>
    <h1>Our Service</h1>
    <span>Createx Construction Bureau is a construction giant with a full range of construction services.</span>
    <main>{cards}</main>
    <footer>
        <p>Learn more about our services</p>
        <button>View services</button>
    </footer>
   </section>
  )
}

export default Service