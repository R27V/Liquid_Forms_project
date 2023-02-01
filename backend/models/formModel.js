const { Schema, model, Types} = require("../connection");

const mySchema = new Schema ({
    title : String,
    heading: String,
    description : String,
    data : Object,
    user : { type: Types.ObjectId, ref: "users"},
    dbType: String,
    dbSrc: String,
    createdAt : Date,
    lastUpdate : Date
});
module.exports = model("form", mySchema);