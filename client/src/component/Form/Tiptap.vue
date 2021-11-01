<template>
  <div class = "form">
    <editor-content :editor="title" />
    <editor-content :editor="body" />
    <button @click="updateData"> submit </button>
  </div>  
</template>


<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import Text from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import axios from "axios"



export default {

components: {
    EditorContent,
  },
data(){
    return {
        title: null,
        body:null,
        recipe:{
            title:'',
            content:''
        }
    }
},
  methods:{ 
    updateData: function() {
    const apiURL = 'http://localhost:5000/recipe/create-recipe'
    axios.post(apiURL,this.recipe).then(()=> {
      this.recipe={
          title:JSON.stringify(this.title),
          content:JSON.stringify(this.body),
      }         
    }).catch((error) =>{
                console.log(error)
        })
  },

  mounted(){
    this.title = new Editor ({
      extensions: [
        Document,
        Text,
        Bold,
        Paragraph
      ],
    content: '<p>Hey, this is initial title</p>'  
    })

    this.body = new Editor({
      extensions: [
        Document,
        Text,
        Bold,
        Paragraph
      ],
    content: '<p>Hey, this is initial content</p>' 
    })
  },
beforeUnmount() {
  this.editor.destroy()
}
}
}
//test//
</script>