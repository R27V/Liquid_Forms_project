const { Schema , model, Types} = require("../connection");

const mySchema = new Schema ({
    filename : String,
    flie : String,
    user :  { type: Types.ObjectId, ref: "users" },
    createdAt : Date

});

module.exports = model("assets", mySchema); 