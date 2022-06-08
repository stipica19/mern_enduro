import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  //console.log(req.body);

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dasti1910@gmail.com",
      pass: process.env.PASS,
    },
  });

  let mailOptions = {
    to: "dasti1910@gmail.com",
    from: `${email}`,
    name: `${name}`,
    html: `
    <h4>FROM : ${email} </h4>
    <h4>IME I PREZIME :  ${name}</h4>
    <p>PORUKA : ${message}<p>`,
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
});

const handle = async (promise) => {
  return promise
    .then((data) => [data, undefined])
    .catch((error) => Promise.resolve([undefined, error]));
};

const mailerController = {
  sendMail: (req, res) => {
    const contentHTML = `
                <h1>NOVI EMAIL :</h1>
                <p>Client Email: dasti1910.gmail.com </p>
                <div>
                    <p>Marko</p>
                    <div></div>  
                </div>
            `;
    const transporter = nodemailer.createTransport({
      host: "in-v3.mailjet.com",
      port: 587,
      secure: false,
      auth: {
        user: "dabd0201ff02a59bcc9472ce6c6099df",
        pass: "299f78a71647308cb186c757b428cd00",
      },
    });

    const [SMTPResponse, SMTPResponseError] = handle(
      transporter.sendMail({
        envelope: {
          from: "'SMTP Server' <stipica.klepic1@gmail.com>",
          to: "<pipiklepic1@gmail.com>, Mailer <pipiklepic1@gmail.com>",
        },
        subject: "IT Problem Tut site",
        html: contentHTML,
      })
    );

    //delete the file after sending the email or after an error
    if (SMTPResponse) {
      res.status(200).json({
        data:
          "email received, we will reach you as soon as we can: " +
          SMTPResponse.messageId,
      });
    }

    if (SMTPResponseError) {
      res.status(500).json({
        data: SMTPResponseError,
      });
    }
  },
};

router.post("/", mailerController.sendMail);

export default router;
