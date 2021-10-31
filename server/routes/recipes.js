import express from 'express'
import {getRecipes,getRecipeById,createRecipes,deleteRecipe,editRecipe} from '../controllers/recipes.js'
const router = express.Router()
router.get('/',getRecipes)
router.get('/:id',getRecipeById)
router.post('/create-recipe',createRecipes)
router.delete('/delete-recipe/:id',deleteRecipe)
router.post('/edit-recipe/:id',editRecipe)

export default router