import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useTranslation } from "react-i18next";

const Termine = () => {
  const [termine, setTermine] = useState([]);
  const [termine23, setTermine23] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const getTermine = async () => {
      const data = await axios.get("https://endurodriftbosnien.com/api/tours/");

      setTermine(data.data.slice(0, 34));
      setTermine23(data.data.slice(34));
      //console.log(data.data);
    };
    getTermine();
  }, []);

  return (
    <section className="docs-main termine apply">
      <div className="grid-1 container">
        <div className="card termine-color flex">
          <div className="boja">
            <div>
              <p>{t("termine_free")}</p>
            </div>
            <div>
              <p> {t("termine_nofree")}</p>
            </div>
          </div>
        </div>
        <div className="card termine-color flex">
          <h3>DATES 2022</h3>
        </div>

        <div className="card flex">
          <table className="moto-date">
            <thead>
              <tr>
                <th>{t("apply_th1")}</th>
                <th>{t("apply_th2")}</th>
                <th>{t("apply_th3")}</th>
                {/*<th>{t("apply_th4")}</th> */}
                <th>{t("apply_th5")}</th>
              </tr>
            </thead>
            <tbody>
              {termine.map((termine) => (
                <tr key={termine._id}>
                  <td>{termine.tour_number}</td>
                  <td>{moment(termine.checkIn_date).format("l")}</td>
                  <td>{moment(termine.checkOut_date).format("l")}</td>
                  {/* <td>{termine.tour_duration}</td>*/}
                  <td
                    className={`${
                      termine.tour_space === 0 ? "rezervirano" : "slobodno"
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
        </div>
        <div className="card termine-color flex">
          <div className="boja">
            <h3>DATES 2023</h3>
          </div>
        </div>
        <div className="card flex">
          <table className="moto-date">
            <thead>
              <tr>
                <th>Tour number</th>
                <th>Check-in date</th>
                <th>Check-out date</th>
                {/*  <th>Tour duration</th>*/}
                <th>Tour availability</th>
              </tr>
            </thead>
            <tbody>
              {termine23.map((termine) => (
                <tr key={termine._id}>
                  <td>{termine.tour_number}</td>
                  <td>{moment(termine.checkIn_date).format("l")}</td>
                  <td>{moment(termine.checkOut_date).format("l")}</td>
                  {/* <td>{termine.tour_duration}</td>*/}
                  <td
                    className={`${
                      termine.tour_space === 0 ? "rezervirano" : "slobodno"
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
        </div>
      </div>
    </section>
  );
};

export default Termine;
