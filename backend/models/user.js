const mongoose = require("mongoose");


const consSchema = mongoose.Schema({
    _id:Number,
    conspiracy_theory: String,
    description: String,
    source: String,
    reference_images:String,

});

const consModel=mongoose.model("cons-coll",consSchema);

module.exports = {
    consModel
}