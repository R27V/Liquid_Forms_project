const { Schema, model } = require("../connection");

const mySchema = new Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    isAdmin: {type : Boolean, default : false},
});
module.exports = model("users", mySchema);