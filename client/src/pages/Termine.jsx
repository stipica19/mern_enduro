import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useTranslation } from "react-i18next";

const Termine = () => {
  const [termine300, setTermine300] = useState([]);
  const [termine400, setTermine400] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const getTermine = async () => {
      try {
        const res = await axios.get("/api/tours/");
        // Filtriranje za ture sa brojevima 300+
        const filtered300 = res.data.filter(
          (data) => data.tour_number >= 300 && data.tour_number < 400
        );
        setTermine300(filtered300);

        // Filtriranje za ture sa brojevima 400+
        const filtered400 = res.data.filter((data) => data.tour_number >= 400);
        setTermine400(filtered400);
      } catch (err) {
        console.log("Error fetching tours: ", err);
      }
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
          <h3>DATES 2024</h3>
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
              {termine300.map((termine) => (
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
      <div className="grid-1 container">
        <div className="card termine-color flex"></div>
        <div className="card termine-color flex">
          <h3>DATES 2025</h3>
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
              {termine400.map((termine) => (
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
