const { Schema, model, Types} = require("../connection");

const mySchema = new Schema ({
    title : String,
    data : Object,
    createdBy : { type: Types.ObjectId, ref: "user"},
    createdAt : Date,
    lastUpdate : Date
});
module.exports = model("form", mySchema);