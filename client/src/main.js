import Vue from "vue";
import App from "./app.vue";
import router from "./router.js"
import Scrollspy from 'vue2-scrollspy'
Vue.config.productionTip = false;
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bulma/css/bulma.css'
import'../../scss/index.scss'

new Vue({
  router,
  Scrollspy,  
  render: h => h(App)
}).$mount("#app");