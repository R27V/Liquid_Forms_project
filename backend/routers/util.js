const multer = require("multer");
const router = require("express").Router();
const nodemailer = require("nodemailer");
const { MongoClient } = require("mongodb");
const FormModel = require("../models/formModel");

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
    cb(null, "./static/uploads");
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

const saveDocToMongoDB = async (client, obj, collectionName = "FormResponses") => {
  
  await client.connect();
  // console.log('Connected successfully to server');
  const db = client.db();
  const collection = db.collection(collectionName);
  await collection.insertOne(obj);
  console.log("response saved to mongodb🍃");
};

router.post("/save-res-to-mongo", (req, res) => {
  const { formid, resObj } = req.body;
  FormModel.findById(formid)
    .then((data) => {
      const { dbSrc } = data;
      const client = new MongoClient(dbSrc);
      saveDocToMongoDB(client, resObj)
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());

      res.json({
        message: "success",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(504).json(err);
    });
});

module.exports = router;
