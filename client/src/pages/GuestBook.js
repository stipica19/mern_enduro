import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import "moment/locale/hr";

const GuestBook = () => {
  const [display, setDiplayForm] = useState(false);

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const number1 = useRef(0);
  const number2 = useRef(0);
  let rez = useRef(0);
  const [spamRez, setSpamRez] = useState(0);
  const [reviews, setReviews] = useState([]);

  const getReview = async () => {
    const data = await axios.get("/api/guestbook");
    setReviews(data.data.filter((review) => review.isVisible !== false));
    //console.log(data.data.filter((review) => review.isVisible !== false));
  };

  useEffect(() => {
    number1.current = Math.floor(Math.random() * 10);
    number2.current = Math.floor(Math.random() * 11);
    rez.current = number2.current + number1.current;
    getReview();
  }, []);

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (spamRez === rez.current) {
      await axios.post("/api/guestbook", {
        name,
        email,
        city,
        message,
      });
    } else {
      //console.log("Netočno");
    }
  };

  return (
    <section className="features-main grid-44 ">
      <div className=" grid-44 container">
        <div className="card flex">GUEST BOOK</div>
        <div className="card flex">
          <button
            className="gusetbook-btn btn btn-outline"
            onClick={() => setDiplayForm(!display)}
          >
            SIGN GUESTBOOK
          </button>
        </div>
        <div className={!display ? ` card form-display ` : `card  `}>
          <form onSubmit={handelSubmit}>
            <div className="form-date">
              <div className="date-form">
                <div className="form-control flex">
                  <label htmlFor="NAME AND SURNAME">NAME AND SURNAME</label>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="date-form">
                <div className="form-control flex">
                  <label htmlFor="ADDRESS">CITY</label>
                  <input
                    type="text"
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="date-form">
                <div className="form-control flex">
                  <label htmlFor="email">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="date-form">
                <div className="form-control flex">
                  <label htmlFor="email">GUESTBOOK ENTRY</label>
                  <textarea
                    name=""
                    id=""
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="date-form">
                <div className="form-control flex">
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
                <button
                  type="submit"
                  value="SUBMIT"
                  className="btn btn-outline"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>

        {reviews.map((review) => (
          <div className="card flex" key={review._id}>
            <h1>
              {review.name} - {moment(review.createdAt).format("l")}
            </h1>

            <p>{review.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuestBook;
