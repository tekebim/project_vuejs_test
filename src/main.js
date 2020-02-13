import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Import Bootstrap
import { BootstrapVue } from 'bootstrap-vue'
import '@/assets/styles/bootstrap/custom.scss'

Vue.config.productionTip = false

// Use BootstrapVue library
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
