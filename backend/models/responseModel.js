const { Schema, model, Types } = require("../connection");

const mySchema = new Schema({
  form: { type: Types.ObjectId, ref: "form" },
  data : Object, 
  email: String,
  createdAt: Date,
});
module.exports = model("responses", mySchema);
