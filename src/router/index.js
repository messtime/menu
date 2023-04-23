import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import test11 from '../views/test11.vue'
import test22 from '../views/test22.vue'
import menu from '../views/menu.vue'
import menu2 from '../views/menu2.vue'
import store from '../views/store.vue'
import ButtonView from '../views/ButtonView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ButtonView',
    name: 'ButtonView',
    component: ButtonView
  },
//   {
//     path: '/test11',
//     name: 'test11',
//     component: test11
//   },
  {
    path: '/test22',
    name: 'test22',
    component: test22
  },
  {
    path: '/menu',
    name: 'menu',
    component: menu
  },
  {
    path: '/store',
    name: 'store',
    component: store
  },
  {
    path: '/menu2',
    name: 'menu2',
    component: menu2
  },
  
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
