import Vue from 'vue'
import App from './App.vue'
import router from './router'
import apolloProvider  from './apollo_client'
import {DEBUG} from './settings'

Vue.config.productionTip = DEBUG

new Vue({
  router,
  apolloProvider ,
  render: h => h(App)
}).$mount('#app')
