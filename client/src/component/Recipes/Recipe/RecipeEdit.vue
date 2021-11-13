

<template>
    <div>
        <h1>Edit your recipe</h1>
        <form @submit.prevent ="editRecipe">
            <div class ="form-group">
                <label>Name</label>
                <input type ="text" class = "form-control" v-model = "recipe.title" required>
            </div>
             <div class ="form-group">
                <label>Content</label>
                <input type ="text" class = "form-control" v-model = "recipe.content" required>
            </div>
            <div class ="form-group">
                <button>Update</button>
            </div>

        </form>
        <button @click ="deleteRecipe">Delete</button>
    </div>
</template>

<script>
import { recipeService } from '../../../services';

export default{
    data() {
        return {
            id: this.$route.params.id,
            recipe: {}
        }
    },
    created() {
        recipeService.getRecipeById(this.id)
            .then(recipe => {
                this.recipe = recipe;
            })
            .catch(error=>{
                console.log(error)
            });
    },
    methods:{
        deleteRecipe() {
            this.deleteRecipe(this.id)
                .catch(error=>{
                    console.log(error)
                });
        },
        editRecipe() {
            this.updateRecipe(this.id, this.recipe)
                .catch(error=>{
                    console.log(error)
                });
        }
    }
}
</script>
