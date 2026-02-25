import foodModel from "../models/foodModel.js";
import fs from 'fs'

// add food item
const addFood = async (req,res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

// all food list
const listFood = async (req,res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// remove food item - FIXED
const removeFood = async (req,res) => {
    try {
        // req.body.id use karo (small i) - frontend se {id: foodId} aa raha hai
        const food = await foodModel.findById(req.body.id);
        
        // Check if food exists
        if (!food) {
            return res.json({success:false, message:"Food item not found"});
        }

        // Delete image
        fs.unlink(`uploads/${food.image}`, (err) => {
            if (err) console.log("Error deleting image:", err);
        })

        // Delete from database
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

export {addFood, listFood, removeFood}