import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default : () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
      video : () => import(/* webpackChunkName: "video" */ '../views/Video.vue'),
      inscription : () => import(/* webpackChunkName: "inscription" */ '../views/Inscription.vue'),
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import(/* webpackChunkName: "about" */ '../views/Services.vue'),
    video : () => import(/* webpackChunkName: "video" */ '../views/Video.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
