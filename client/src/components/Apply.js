import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
import moment from "moment";
import "moment/locale/hr";
import ToastBar from "./ToastBar";
const Apply = () => {
  const { t } = useTranslation();

  const options = [
    {
      label: "-",
      value: "",
    },
    {
      label: "Total beginner",
      value: "TotalBeginner",
    },
    {
      label: "Beginner",
      value: "beginner",
    },
    {
      label: "Hobby",
      value: "hobby",
    },
    {
      label: "Advanced",
      value: "advanced",
    },
    {
      label: "Professional",
      value: "professional",
    },
  ];
  const travelingOption = [
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

  const [tour_type, setSelectedOption] = useState("Tour 1");
  const [date_of_birth, setSBirthDay] = useState(new Date());
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobitel, setMobitel] = useState("");
  const [email, setEmail] = useState("");
  const [skill, setSkill] = useState("");
  const [number_person, setNumberPerson] = useState("");
  const [message, setMessage] = useState("");
  const [traveling, setTraveling] = useState("");
  const [tour_number, setTourNumber] = useState("");
  const [rentaBike, setRentaBike] = useState(false);
  const [accept, setAccept] = useState(false);
  const [termine, setTermine] = useState([]);
  const [loading, setLoading] = useState(false);
  const snackbarRef = useRef(null);
  const [notification, setNotification] = useState({
    message: "",
    success: false,
  });

  const [termine23, setTermine23] = useState([]);
  const [display, setDiplayForm] = useState("22");

  const getTermine = async () => {
    const data = await axios.get("https://endurodriftbosnien.com/api/tours/");
    setTermine23(data.data.slice(34));
    setTermine(data.data.slice(0, 34));
  };

  useEffect(() => {
    moment.locale("hr");
    getTermine();
  }, [notification]);

  const radioTour = (event) => {
    setSelectedOption(event.target.value);
  };
  const handeleRentaBike = () => {
    setRentaBike(!rentaBike);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (accept) {
        setLoading(true);
        const { data } = await axios.post(
          "https://endurodriftbosnien.com/api/apply",
          {
            tour_type,
            tour_number,
            name,
            address,
            date_of_birth,
            mobitel,
            email,
            skill,
            number_person,
            traveling,
            rentaBike,
            message,
          }
        );
        setLoading(false);

        setNotification(data);
        snackbarRef.current.show();
      }
    } catch (error) {
      setLoading(false);
      setNotification(error);
    }
  };
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

        <p>{t("apply_p5")}</p>
        <h3 style={{ color: "red" }}>{t("apply_choose")} &#128071;</h3>
        <p
          onClick={() => setDiplayForm("22")}
          style={display === "22" ? { color: "red" } : { color: "white" }}
        >
          &#128073; Tours 2022{" "}
        </p>
        <p
          onClick={() => setDiplayForm("23")}
          style={display === "23" ? { color: "red" } : { color: "white" }}
        >
          &#128073; Tours 2023{" "}
        </p>
      </div>

      <div className="grid-apply container">
        <div className="card flex">
          {!loading ? (
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
                {display === "22"
                  ? termine.map((termine) => (
                      <tr key={termine._id}>
                        <td>{termine.tour_number}</td>
                        <td>{moment(termine.checkIn_date).format("l")}</td>
                        <td>{moment(termine.checkOut_date).format("l")}</td>

                        <td
                          className={`${
                            termine.tour_space === 0
                              ? "rezervirano"
                              : "slobodno"
                          }`}
                        >
                          {termine.tour_space !== 0 ? (
                            <p>
                              {t("apply_yesterm")} {termine.tour_space}
                            </p>
                          ) : (
                            <p>{t("apply_noterm")}</p>
                          )}
                        </td>
                      </tr>
                    ))
                  : termine23.map((termine) => (
                      <tr key={termine._id}>
                        <td>{termine.tour_number}</td>
                        <td>{moment(termine.checkIn_date).format("l")}</td>
                        <td>{moment(termine.checkOut_date).format("l")}</td>
                        {/* <td>{termine.tour_duration}</td> */}
                        <td
                          className={`${
                            termine.tour_space === 0
                              ? "rezervirano"
                              : "slobodno"
                          }`}
                        >
                          {termine.tour_space !== 0 ? (
                            <p>
                              {t("apply_yesterm")} {termine.tour_space}
                            </p>
                          ) : (
                            <p>{t("apply_noterm")}</p>
                          )}
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          ) : (
            "Loading..."
          )}
        </div>

        <div className="card flex">
          <div className="form card">
            <form onSubmit={handleSubmit}>
              <div className="form-date grid">
                <div className="date-form grid">
                  <label htmlFor="tour">Tour 1</label>
                  <input
                    type="radio"
                    name="Tour 1"
                    value="tour 1"
                    checked={tour_type === "tour 1"}
                    onChange={radioTour}
                  />
                  <label htmlFor="tour">Tour 2</label>
                  <input
                    type="radio"
                    name="Tour 2"
                    value="tour 2"
                    checked={tour_type === "tour 2"}
                    onChange={radioTour}
                  />
                  <label htmlFor="tour">Tour 3</label>
                  <input
                    type="radio"
                    name="Tour 3"
                    value="tour 3"
                    checked={tour_type === "tour 3"}
                    onChange={radioTour}
                  />
                </div>

                <div className="date-form">
                  <div className="form-control ">
                    <label htmlFor="TOUR NUMBER">
                      {" "}
                      {t("apply_tournumber")}
                    </label>
                    <input
                      type="text"
                      name="tour_number"
                      required
                      onChange={(e) => setTourNumber(e.target.value)}
                    />
                  </div>

                  <div className="form-control">
                    <label htmlFor="email">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="date-form">
                  <div className="form-control ">
                    <label htmlFor="NAME AND SURNAME">
                      {t("contact_name")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="ADDRESS">ADDRESS</label>
                    <input
                      type="text"
                      name="ADDRESS"
                      required
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="NUMBER OF PERSONS">
                      {t("apply_person")}
                    </label>
                    <input
                      type="text"
                      name="number_person"
                      required
                      onChange={(e) => setNumberPerson(e.target.value)}
                    />
                  </div>
                </div>
                <div className="date-form">
                  <label htmlFor="DATE OF BIRTH">{t("apply_DBH")}</label>
                  <DatePicker
                    selected={date_of_birth}
                    onChange={(date) => setSBirthDay(date)}
                    className="date-pick"
                  />
                </div>
                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="TEL/MOB">{t("apply_tel")}</label>
                    <input
                      type="text"
                      name="TEL/MOB"
                      onChange={(e) => setMobitel(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="RATE YOUR SKILLS">{t("apply_skill")}</label>
                    <select
                      selected
                      onChange={(e) => {
                        setSkill(e.target.value);
                      }}
                    >
                      {options.map((option, index) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="RATE YOUR SKILLS">
                      {t("apply_traveling")}
                    </label>
                    <select
                      selected
                      onChange={(e) => {
                        setTraveling(e.target.value);
                      }}
                    >
                      {travelingOption.map((option, index) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="date-form ">
                  <div className="renta-bike">
                    <label htmlFor="Renta a Bike">Rent a Bike </label>
                    <input
                      type="checkbox"
                      name="Renta Bike"
                      value="Renta Bike"
                      checked={rentaBike}
                      onChange={handeleRentaBike}
                    />
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
                  <label htmlFor="ACCEPT TERMS AND CONDITIONS">
                    ACCEPT TERMS AND CONDITIONS
                  </label>
                  <input
                    type="checkbox"
                    name="accept"
                    required
                    onChange={(e) => setAccept(e.target.checked)}
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

export default Apply;
