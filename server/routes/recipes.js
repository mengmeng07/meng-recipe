import express from 'express';

import {
  getRecipes,
  getRecipeById,
  createRecipes,
  deleteRecipe,
  editRecipe
} from '../controllers/recipes.js';

const router = express.Router();

router.get('/recipes', getRecipes);
router.get('/recipes/:id', getRecipeById);
router.post('/recipes', createRecipes);
router.delete('/recipes/:id', deleteRecipe);
router.post('/recipes/:id', editRecipe);

export default router;
