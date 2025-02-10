import React from "react";
import scss from "./Forms.module.scss";
import krestik from "..//../assets/positions/krestik.svg";

function Forms({ setOpen }) {

  const clickOutside = (e) => {
    if (e.target.classList.contains(scss["wrap"])) {
      setOpen(false);
    }
  };


  return (
    <div className={scss.wrap} onClick={clickOutside}>
      <div className={scss.subscribe} >
        <img onClick={() => setOpen(false)} src={krestik} alt="Close" />
        <h1>Subscribe to our newsletter</h1>
        <form action="">
          <label htmlFor="">
            Name*
            <input type="text" placeholder="Your name" required/>
          </label>
          <label htmlFor="">
            Email*
            <input type="email" placeholder="Your working email" required />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Forms;
