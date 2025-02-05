import React from "react";
import scss from "./Request.module.scss";
import bg from "../../assets/request/backgrnd.svg";
import { arr } from "../../constants/Request";

function Request() {
  let inputs = arr.map((el, index) => (
    <div key={index} className={scss.inputs}>
      {" "}
      <label htmlFor="">{el.label}</label>{" "}
      <input
        className={scss.inputReq}
        type="text"
        placeholder={el.placeholder} required
      />
    </div>
  ));

  return (
    <div className={scss.request}>
      <form action="submit">
        <h1>A quick way to discuss details</h1>
        <div> {inputs}</div>
        <label className={scss.mainLabel} htmlFor="">
          <input type="checkbox" required />I agree to receive communications from
          Createx Construction Bureau.
        </label>
        <button type="submit" >Send request</button>
        </form>
    </div>
  );
}

export default Request;
