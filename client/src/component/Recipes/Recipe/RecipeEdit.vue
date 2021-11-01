

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
import axios from 'axios'
export default{
    data(){
        return{
        id: this.$route.params.id,    
        recipe:{} 
        }
    },
    created(){
        const apiURL = 'http://localhost:5000/recipe/'+ this.id
        axios.get(apiURL).then(res=>{
            this.recipe = res.data
        }).catch(error=>{
            console.log(error)
        })
    },
    methods:{
        deleteRecipe(){
            const apiURL='http://localhost:5000/recipe/delete-recipe/'+ this.id
            axios.delete(apiURL)
        },
        editRecipe(){
            const apiURL='http://localhost:5000/recipe/edit-recipe/'+ this.id
            axios.post(apiURL,this.recipe).then((res)=>{
                console.log(res)
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}    
</script>
