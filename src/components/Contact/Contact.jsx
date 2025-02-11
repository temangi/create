import React from "react";
import { useState } from "react";
import scss from "./Contact.module.scss";
import woman from "../../assets/Contact/woman.svg";
import checked from "../../assets/Contact/checked.svg";
import unchecked from "../../assets/Contact/unchecked.svg";
import check from "../../assets/Contact/check.svg";
import facebook from "../../assets/Contact/Facebook.svg";
import messanger from "../../assets/Contact/Messanger.svg";
import twitter from "../../assets/Contact/Twitter.svg";
import whatsapp from "../../assets/Contact/Whatsapp.svg";
import youtube from "../../assets/Contact/YouTube.svg";
import emailjs from "emailjs-com";

function Contact() {
  const [selectedMethod, setSelectedMethod] = useState("Phone");
  const [active,setActive] = useState(false)
  const methods = ["Phone", "Email", "Viber"];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send("WortanzeService", "template_a3zjjxq", formData, "kfeZRPzHzJZYrG-aF")
        .then((result) => {
            alert("Сообщение отправлено!");
        }, (error) => {
            alert("Ошибка: " + error.text);
        });
};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone : "",
    design : "",
    location : "",
    contact : "",
    message : ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    sendEmail(e);

    setFormData({
      name: '',
      email: '',
      phone : "",
      design : "",
      location : "",
      contact : "",
      message : ""
    });
  };

  const yourContact = [
    {
      title: "Name*",
      name : "name",
      message: "Your name",
      type: "text",
    },
    {
      title: "I am interested in",
      message: "Interior Design",
      name : "design",
      type: "text",
    },
    {
      title: "Phone*",
      name : "phone",
      message: "Your phone number",
      type: "tel",
    },
    {
      title: "Location*",
      name : "location",
      message: "New York",
      type: "text",
    },
    {
      title: "Email",
      name : "email",
      message: "Your working email",
      type: "email",
    },
  ];
  const seeContact = yourContact.map(({ title,name, message, type }, index) => (
    <section key={index}>
      <span>{title}</span>
      <input type={type} name={name} placeholder={message} onChange={handleChange} required/>
    </section>
  ));

  const address = [
    {
      title: "New York, USA",
      street: "8502 Preston Rd. Inglewood, New York 98380",
      call: "(405) 555-0128",
      email: "hello@createx.com",
      schedule: "Mon - Fri 9:00 - 18:00",
    },
    {
      title: "New Jersey, USA",
      street: "2464 Royal Ln. Mesa, New Jersey 45463",
      call: "(808) 555-0111",
      email: "hello@createx.com",
      schedule: "Mon - Fri 9:00 - 18:00",
    },
    {
      title: "San Francisco, USA",
      street: "8502 Preston Rd. Inglewood, San Francisco 98380",
      call: " (505) 555-0125",
      email: " hello@createx.com",
      schedule: " Mon - Fri 10:00 - 19:00",
    },
  ];
  const seeAddress = address.map(
    ({ title, street, call, email, schedule }, index) => (
      <section key={index}>
        <h1>{title}</h1>
        <div className={scss.contactMe}>
          <nav>
            <p>{street}</p>
            <a href="">See on the map</a>
          </nav>
          <div>
            <aside>
              <p>Call: </p>
              {call}
            </aside>
            <aside>
              <p>Email: </p>
              {email}
            </aside>
            <aside>
              <p>Schedule: </p>
              {schedule}
            </aside>
          </div>
        </div>
      </section>
    )
  );

  const imgs = [{ whatsapp, messanger, facebook, twitter, youtube }];

  const seeimgs = imgs.map(
    ({ whatsapp, messanger, facebook, twitter, youtube }, index) => (
      <section key={index}>
        <svg
          className={scss.whatsapp}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.3327 15.6559C29.3327 22.8302 23.4722 28.6459 16.2417 28.6459C13.9463 28.6459 11.7899 28.0592 9.91372 27.0296L2.66602 29.3327L5.02898 22.3632C3.83698 20.4059 3.15046 18.1102 3.15046 15.6559C3.15046 8.48172 9.0115 2.66602 16.2417 2.66602C23.4728 2.66602 29.3327 8.48172 29.3327 15.6559ZM16.2417 4.73476C10.1724 4.73476 5.2355 9.63402 5.2355 15.6559C5.2355 18.0456 6.01446 20.2586 7.33209 22.0589L5.95698 26.1149L10.1866 24.7706C11.9244 25.9116 14.0062 26.5771 16.242 26.5771C22.3105 26.5771 27.2482 21.6785 27.2482 15.6565C27.2482 9.63461 22.3108 4.73476 16.2417 4.73476ZM22.8524 18.6476C22.7715 18.5152 22.5579 18.4352 22.2373 18.2761C21.9161 18.117 20.338 17.3463 20.0447 17.2405C19.7505 17.1345 19.5359 17.0811 19.3223 17.3996C19.1087 17.7185 18.4936 18.4352 18.306 18.6476C18.1188 18.8607 17.9318 18.8873 17.6106 18.7279C17.29 18.5688 16.2562 18.2322 15.0305 17.1478C14.0767 16.3039 13.4325 15.2622 13.2453 14.9431C13.0583 14.6245 13.2257 14.4524 13.386 14.2939C13.5306 14.1511 13.7072 13.922 13.8675 13.7362C14.0284 13.5502 14.0817 13.4177 14.1881 13.205C14.2956 12.9925 14.242 12.8068 14.1614 12.6471C14.0814 12.4879 13.4391 10.9211 13.1718 10.2835C12.9045 9.64646 12.6376 9.75253 12.45 9.75253C12.2631 9.75253 12.0488 9.72587 11.8349 9.72587C11.621 9.72587 11.2731 9.80557 10.9789 10.1241C10.685 10.4429 9.85624 11.2133 9.85624 12.7798C9.85624 14.3466 11.0056 15.8604 11.1665 16.0725C11.3268 16.2847 13.3857 19.6044 16.6479 20.8793C19.9105 22.1537 19.9105 21.7285 20.4989 21.6752C21.0868 21.6222 22.397 20.9051 22.6654 20.162C22.9321 19.4177 22.9321 18.7804 22.8524 18.6476Z"
            fill="#787A80"
          />
        </svg>
        <svg
          className={scss.messanger}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.9993 2.66602C8.63602 2.66602 2.66602 8.19268 2.66602 15.011C2.66602 18.896 4.60435 22.361 7.63435 24.6243V29.3327L12.1743 26.841C13.386 27.176 14.6693 27.3577 15.9993 27.3577C23.3627 27.3577 29.3327 21.831 29.3327 15.0127C29.3327 8.19435 23.3627 2.66602 15.9993 2.66602ZM17.3243 19.291L13.9293 15.6693L7.30435 19.291L14.5927 11.5543L18.071 15.176L24.6127 11.5543L17.3243 19.291Z"
            fill="#787A80"
          />
        </svg>

        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className={scss.facebook}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.4178 1.34009L19.7148 1.33398C15.5545 1.33398 12.866 4.16744 12.866 8.55296V11.8814H9.14281C8.82108 11.8814 8.56055 12.1493 8.56055 12.4798V17.3023C8.56055 17.6328 8.82138 17.9004 9.14281 17.9004H12.866V30.0692C12.866 30.3997 13.1266 30.6673 13.4483 30.6673H18.306C18.6278 30.6673 18.8883 30.3994 18.8883 30.0692V17.9004H23.2416C23.5633 17.9004 23.8239 17.6328 23.8239 17.3023L23.8257 12.4798C23.8257 12.3211 23.7642 12.1692 23.6551 12.0569C23.5461 11.9446 23.3976 11.8814 23.2431 11.8814H18.8883V9.05983C18.8883 7.70368 19.2029 7.01523 20.9227 7.01523L23.4172 7.01432C23.7386 7.01432 23.9991 6.74638 23.9991 6.41619V1.93821C23.9991 1.60833 23.7389 1.3407 23.4178 1.34009Z"
            fill="#787A80"
          />
        </svg>
        <svg
          className={scss.twitter}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 7.69579C28.9694 8.13304 27.8637 8.42958 26.7019 8.56197C27.8881 7.88176 28.7962 6.80286 29.2266 5.52121C28.1138 6.15113 26.8855 6.60852 25.5768 6.85648C24.5287 5.78594 23.038 5.11914 21.3845 5.11914C18.2124 5.11914 15.6404 7.58189 15.6404 10.6176C15.6404 11.0482 15.6911 11.4687 15.7891 11.8708C11.016 11.6412 6.78357 9.45157 3.95085 6.12431C3.45568 6.9352 3.17399 7.88005 3.17399 8.88864C3.17399 10.7969 4.18881 12.4806 5.72854 13.4657C4.78719 13.4355 3.90185 13.1876 3.12677 12.7754V12.8441C3.12677 15.5079 5.10741 17.7311 7.73365 18.237C7.25248 18.361 6.74509 18.4297 6.22018 18.4297C5.84927 18.4297 5.49058 18.3945 5.13889 18.3275C5.87023 20.5138 7.99087 22.1037 10.5034 22.1473C8.53851 23.6216 6.06097 24.4978 3.36999 24.4978C2.90634 24.4978 2.44965 24.471 2 24.4224C4.54229 25.9855 7.56048 26.8969 10.8044 26.8969C21.3706 26.8969 27.1463 18.5168 27.1463 11.2492L27.1271 10.5372C28.2556 9.76651 29.2319 8.79818 30 7.69579Z"
            fill="#787A80"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 682 682"
          fill="none"
          className={scss.youtube}
        >
          {" "}
          <path
            d="M647.18 181.191C639.812 153.8 618.216 132.208 590.829 124.832C540.796 111.143 340.659 111.143 340.659 111.143C340.659 111.143 140.531 111.143 90.4975 124.313C63.637 131.681 41.5141 153.804 34.1463 181.191C20.9795 231.221 20.9795 334.975 20.9795 334.975C20.9795 334.975 20.9795 439.252 34.1463 488.758C41.5219 516.145 63.1102 537.737 90.5014 545.113C141.057 558.807 340.667 558.807 340.667 558.807C340.667 558.807 540.796 558.807 590.829 545.636C618.22 538.264 639.812 516.672 647.188 489.285C660.351 439.252 660.351 335.501 660.351 335.501C660.351 335.501 660.877 231.221 647.18 181.191V181.191ZM276.94 430.826V239.123L443.363 334.975L276.94 430.826Z"
            fill="#848484"
          ></path>{" "}
        </svg>
      </section>
    )
  );

  return (
    <section className={scss.contact}>
      <header>
        <article>
          <h1>Contact us</h1>
          <p>
            Please complete the form. Detailed information will help us to make
            a tuned offer.
          </p>
        </article>
        <main>
          <img src={woman} alt="" />
          <form onSubmit={handleSubmit}>
            <main className={scss.datas}>
              {seeContact}
              <nav>
                <p>Preferred contact method</p>
                <div className={scss.methods}>
                  {methods.map((method) => (
                    <span
                      key={method}
                      onClick={() => setSelectedMethod(method)}
                    >
                      <img
                        src={selectedMethod === method ? checked : unchecked}
                        alt=""
                      />
                      {method}
                    </span>
                  ))}
                </div>
              </nav>
            </main>
            <div className={scss.textarea}>
              <p>Message*</p>
              <textarea name="message" placeholder="Your message" onChange={handleChange}></textarea>

            </div>
            <div className={scss.sendRequest}>
              <nav>
                <img onClick={() => setActive(!active)} src={check }  className={active ? scss.active : scss.noActive} alt="" />
                <p>
                  I agree to receive communications from <br /> Createx
                  Construction Bureau.
                </p>
              </nav>
              <button type="submit">SEND REQUEST</button>
            </div>
          </form>
        </main>
      </header>
      <footer>
        <article>
          <h1>Our offices</h1>
          <p>
            Give us a call, send us a note or visit our office. We can’t wait to
            hear from you!
          </p>
        </article>
        <main>{seeAddress}</main>
        <aside className={scss.findUs}>
          <h1>Find us at</h1>
          <div>{seeimgs}</div>
        </aside>
      </footer>
    </section>
  );
}

export default Contact;
