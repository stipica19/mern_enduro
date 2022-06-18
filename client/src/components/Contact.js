import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import Map from "./Map";
import ToastBar from "./ToastBar";
import { changeLanguage } from "i18next";
const location = {
  address: "ENDURO DRIFT",
  lat: 43.937859851516265,
  lng: 17.57804456819443,
};
const Contact = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState({
    message: "",
    success: "",
  });
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const snackbarRef = useRef(null);
  const [spamRez, setSpamRez] = useState(0);
  const number1 = useRef(0);
  const number2 = useRef(0);
  let rez = useRef(0);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (spamRez === rez.current) {
      emailjs
        .sendForm(
          process.env.REACT_APP_YOUR_SERVICE_ID,
          process.env.REACT_APP_YOUR_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_YOUR_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setLoading(false);

            setNotification({
              success: true,
              message: "Successfully sent an email",
            });
            snackbarRef.current.show();
          },
          (error) => {
            console.log(error.text);
            snackbarRef.current.show();
            setNotification({
              message: "Error sending email",
              success: false,
            });
          }
        );
    } else {
      snackbarRef.current.show();
      setNotification({
        message: "Spam Check is not valid",
        success: false,
      });
    }
  };

  useEffect(() => {
    number1.current = Math.floor(Math.random() * 10);
    number2.current = Math.floor(Math.random() * 11);
    rez.current = number2.current + number1.current;
    //console.log(number2.current);
    //console.log(number1.current);
    //console.log("first");
  }, []);

  return (
    <section className="docs-main contact">
      {snackbarRef ? (
        <ToastBar ref={snackbarRef} notification={notification} />
      ) : (
        ""
      )}
      <div className="grid-2 ">
        <div className="card flex">
          <Map />
        </div>
        <div className="card flex">
          <div className="form card">
            <h1> {t("contact_title")}</h1>
            <p>
              Mladen Brnas,
              <br /> Silvija Strahimira Kranjčevića,
              <br /> Gornji Vakuf-Uskoplje,
              <br />
              Bosnia and Herzegovin, <br />
              Phone: +387 63 136 095
              <br /> E-mail: endurodriftbosnien@gmail.com
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-date">
                {" "}
                <div className="date-form">
                  <div className="form-control ">
                    <label htmlFor="NAME AND SURNAME">
                      {t("contact_name")}
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" name="user_email" required />
                  </div>
                </div>
              </div>
              <div className="date-form">
                <label htmlFor="message">{t("contact_msg")}</label>
                <div className="form-control">
                  <textarea name="message" id="message"></textarea>
                </div>
              </div>
              <div className="date-form">
                <div className="form-control">
                  <label htmlFor="spam">
                    SPAM CHECK {number1.current} + {number2.current}
                  </label>
                  <input
                    type="number"
                    name="spam"
                    onChange={(e) => setSpamRez(Number(e.target.value))}
                    required
                  />
                </div>
              </div>
              <div className="date-form">
                <input
                  type="submit"
                  value={t("contact_btn")}
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
