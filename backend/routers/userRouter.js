const express = require("express");
const router = express.Router();
const Model = require("../models/userModel");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);   

router.post("/add", (req, res) => {
    const formdata = req.body;
    console.log(formdata);
    const hash = bcrypt.hashSync(formdata.password, salt);
    formdata.password = hash;

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

// to Fetch data
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

// to fetch data by email 
router.get("/getbyemail/:email", (req, res) => {
    console.log(req.params.email);

    Model.find({ email: req.params.email })
    .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status.json(err);
      });
  });
  
  // to delete
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
  
  // for authentication
  router.post("/authenticate", (req, res) => {
    // req.body is used to get response in body
    const formdata = req.body;
    console.log(formdata);
  //   Model.findOne({ email: formdata.email, password: formdata.password })
    Model.findOne({ email: formdata.email})
  
      .then((result) => {
        console.log(result);
        // logic for validating User credentials- not error showing it shows (null- in findOne function)
        //  if email and password matches then result will contain data
        if (result) {
          if(bcrypt.compareSync(formdata.password, result.password))
          res.json(result);
          else{
              res.status(401).json({ status: "Login Failed" }); 
          }
        } else {
          // if result is null
          res.status(401).json({ status: "Login Failed" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.put('/update/:id', (req, res) =>{

  Model.findByIdAndUpdate(req.params.id, req.body, {new : true})
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