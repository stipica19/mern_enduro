import Apply from "../models/applyModel.js";
import Tour from "../models/tourModel.js";
import asyncHandler from "express-async-handler";

const addNewApplyTour = asyncHandler(async (req, res) => {
  console.log("ADD new tour");
  const {
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
  } = req.body;
  //provjeriti broj ture i broj slobodnih mijesta u njoj
  //zatim ukoliko ima slobodnih mjesta smanjiva se ukoliko se rezervira
  //console.log("TIP TURE : ", tour_type);
  console.log("BROJ TURE : ", tour_number);
  //console.log("BROJ LJUDI : ", number_person);

  //Trazimo turu pod brojem ture
  const tour = await Tour.findOne({
    tour_number: tour_number,
  });

  /////console.log("STANJE TURE JE: ", tour);

  if (tour) {
    // //console.log("Broj slobodnih mjesta je : ", tour.tour_space);
    //  //console.log("Broj zeljenih mjesta za rezervirat : ", number_person);

    if (tour.tour_space >= number_person) {
      console.log("ima slobodnih mjesta");
      await Tour.findOneAndUpdate(
        { tour_number: tour_number },
        { $set: { tour_space: tour.tour_space - number_person } }
      );

      const newApply = Apply.create({
        tour_type,
        tour_number: tour,
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
      });
      if (newApply) {
        res.status(201).send({
          message: "The reservation was successful",
          success: true,
        });
      } else {
        res.status(400).send({
          message: "Reservation failed. Please try again!",
          success: false,
        });
        throw new Error("Reservation failed. Please try again!");
      }

      res.status(201);
    } else {
      //console.log("nema slobodnih mjesta");
      res.send({
        message: "Reservation failed. Please try again!",
        success: false,
      });
    }
  }
});

const getApply = asyncHandler(async (req, res) => {
  const applys = await Apply.find().populate("tour_number");
  if (applys) {
    res.json(applys);
  } else {
    res.status(404);
    throw new Error("Applys not found");
  }
});

const getApplyById = asyncHandler(async (req, res) => {
  const apply = await Apply.findById(req.params.id).populate("tour_number");

  if (apply) {
    res.json(apply);
  } else {
    res.status(404);
    throw new Error("Apply not found");
  }
});

export { addNewApplyTour, getApply, getApplyById };
