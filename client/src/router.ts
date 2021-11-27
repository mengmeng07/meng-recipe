import Vue from 'vue'
import VueRouter from 'vue-router'
// import recipeContent from '../../../server/models/recipeContent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/recipes',
    name: 'recipes',
    component: () => import('./component/Recipes/Recipes.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('./component/Home/Home.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('./component/Form/Tiptap.vue')
  },
  {
    path: '/recipe/:id',
    name: 'individualRecipe',
    component: () => import('./component/Recipes/Recipe/Recipe.vue'),
    props:true
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('./component/Recipes/Recipe/RecipeEdit.vue')
  },
  {
    path: '/',
    name: 'catchAll',
    component: () => import('./component/Home/Home.vue')
 }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router