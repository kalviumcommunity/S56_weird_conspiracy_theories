const mongoose = require("mongoose");

const consSchema = mongoose.Schema({
    conspiracy_theory: String,
    description: String,
    source: String,
    reference_images:String,
    created_by:String,
},versionKey=false);
const userSchema=mongoose.Schema({
    username:String,
})
const UserModel=mongoose.model("username-colls",userSchema)

const consModel=mongoose.model("cons-coll",consSchema);

module.exports = {
    consModel,
    UserModel
}