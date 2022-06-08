import Tour from "../models/tourModel.js";
import generateToken from "../utils/generateToken.js";
import asyncHandler from "express-async-handler";

const addTour = asyncHandler(async (req, res) => {
  //console.log(req.body);
  const {
    tour_number,
    checkIn_date,
    checkOut_date,
    tour_duration,
    tour_availability,
    tour_space,
  } = req.body;

  const tour = await Tour.findOne({ tour_number });

  if (tour) {
    res.status(400);
    throw new Error("Tour already exists");
  }
  const newTour = Tour.create({
    tour_number,
    checkIn_date,
    checkOut_date,
    tour_duration,
    tour_availability,
    tour_space,
  });
  if (newTour) {
    res.status(201).json({
      tour_number,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Tour date");
  }
});

//GET ALL TOURS
const getAllTours = asyncHandler(async (req, res) => {
  const tours = await Tour.find();
  if (tours) {
    res.json(tours);
  } else {
    res.status(404);
    throw new Error("Tours not found");
  }
});

//GET TOUR BY ID

const getTourById = asyncHandler(async (req, res) => {
  const tour = await Tour.findOne(req.body.tour_number);
  if (tour) {
    res.json(tour);
  } else {
    res.status(404);
    throw new Error("Tour not found");
  }
});

export { addTour, getAllTours };
