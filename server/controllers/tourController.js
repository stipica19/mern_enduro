import Tour from "../models/tourModel.js";
import generateToken from "../utils/generateToken.js";
import asyncHandler from "express-async-handler";
/*
const addTour = asyncHandler(async (req, res) => {
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
  const newTour = await Tour.create({
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
});*/
const addTour = asyncHandler(async (req, res) => {
  const start_date = "23.08.2025";

  const number_of_tours = 421;
  const tour_duration = 7; // Datum početka, broj tura i trajanje tura (u danima)
  let parts = start_date.split("."); // Razdvajanje dana, meseca i godine
  let day = parseInt(parts[0], 10); // Dan
  let month = parseInt(parts[1], 10) - 1; // Mesec (u JavaScriptu meseci idu od 0 do 11)
  let year = parseInt(parts[2], 10); // Godina

  // Kreiranje JavaScript Date objekta
  let currentStartDate = new Date(year, month, day);
  // Pretvaranje početnog datuma iz stringa u JavaScript Date objekat

  // Iteriranje kroz broj tura
  for (let i = 411; i < 421; i++) {
    // Generisanje datuma završetka ture na osnovu trajanja
    let currentEndDate = new Date(currentStartDate);
    currentEndDate.setDate(currentEndDate.getDate() + tour_duration);

    // Kreiranje ture
    const tourExists = await Tour.findOne({ checkIn_date: currentStartDate });

    if (tourExists) {
      res.status(400);
      throw new Error(`Tour already exists for ${currentStartDate}`);
    }

    const newTour = await Tour.create({
      tour_number: i + 1, // Tour broj se povećava svakom iteracijom
      checkIn_date: currentStartDate,
      checkOut_date: currentEndDate,
      tour_duration: tour_duration,
      tour_availability: true, // Postavljamo kao dostupno
      tour_space: 12, // Primer: 20 mesta dostupno u svakoj turi
    });

    if (!newTour) {
      res.status(400);
      throw new Error("Invalid Tour data");
    }

    // Pomeramo početni datum za 7 dana (do sledeće subote)
    currentStartDate.setDate(currentStartDate.getDate() + 7);
  }

  // Vraćamo odgovor da su ture uspešno dodate
  res
    .status(201)
    .json({ message: `${number_of_tours} tours successfully added ` });
});

//GET ALL TOURS
const getAllTours = asyncHandler(async (req, res) => {
  // Kreiramo trenutni datum i datum koji je limitiran
  const currentDate = new Date();
  const limitDate = new Date("2023-12-12T18:00:00.000Z");

  // Pretražujemo ture koje imaju checkOut_date između trenutnog i krajnjeg datuma
  const tours = await Tour.find({
    checkOut_date: {
      $gte: currentDate, // Ture koje još nisu završene
      $lt: limitDate, // Ture koje završavaju pre krajnjeg datuma
    },
  });

  // Ako ture postoje, šaljemo ih kao JSON
  if (tours && tours.length > 0) {
    res.json(tours);
  } else {
    res.status(404);
    throw new Error("No tours found within the specified date range");
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

/*
const deleteTours = asyncHandler(async (req, res) => {
  // Definišemo opseg brojeva tura koje želimo da obrišemo
  const startTourNumber = 413;
  const endTourNumber = 435;

  // Brisanje tura koje imaju tour_number između 413 i 435
  const result = await Tour.deleteMany({
    tour_number: { $gte: startTourNumber, $lte: endTourNumber }
  });

  // Provera da li su ture uspešno obrisane
  if (result.deletedCount > 0) {
    res.status(200).json({
      message: `Successfully deleted ${result.deletedCount} tours from ${startTourNumber} to ${endTourNumber}`
    });
  } else {
    res.status(404);
    throw new Error(`No tours found between ${startTourNumber} and ${endTourNumber}`);
  }
});
*/

export { addTour, getAllTours };
