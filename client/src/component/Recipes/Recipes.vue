<template>
    <div>
       <div v-for="recipe in recipes" :key="recipe._id">
           <editor-content :editor="recipe" />
           <!-- <div @click="goToPDP(recipe._id)">{{recipe.title}}</div>
           <div>{{recipe.content}}</div> -->

        </div>
    </div>
</template>

<script>
import { recipeService } from '../../services';

import { Editor, EditorContent } from "@tiptap/vue-2";
import { generateHTML } from '@tiptap/html'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold'
import StarterKit from '@tiptap/starter-kit'

export default {
    components: {
        EditorContent
    },
    data() {
        return {
            recipes: []
        }
    },
    created() {
        recipeService.getRecipes()
            .then(recipes => {
                this.recipes = recipes
                    .filter(d => d.content && typeof d.content === 'object')
                    .map((recipe) => new Editor({
                        extensions: [StarterKit],
                        content: generateHTML(recipe.content, [
                            Document,
                            Paragraph,
                            Text,
                            Bold,
                        ]),
                    }));
            })
            .catch(error=>{
                console.log(error)
            });
    },
    methods: {
        goToPDP(id) {
            this.$router.push({name:'individualRecipe',params:{id:id}})
        }
    }
}
</script>
