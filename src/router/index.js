import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/from',
  //   name: 'HelloWorld',
  //   props: (route) => ({ from: route.query.w }),
  //   component: HelloWorld
  // },
  {
    path: '/parameter',
    name: 'Parameter',
    props: (route) => ({ parameter: route.query }),
    component: () => import('../views/Parameter.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
