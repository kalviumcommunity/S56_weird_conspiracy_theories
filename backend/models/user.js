const mongoose = require("mongoose");


const consSchema = mongoose.Schema({
    conspiracy_theory: String,
    description: String,
    source: String,
    reference_images:String,
},versionKey=false);

const consModel=mongoose.model("cons-coll",consSchema);

module.exports = {
    consModel
}