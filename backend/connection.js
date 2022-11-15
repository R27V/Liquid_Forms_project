const mongoose = require("mongoose");

const dbName = "Liquid_Forms";
const url = `mongodb+srv://admin:adminname@cluster0.bx2fjji.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose
.connect(url)
.then((result) => {
    console.log("database connected");
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;