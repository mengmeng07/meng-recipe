<template>
    <div>
       <div v-for="recipe in Recipes" :key="recipe._id">
           <div @click="goToPDP(recipe._id)">{{recipe.title}}</div>
           <div>{{recipe.content}}</div>
           
        </div> 
    </div>    
</template>

<script>
import axios from 'axios'
export default{
    data(){
            return{
            Recipes:[]
            }
    },
    created(){
        const apiURL='http://localhost:5000/recipe'
        axios.get(apiURL).then(res=>{
            this.Recipes = res.data
        }).catch(error=>{
            console.log(error)
        })        
    },
    methods:{
        goToPDP(id){
            this.$router.push({name:'individualRecipe',params:{id:id}})
        }
    }
}
</script>
