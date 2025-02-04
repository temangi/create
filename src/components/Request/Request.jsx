import React from "react";
import scss from "./Request.module.scss";
import bg from "../../assets/request/backgrnd.svg";
import { arr } from "../../constants/Request";

function Request() {
  let inputs = arr.map((el, index) => (
    <form action="" key={index} className={scss.inputs}>
      {" "}
      <label htmlFor="">{el.label}</label>{" "}
      <input
        className={scss.inputReq}
        type="text" 
        placeholder={el.placeholder} required
      />
    </form>
  ));

  return (
    <div className={scss.request}>
      <img src={bg} alt="" />
      <main>
        <h1>A quick way to discuss details</h1>
        <div> {inputs}</div>
        <label className={scss.mainLabel} htmlFor="">
          <input type="checkbox" required/>I agree to receive communications from
          Createx Construction Bureau.
        </label>
        <button>Send request</button>
      </main>
    </div>
  );
}

export default Request;
