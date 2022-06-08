import Apply from "../models/applyModel.js";
import Tour from "../models/tourModel.js";
import asyncHandler from "express-async-handler";
import nodemailer from "nodemailer";

const addNewApplyTour = asyncHandler(async (req, res) => {
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
  //console.log("BROJ TURE : ", tour_number);
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
      //console.log("ima slobodnih mjesta");
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
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "dasti1910@gmail.com",
            pass: process.env.EMAIL,
          },
        });

        let mailOptions = {
          to: "dasti1910@gmail.com",
          from: `${email}`,
          name: `${name}`,
          html: `
          <html> <head><style>
          .list-group li {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        li{
          list-style-type: circle;
          font-weight:800;
        

        }
        </style> </head> <body>
        
      
          <ul class="list-group">
              <li>Tour type : &nbsp;
                <span class="badge">${tour_type}</span>
            </li>
            <li>Tour number : &nbsp; 
                <span class="badge"> ${tour.tour_number}</span>
            </li>
            <li>Name : &nbsp;
                <span class="badge"> ${name}</span>
            </li>
            <li>Address : &nbsp;
                <span class="badge"> ${address}</span>
            </li>
            <li>Date of brith and mobitel : &nbsp;
            <span class="badge"> ${
              date_of_birth.toString() + " &nbsp;  ,  &nbsp; " + mobitel
            }</span>
          </li>
          <li>Email : &nbsp;
          <span class="badge"> ${email}</span>
        </li>
        <li>Number person and traveling :  &nbsp;
        <span class="badge"> ${
          number_person + "  &nbsp; &nbsp;" + traveling
        }</span>
      </li>
      <li>Message :  &nbsp;
        <span class="badge"> ${message}</span>
      </li>
          </ul> </body></html>`,
        };

        transporter.sendMail(mailOptions, function (err, info) {
          if (err) {
            //console.log(err);
            res.send({ message: "error send msg", success: false });
          } else {
            //console.log(info);
            res.send({ message: "Send email succesfuly", success: true });
          }
        });

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
  //  //console.log(applys);
  if (applys) {
    res.json(applys);
  } else {
    res.status(404);
    throw new Error("Applys not found");
  }
});

const getApplyById = asyncHandler(async (req, res) => {
  //console.log(req.params.id);
  const apply = await Apply.findById(req.params.id).populate("tour_number");

  if (apply) {
    res.json(apply);
  } else {
    res.status(404);
    throw new Error("Apply not found");
  }
});

export { addNewApplyTour, getApply, getApplyById };
