import React, { useState } from "react";
import scss from "./CvForm.module.scss";
import { data, locations } from "../../../constants/Forms";
import attach from "../../../assets/forms/Attach.svg";
import krestik from "../../../assets/positions/krestik.svg";
import emailjs from "emailjs-com";

function CvForm({ setOpenCv }) {
  const [fileName, setFileName] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    file: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setFormData({ ...formData, file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      location: formData.location,
      file: fileName,
    };

    emailjs
      .send(
        "service_t05d4mf",
        "template_si1ensp",
        templateParams,
        "rjqgE-beScW_ozHkc"
      )
      .then(() => {
        alert("CV is sent!");
        setOpenCv(false);
      });
  };

  const clickOutside = (e) => {
    if (e.target.classList.contains(scss["wrap"])) {
      setOpenCv(false);
    }
  };

  const forms = data.map(({ title, type, placeholder }, index) => (
    <label key={index}>
      {title}
      {title === "Location*" ? (
        <>
          <input
            type="text"
            name="location"
            list="locations"
            placeholder={placeholder}
            onChange={handleChange}
            required
          />
          <datalist id="locations">
            {locations.map((el, index) => (
              <option key={index} value={el} />
            ))}
          </datalist>
        </>
      ) : (
        <input
          type={type}
          name={title.toLowerCase().replace(/\*/g, "").trim()}
          placeholder={placeholder}
          required
          onChange={handleChange}
        />
      )}
    </label>
  ));

  return (
    <div className={scss.wrap} onClick={clickOutside}>
      <main className={scss.cvForm}>
        <img
          className={scss.krestik}
          src={krestik}
          onClick={() => setOpenCv(false)}
          alt="Close"
        />

        <h1>Send your CV</h1>
        <form onSubmit={handleSubmit}>
          {forms}
          <label className={scss.attach}>
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              style={{ display: "none" }}
              required
            />
            <img src={attach} alt="" />
            <span>{fileName || "Attach your CV*"}</span>
          </label>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
}

export default CvForm;
