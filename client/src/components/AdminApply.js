import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import "moment/locale/hr";

const AdminApply = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [reservations, setReservations] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/apply/${id}`);
        setReservations(data);
      } catch (error) {
        console.error(error.message);
        setReservations(null);
      }
      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading || reservations === null) {
    return <h1>Loading ...</h1>;
  }

  return (
    <section className="admin-apply">
      <div className="grid-1">
        <div className="container">
          <p>
            &#9658;TOUR NUMBER : &nbsp; {reservations.tour_number.tour_number}
          </p>
          <p>&#9658;TOUR TYPE : &nbsp; {reservations.tour_type}</p>
          <p>&#9658;NAME : &nbsp; {reservations.name}</p>
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
            </Link>
          </p>

          <p>&#9658;ADDRESS : &nbsp; {reservations.address}</p>
          <p>
            {" "}
            &#9658;DATE OF BIRTH : &nbsp;
            {moment(reservations.createdAt).format("l")}
          </p>
          <p>&#9658;MOB : &nbsp; {reservations.mobitel}</p>

          <p>&#9658;NUMBER PERSON : &nbsp; {reservations.number_person}</p>
          <p>&#9658;MESSAGE : &nbsp; {reservations.message}</p>
        </div>
      </div>
    </section>
  );
};

export default AdminApply;
