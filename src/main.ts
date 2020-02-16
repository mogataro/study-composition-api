import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueCompositionApi from '@vue/composition-api'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/index.vue')
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
