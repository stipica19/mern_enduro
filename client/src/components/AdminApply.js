import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import "moment/locale/hr";

const AdminApply = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "https://endurodriftbosnien.com/api/apply/" + id
        );
        setReservations(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <section className="admin-apply">
      <div className="grid-1">
        <div className="container">
          {loading && <h1>Loading ...</h1>}
          {!loading && (
            <div>
              <p>
                {" "}
                &#9658;TOUR NUMBER : &nbsp;{" "}
                {reservations.tour_number.tour_number}{" "}
              </p>
              <p> &#9658;TOUR TYPE : &nbsp; {reservations.tour_type}</p>
              <p> &#9658;NAME : &nbsp; {reservations.name} </p>
              <p>
                &#9658;EMAIL :&nbsp;&nbsp;
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = `mailto:${reservations.email}`;
                    e.preventDefault();
                  }}
                >
                  {reservations.email}
                </Link>{" "}
              </p>

              <p> &#9658;ADDRESS : &nbsp; {reservations.address}</p>
              <p>
                {" "}
                &#9658;DATE OF BIRTH : &nbsp;{" "}
                {moment(reservations.date_of_birth).format("l")}
              </p>
              <p> &#9658;MOB : &nbsp; {reservations.mobitel}</p>
              <p> &#9658;SKILL : {reservations.skill}</p>
              <p>
                {" "}
                &#9658;NUMBER PERSON : &nbsp; {reservations.number_person}{" "}
              </p>
              <p>&#9658;MESSAGE : &nbsp; {reservations.message}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminApply;
