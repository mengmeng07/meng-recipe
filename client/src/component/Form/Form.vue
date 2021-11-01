<template>   
    <div>
        <h1>THIS IS FORM</h1>
        <form @submit.prevent ="handleUpdateRecipe">
            <div class ="input is-info">
                <label class="label">Name</label>
                <input type ="text" class = "form-control" v-model = recipe.title required>
            </div>    
             <div class ="input is-warning">
                <label>Content</label>
                <input type ="text" class = "form-control" v-model = recipe.content required>
            </div>
            <div class ="form-group">
                <button>Create</button>       
            </div>    
            
        </form>    
    </div>    
</template>

<script>
import axios from "axios"
export default{
    name:"Form",
    components:{
        
    },
    methods:{
        handleUpdateRecipe(){
            const apiURL = 'http://localhost:5000/recipe/create-recipe'
            axios.post(apiURL,this.recipe).then(()=>{
                this.$router.push('/recipes')
                this.recipe={
                    title:'',
                    content:'',
                    
                }
            }).catch((error) =>{
                console.log(error)
            })

        }
    },
    data(){
        return {
            recipe:{
                title:'',
                content:''
            }
        }
    }

}


</script>
