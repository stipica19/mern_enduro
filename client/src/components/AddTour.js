import React, { useState } from "react";

import axios from "axios";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";

const AddTour = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [checkIn_date, setStartDate] = useState(new Date());
  const [checkOut_date, setEndDate] = useState(new Date());
  const [tour_number, setTourNUmber] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const data = {
      tour_number,
      checkIn_date,
      checkOut_date,
    };
    await axios.post("", JSON.stringify(data), config);
  };
  return (
    <form onSubmit={handleSubmit}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <DatePicker
        selected={checkIn_date}
        onChange={(date) => setStartDate(date)}
      />

      <br />
      <br />
      <br />
      <br />
      <DatePicker
        selected={checkOut_date}
        onChange={(date) => setEndDate(date)}
      />
      <input type="text" onChange={(e) => setTourNUmber(e.target.value)} />
      <button>Submit</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </form>
  );
};

export default AddTour;
