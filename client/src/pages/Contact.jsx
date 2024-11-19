import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import Map from "../components/Map";
import ToastBar from "../components/ToastBar";

const Contact = () => {
  const { t } = useTranslation();

  const [notification, setNotification] = useState({
    message: "",
    success: "",
  });

  const snackbarRef = useRef(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);

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
  };

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
              Bosnia and Herzegovina, <br />
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
                    <input type="text" name="user_name" required />
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
