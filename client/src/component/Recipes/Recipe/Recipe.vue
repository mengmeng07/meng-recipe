<template>
    <div>
        <div>{{Recipe.title}}</div>
        <div>{{Recipe.content}}</div>
        <button @click.prevent="deleteRecipe(Recipe._id)">delete recipe2</button>
        <button @click.prevent="editRecipe(Recipe._id)">edit recipe</button>
    </div>    
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            id:this.$route.params.id,
            Recipe:[]
        }
    },
    
    created(){
        const apiURL='http://localhost:5000/recipe/' + this.id
        axios.get(apiURL).then(res=>{
            this.Recipe = res.data
            console.log(this.Recipe)
        }).catch(error=>{
            console.log(error)
        })        
    },
    methods:{
        deleteRecipe(id){
            const apiURL = 'http://localhost:5000/recipe/delete-recipe/'+ id
            if(window.confirm("Are you absofuckinglutely sure?")) {
                axios.delete(apiURL).then(()=>{
                }).catch(error=>{
                    console.log(error)
                })
            }
            window.location.reload()
        },
        editRecipe(id){
            this.$router.push({name:'edit',params:{id:id}})
        }
    }
}

</script>