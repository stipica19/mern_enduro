import React, { useEffect, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
import moment from "moment";
import "moment/locale/hr";
import ToastBar from "../components/ToastBar";
import emailjs from "@emailjs/browser";
import TextField from "../components/TextField";
import { useMemo } from "react";

const Apply = () => {
  const { t } = useTranslation();

  const travelingOptions = [
    {
      label: "-",
      value: "",
    },
    {
      label: "Car",
      value: "car",
    },
    {
      label: "Plane",
      value: "plane",
    },
  ];

  const tourTypeOptions = [
    {
      label: "-",
      value: "",
    },
    {
      label: `Tour 1  (${t("tour1_p1")}) `,
      value: "tour 1",
    },
    {
      label: `Tour 2  (${t("tour2_p1")}) `,
      value: "tour 2",
    },
    {
      label: `Tour 3  (${t("tour3_p1")}) `,
      value: "tour 3",
    },
  ];

  const [tour_type, setTourType] = useState("");

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobitel, setMobitel] = useState("");
  const [email, setEmail] = useState("");

  const [number_person, setNumberPerson] = useState("");
  const [message, setMessage] = useState("");
  const [traveling, setTraveling] = useState("");
  const [tour_number, setTourNumber] = useState("");
  const [rentaBike, setRentaBike] = useState(false);
  const [accept, setAccept] = useState(false);

  const [loading, setLoading] = useState(false);
  const snackbarRef = useRef(null);
  const [notification, setNotification] = useState({
    message: "",
    success: false,
  });
  const form = useRef();

  const [termine, setTermine] = useState([]);
  const [loadingTabele, setLoadingTabele] = useState(true);

  const filteredTermine = useMemo(() => {
    return termine.filter((data) => data.tour_number > 299);
  }, [termine]);
  // Preuzimanje termina sa servera
  useEffect(() => {
    const getTermine = async () => {
      try {
        const response = await axios.get("/api/tours/");
        setTermine(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingTabele(false); // Učitavanje završeno
      }
    };

    getTermine();
  }, []);

  const handeleRentaBike = () => setRentaBike((prevState) => !prevState);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!accept) return;

    setLoading(true);
    try {
      const { data } = await axios.post("/api/apply", {
        tour_type,
        tour_number,
        name,
        address,
        mobitel,
        email,
        number_person,
        traveling,
        rentaBike,
        message,
      });

      setNotification(data);
      snackbarRef.current.show();

      setTermine((prevTermine) =>
        prevTermine.map((termine) =>
          termine.tour_number === tour_number
            ? { ...termine, tour_space: termine.tour_space - 1 } // Smanji dostupna mesta
            : termine
        )
      );

      emailjs
        .sendForm(
          import.meta.env.VITE_YOUR_SERVICE_ID,
          import.meta.env.VITE_YOUR_TEMPLATE_ID_APPLY,
          form.current,
          import.meta.env.VITE_YOUR_PUBLIC_KEY
        )
        .catch(console.log);
    } catch (error) {
      setNotification(error);
    } finally {
      setLoading(false);
    }
  };
  const [touch, setTouch] = useState(false);
  const isValid = tour_type !== "";

  return (
    <section className="docs-main apply">
      {snackbarRef ? (
        <ToastBar ref={snackbarRef} notification={notification} />
      ) : (
        ""
      )}
      <h1>{t("apply_title")}</h1>
      <div className="container">
        <p>{t("apply_p1")}</p>
        <p>{t("apply_p2")} </p>
        <p>{t("apply_p3")}</p>
        <p>{t("apply_p4")}</p>
        <p>{t("apply_p5")}</p>
        <p>{t("apply_p6")}</p>

        <h3 style={{ color: "red" }}>{t("apply_choose")} &#128071;</h3>
      </div>

      <div className="grid-apply container">
        <div className="card flex">
          {loadingTabele ? (
            <div className="preloader">
              <p></p>
            </div>
          ) : (
            <table className="moto-date">
              <thead>
                <tr>
                  <th>{t("apply_th1")}</th>
                  <th>{t("apply_th2")}</th>
                  <th>{t("apply_th3")}</th>
                  <th>{t("apply_th5")}</th>
                </tr>
              </thead>
              <tbody>
                {filteredTermine
                  .sort((a, b) => a.tour_number - b.tour_number)
                  .map((termine) => (
                    <tr key={termine._id}>
                      <td>{termine.tour_number}</td>
                      <td>{moment(termine.checkIn_date).format("l")}</td>
                      <td>{moment(termine.checkOut_date).format("l")}</td>
                      <td
                        className={`${
                          termine.tour_space === 0 ? "rezervirano" : "slobodno"
                        }`}
                      >
                        {termine.tour_space !== 0 ? (
                          <p>
                            {t("apply_yesterm")} {termine.tour_space}{" "}
                            {t("apply_yesterm2")}
                          </p>
                        ) : (
                          <p>{t("apply_noterm")}</p>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="card flex">
          <div className="form card">
            <h1>{t("apply_anmelden")}</h1>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-date grid">
                <div className="date-form">
                  <div className="form-control">
                    <label>{t("apply_tourtype")}</label>
                    <select
                      selected
                      name="tour_type"
                      onChange={(e) => {
                        setTourType(e.target.value);
                      }}
                      onBlur={() => setTouch(true)}
                      required
                    >
                      {tourTypeOptions.map((option, index) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>{" "}
                  {touch ? !isValid && <span>{t("input_field")}</span> : null}
                </div>{" "}
                <div className="date-form">
                  <div className="form-control">
                    <label>{t("apply_tournumber")}</label>
                    <select
                      selected
                      name="tour_number"
                      onChange={(e) => {
                        setTourNumber(e.target.value);
                      }}
                      onBlur={() => setTouch(true)}
                      required
                    >
                      {filteredTermine
                        .sort((a, b) => a.tour_number - b.tour_number)
                        .map(
                          (termine) =>
                            termine.tour_space > 0 && (
                              <option
                                key={termine.tour_number.value}
                                value={termine.tour_number}
                              >
                                {termine.tour_number}
                              </option>
                            )
                        )}
                    </select>
                  </div>{" "}
                  {touch ? !isValid && <span>{t("input_field")}</span> : null}
                </div>{" "}
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                  type="email"
                  title="EMAIL *"
                  required
                />
                <TextField
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  name="name"
                  type="text"
                  title={t("contact_name")}
                  required
                />
                <TextField
                  onChange={(e) => setNumberPerson(e.target.value)}
                  value={number_person}
                  name="number_person"
                  type="text"
                  title={t("apply_person")}
                  required
                />
                <TextField
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  name="address"
                  type="text"
                  title="ADDRESS"
                />
                <TextField
                  onChange={(e) => setMobitel(e.target.value)}
                  value={mobitel}
                  name="mob"
                  type="text"
                  title={t("apply_tel")}
                />
                <div className="date-form">
                  <div className="form-control">
                    <label>{t("apply_traveling")}</label>
                    <select
                      name="traveling"
                      selected
                      onChange={(e) => {
                        setTraveling(e.target.value);
                      }}
                    >
                      {travelingOptions.map((option, index) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="date-form ">
                  <div className="renta-bike">
                    <label className="container1">
                      RENT A BIKE
                      <input
                        type="checkbox"
                        name="rentaBike"
                        value="Rent a Bike"
                        checked={rentaBike}
                        onChange={handeleRentaBike}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="date-form">
                <label htmlFor="message">{t("contact_msg")}</label>
                <div className="form-control ">
                  <textarea
                    name="message"
                    id=""
                    cols="60"
                    rows="5"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="date-form">
                <div className="form-control ">
                  <label className="container1">
                    <p>{t("apply_accept")}</p>
                    <input
                      type="checkbox"
                      name="accept"
                      required
                      onChange={(e) => setAccept(e.target.checked)}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="date-form">
                <input
                  type="submit"
                  value={t("contact_btn")}
                  className="btn btn-primary"
                />
              </div>
              <div className="date-form">
                <div className="form-control ">
                  <label htmlFor="*">{t("apply_*")}</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apply;
