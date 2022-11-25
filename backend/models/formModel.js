const { Schema, model, Types} = require("../connection");

const mySchema = new Schema ({
    title : String,
    data : Object,
    user : { type: Types.ObjectId, ref: "users"},
    createdAt : Date,
    lastUpdate : Date
});
module.exports = model("form", mySchema);