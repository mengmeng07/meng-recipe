import mongoose from "mongoose"
const recipeSchema = mongoose.Schema({
    title: Object,
    content: Object,

    tags:[String],
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt:{
        type:Date,
        default: new Date() 
    },
})

const recipeContent = mongoose.model('recipeContent',recipeSchema)
export default recipeContent