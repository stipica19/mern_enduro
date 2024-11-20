import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useTranslation } from "react-i18next";

const Termine = () => {
  const [termine, setTermine] = useState([]);
  const { t } = useTranslation();
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
      </div>
      <div className="grid-1 container">
        <div className="card termine-color flex"></div>
        <div className="card termine-color flex">
          <h3>DATES 2025</h3>
        </div>
        {loadingTabele ? (
          <div className="preloader">
            <p></p>
          </div>
        ) : (
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
          </div>
        )}
      </div>
    </section>
  );
};

export default Termine;
