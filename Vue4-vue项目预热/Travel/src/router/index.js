import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component:  () => import( '@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component:  () => import( '@/pages/city/City')
    }
  ]
})
