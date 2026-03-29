const Receipe = require("../model/receipes");

// create a receipe(post new receipe)
const createReceipe = async(req,res) =>{
    try{
        const newReceipe = new Receipe({
            title: req.body.title,
            type: req.body.type,
            ingredients: req.body.ingredients,
            cookingTime : req.body.cookingTime,
            instructions: req.body.instructions            
        });
        const savedReceipe = await newReceipe.save();
        res.status(201).json({message: "Receipe created successfully", receipe: savedReceipe})
    }
    catch(err){
        res.status(500).json({message: "Error creating receipe", error: err.message})
    }
}

// get all receipes
const getAllReceipes = async(req,res) =>{
    try{
        const receipes = await Receipe.find();
        res.status(200).json({message: "Receipes fetched successfully", receipes: receipes})
    }
    catch(err)
    {
        res.status(500).json({
            message: "Error fetching receipes",
            error: err.message
        })
    }
}

// get receipe by id
const getReceipeById = async(req,res) =>{
    try{
        const receipe = await Receipe.findById(req.params.id);
        if(!receipe){
            return res.status(404).json({message: "Receipe not found"});
        }
        res.status(200).json({receipe});
    }
    catch(err){
        res.status(500).json({message: "Error fetching receipe", error: err.message});
    }
}

// update receipe
const updateReceipe = async(req,res) =>{
    try{
        const updatedReceipe = await Receipe.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updatedReceipe){
            return res.status(404).json({message: "Receipe not found"});
        }
        res.status(200).json({message: "Receipe updated successfully", receipe: updatedReceipe});
    }
    catch(err){
        res.status(500).json({message: "Error updating receipe", error: err.message});
    }
}

// delete receipe
const deleteReceipe = async(req,res) =>{
    try{
        const deletedReceipe = await Receipe.findByIdAndDelete(req.params.id);
        if(!deletedReceipe){
            return res.status(404).json({message: "Receipe not found"});
        }
        res.status(200).json({message: "Receipe deleted successfully"});
    }
    catch(err){
        res.status(500).json({message: "Error deleting receipe", error: err.message});
    }
}

module.exports = { createReceipe, getAllReceipes, getReceipeById, updateReceipe, deleteReceipe };