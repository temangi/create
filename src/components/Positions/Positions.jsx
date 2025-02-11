import React, { useEffect, useState } from "react";
import scss from "./Positions.module.scss";
import { positionsCards } from "../../constants/Positions";
import timeImg from "../../assets/positions/time.svg";
import locationImg from "../../assets/positions/location.svg";
import Benefits from "./Benefits/Benefits";
import Forms from "../Forms/Forms";
import CvForm from "../Forms/CvForm/CvForm";

function Positions() {

  const [open, setOpen] = useState(false)
  const [openCv,setOpenCv] = useState(false)

  useEffect(()=>{
    if(open || openCv){
      document.body.style.height = "100vh"
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.height = "auto"
      document.body.style.overflow = "auto"
    }
  },[open, openCv])

  const toggleOpenSubs = () =>{
    setOpen(!open) 
    setOpenCv(false)
  }

  const toggleOpenCv =()=>{
    setOpenCv(!openCv)
    setOpen(false)
  }
  let positions = positionsCards.map(
    ({ description, location, time }, index) => (
      <section key={index} className={scss.cards}>
        <section>
          <header>
            <p>
              <img src={locationImg} alt="" />
              <span>{location}</span>
            </p>{" "}
            |
            <p>
              <img src={timeImg} alt="" />
              <span>{time}</span>
            </p>{" "}
          </header>
          <h1>{description}</h1>
        </section>
        <button>Apply now</button>
      </section>
    )
  );
  return(
    <section>
         <div className={scss.positions}>
        <main>{positions}</main>
        <aside>
            <h1>Didn’t find what you were looking for?</h1>
            <p>Send your CV or subscribe to our newsletter to receive information about new vacancies.</p>
            <div>
                <button onClick={toggleOpenSubs}>subscribe</button>
                <button onClick={toggleOpenCv}>send cv  </button>
            </div>
        </aside>
    </div>
    <Benefits/>
    {open && <Forms setOpen={setOpen}/>}
    {openCv && <CvForm setOpenCv={setOpenCv}/>}
    </section>
   

  ) 
}

export default Positions;
