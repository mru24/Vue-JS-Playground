import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Routes from './routes'

Vue.config.productionTip = false
Vue.use(Router)

const router = new Router({
  routes: Routes
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
