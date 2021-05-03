import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Provider from './apollo_client'
import {DEBUG} from './settings'

Vue.config.productionTip = DEBUG

new Vue({
  router,
  Provider,
  render: h => h(App)
}).$mount('#app')
