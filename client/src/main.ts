import Vue from "vue";
import App from "./app.vue";
import router from "./router"
// import Scrollspy from 'vue2-scrollspy';
import AOS from 'aos';
import 'aos/dist/aos.css'

Vue.config.productionTip = false;
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bulma/css/bulma.css'
import'../../scss/index.scss'

new Vue({
  router,
  // Scrollspy,
  render: h => h(App),
  mounted() {
    AOS.init()
  }
}).$mount("#app");
