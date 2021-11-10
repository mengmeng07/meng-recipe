<template>
  <div class="form">
    <editor-content :editor="titleTipTap" />
    <editor-content :editor="body" />
    <button @click="updateData">submit</button>
  </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-2";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import axios from "axios";

export default {
  components: { 

    EditorContent,
  },
  data() {
    return {
      titleTipTap: null,
      body: null,
      recipe: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    updateData: function () {
      const apiURL = "http://localhost:5000/recipe/create-recipe";
      const recipeTitle = this.titleTipTap.getJSON();
      const recipeContent = this.body.getJSON();
      this.recipe = {
            title: recipeTitle,
            content: recipeContent,
      };
    
      axios.post(apiURL, this.recipe)
      .then(() => console.log("done", this.recipe, recipeTitle, recipeContent))
    
    },
  },

  mounted() {
    this.titleTipTap = new Editor({
      extensions: [Document, Text, Bold, Paragraph],
      content: "<p>Hey, this is initial title</p>",
      onUpdate({ editor }) {
        console.log('');
        console.log('updating title', editor);
        console.log(editor.getJSON());
        // console.log(editor.getText());
        console.log(editor.getHTML());
      }
    });

    this.body = new Editor({
      extensions: [Document, Text, Bold, Paragraph],
      content: "<p>Hey, this is initial content</p>",
    });
  },
  beforeUnmount() {
    this.editor.destroy();
  },
};
//test//
</script> 
