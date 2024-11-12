import Gallery from "../models/galleryModel.js";
import YouTube from "../models/ytModel.js";
import generateToken from "../utils/generateToken.js";
import asyncHandler from "express-async-handler";
import multer from "multer";
import expressAsyncHandler from "express-async-handler";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
// INIT Upload
var upload = multer({ storage: storage }).single("image");

const addPhoto = asyncHandler(async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      //console.log("GREŠKA KOD FILE-a");
      //console.log(err);
    } else {
      if (req.file == undefined) {
        //console.log("GRESKETINA UNDEFINDE");
      } else {
        //console.log(req.file);
        const newPhoto = Gallery.create({
          image: req.file.filename,
        });

        if (newPhoto) {
          res.send({
            message: "Slika uspješno dodana :D",
            success: true,
          });
        } else {
          res.send({
            message: "Greška. Please try again!",
            success: false,
          });
          throw new Error("Add photo failed. Please try again!");
        }
      }
    }
  });
});

const getPhoto = asyncHandler(async (req, res) => {
  const photoCount = await Gallery.countDocuments();
  const skip = req.query.skip ? Number(req.query.skip) : 0;
  const DEFAULT_LIMIT = 5;

  // Izračunajte vrijednost za skip s osiguranjem da je >= 0
  const calculatedSkip = Math.max(0, photoCount - DEFAULT_LIMIT - (skip - 1));

  const photos = await Gallery.find({})
    .skip(calculatedSkip)
    .limit(DEFAULT_LIMIT);

  if (photos.length > 0) {
    res.json(photos);
  } else {
    res.status(404); // Promijenjen status u 404 za "Not Found"
    throw new Error("No photos found");
  }
});

const addYouToube = asyncHandler(async (req, res) => {
  const video = await YouTube.findOne({ youtube_url: req.body.video });

  if (video) {
    res.send({ message: "Već postoji video!!", success: false });
    throw new Error("Tour already exists");
  }
  const newTour = await YouTube.create({
    youtube_url: req.body.video,
  });
  if (newTour) {
    res.status(201).send({
      message: "Uspješno dodan video",
      success: true,
    });
  } else {
    res.status(400).send({ message: "Već postoji video!!", success: false });
    throw new Error("Youtube error");
  }
});

const getYouTube = expressAsyncHandler(async (req, res) => {
  const videos = await YouTube.find();
  if (videos) {
    res.send(videos);
  } else {
    res.status(401);
    throw new Error("Invalid video");
  }
});

const deletePhoto = expressAsyncHandler(async (req, res) => {
  const deleteId = req.params.id;
  console.log(deleteId);
  const photo = await Gallery.findById(deleteId);

  console.log(photo);

  if (photo) {
    await photo.remove();
    res.json({ message: "Photo removed" });
  } else {
    res.status(404);
    throw new Error("Photo not found");
  }
});

export { addPhoto, getPhoto, getYouTube, addYouToube, deletePhoto };
