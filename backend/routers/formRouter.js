const express = require("express");
const router = express.Router();
const Model = require("../models/formModel");

router.post("/add", (req, res) => {
  const formdata = req.body;
  console.log(formdata);

  // to save data
  new Model(formdata)
    .save()
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//to Fetch data
router.get("/getall", (req, res) => {
  Model.find()
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// to Fetch data by email
router.get("/getbyuser/:userid", (req, res) => {
  
  Model.find({ user: req.params.userid })
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// to fetch data by Id
router.get("getbyid/:id", (req, res) => {
  console.log(req, params.id);
  Model.$where
    .findById(req.params.id)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//to delete
router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
