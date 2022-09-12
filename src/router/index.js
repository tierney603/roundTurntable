import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/useStore',
    name: 'useStore',
    component: () => import( '../views/useStore.vue')
  },
  {
    path: '/ECharts',
    name: 'ECharts',
    component: () => import( '../views/ECharts/index.vue')
  },
  {
    path: '/ECharts2',
    name: 'ECharts2',
    component: () => import( '../views/ECharts2/index.vue')
  },{
    path: '/Turntable',
    name: 'Turntable',
    component: () => import( '../views/Turntable/index.vue')
  },
  {
    path: '/testTurn',
    name: 'testTurn',
    component: () => import( '../views/testTurn.vue')
  },
  {
    path: '/testProps',
    name: 'testProps',
    component: () => import( '../views/testProps/index.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
