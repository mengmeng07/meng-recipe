<template>
    <div>
        <div>{{recipe.title}}</div>
        <div>{{recipe.content}}</div>
        <button @click.prevent="deleteRecipe(recipe._id)">delete recipe2</button>
        <button @click.prevent="editRecipe(recipe._id)">edit recipe</button>
    </div>
</template>
<script>
import { recipeService } from '../../../services';

export default {
    data() {
        return{
            id: this.$route.params.id,
            recipe: []
        }
    },

    created() {
        recipeService.getRecipeById(this.id)
            .then(recipe => {
                this.recipe = recipe;
            })
            .catch(error => {
                console.log(error)
            });
    },
    methods:{
        deleteRecipe(id){
            if (window.confirm("Are you absofuckinglutely sure?")) {
                recipeService.deleteRecipe(id)
                    .then(() => {
                        window.location.reload();
                    })
                    .catch(error=>{
                        console.log(error)
                    })
            }
        },
        editRecipe(id){
            this.$router.push({name:'edit',params:{id:id}})
        }
    }
}

</script>
