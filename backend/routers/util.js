const multer = require("multer");
const router = require("express").Router();
const nodemailer = require("nodemailer");

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "renuprojects27@gmail.com",
    pass: "ptqaqzovhwvmpxpc",
  },
  port: 465,
  host: "smtp.gmail.com",
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const myStorage = multer({ storage: storage });

router.post("/uploadfile", myStorage.single("myfile"), (req, res) => {
  res.status(200).json({ status: "success" });
});

router.post("/sendmail", (req, res) => {
  const { to, subject, html } = req.body;
  let mailData = {
    from: "renuprojects27@gmail.com",
    to: to,
    subject: subject,
    html: html,
  };

  mailTransporter.sendMail(mailData, (err) => {
    if (err) {
      return console.log("Error Occurs", err);
    }
    res.status.send({ message: "Mail Send" });
  });
});

module.exports = router;
