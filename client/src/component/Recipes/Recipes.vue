<template>
    <div>
       <div v-for="recipe in Recipes" :key="recipe._id">
           <editor-content :editor="recipe" />
           <!-- <div @click="goToPDP(recipe._id)">{{recipe.title}}</div>
           <div>{{recipe.content}}</div> -->
           
        </div> 
    </div>    
</template>

<script>
import axios from 'axios';
import { Editor, EditorContent } from "@tiptap/vue-2";

export default{
    components: {
        EditorContent
    },
    data(){
            return{
            Recipes:[]
            }
    },
    created(){
        const apiURL='http://localhost:5000/recipe';
        axios.get(apiURL).then(res=>{
            // eslint-disable-next-line no-debugger
            debugger;
            this.Recipes = [res.data[res.data.length - 1]]
                // .filter(d => d.content && typeof d.content === 'object')
                .map(() => new Editor({ content: { type: 'doc', content: [] } }));
            console.log(this.Recipes);
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
