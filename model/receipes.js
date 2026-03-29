const mongoose = require("mongoose");

//create the schema for receipes
const receipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true},
    type :{
        type: String,
        required: true},
    ingredients: {
        type: [String],
        required: true},
    cookingTime: {
        type: String,
        required: true},
    instructions: {
        type: String,
        required: true},
    createdAt:{
        type: Date,
        default: Date.now
    }
})

// create the model using schema
const Receipe = mongoose.model("Receipe", receipeSchema);

module.exports = Receipe;