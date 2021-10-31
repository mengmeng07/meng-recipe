import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import recipeRoutes from './routes/recipes.js'

const app = express()
app.use(express.json({ limit: "30mb", extended:true}))
app.use(express.urlencoded({ limit:"30mb", extended:true}))
app.use(cors({
  origin: "*"
}));
app.use('/recipe',recipeRoutes)
const CONNECTION_URL = 'mongodb+srv://Pangpanglin:YksGQfpYmq523Gf@cluster0.ov1ry.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT ||5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=> console.log(`Server running on port:${PORT}`)))
.catch((error) => console.log(error.message))

mongoose.set('useFindAndModify',false)