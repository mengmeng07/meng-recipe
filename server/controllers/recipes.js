import express, { Router } from 'express';

import recipeContent from "../models/recipeContent.js"

const router = express.Router();

export const getRecipes = async (req,res)=>{
    try{
        const recipeBody = await recipeContent.find()
        console.log(recipeBody)
        res.status(200).json(recipeBody)
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}
export const getRecipeById = async (req,res)=>{
    try{
        const recipeBody = await recipeContent.findById(req.params.id)
        console.log(recipeBody)
        res.status(200).json(recipeBody)
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}
export const createRecipes = async (req,res)=>{
    const recipe = req.body
    const newRecipe = new recipeContent(recipe)
    try{
        await newRecipe.save()
        res.status(201).json(newRecipe)
   } catch(error) {
       res.status(409).json({message:error.message})
   }
}

export const deleteRecipe = async (req,res) =>{
    try{
        await recipeContent.findByIdAndRemove(req.params.id)}
    catch(error){
        res.status(409).json({message:error})
    }
}
export const editRecipe = async (req,res)=>{
    try{
        await recipeContent.findByIdAndUpdate(req.params.id,{$set: req.body})
    }
    catch(error){
        res.status(409).json({message:error})
    }
}
export default router
