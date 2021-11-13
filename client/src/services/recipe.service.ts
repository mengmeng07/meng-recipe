import { Recipe } from '../models/recipe';
import { BaseClient } from './base-client';

class RecipeService extends BaseClient {
  async getRecipes(): Promise<Recipe[]> {
    return this.axios.get<Recipe[]>('/recipes')
      .then(res => {
        if (res.status === 200) {
          return res.data;
        } else {
          throw new Error('Could not fetch the recipes');
        }
      });
  }

  async getRecipeById(id: string): Promise<Recipe> {
    return this.axios.get<Recipe>(`/recipes/${id}`)
      .then(res => {
        if (res.status === 200) {
          return res.data;
        } else {
          throw new Error('Could not fetch the recipes');
        }
      });
  }

  async createRecipe(recipe: Recipe): Promise<Recipe> {
    return this.axios.post('/recipes', recipe)
      .then((res) => {
        return res.data;
      });
  }

  async updateRecipe(recipe: Recipe): Promise<void> {
    return this.axios.put(`/recipes/${recipe._id}`, recipe)
      .then((res) => {
        return res.data;
      });
  }

  async deleteRecipe(id: string): Promise<void> {
    return this.axios.delete(`/recipes/${id}`)
      .then((res) => {
        return res.data;
      });
  }
}

export const recipeService = new RecipeService();
