import Vue from 'vue'
import App from './App.vue'
import Vuerouter from 'vue-router'
import Meta from 'vue-meta'

import Home from './components/Home'
import Mark from './components/Mark'
import Cedar from './components/Cedar'
import Randy from './components/Randy'



Vue.use(Vuerouter)
Vue.use(Meta)


const routes = [
  {path: '/', component: Home},
  {path: '/mark', component: Mark},
  {path: '/cedar', component: Cedar},
  {path: '/randy', component: Randy}
]

const router = new Vuerouter({
  mode:'history',
  routes
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
