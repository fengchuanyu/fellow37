import Vue from 'vue'
import VueRouter from 'vue-router'
import TvPlay from '../views/tvplay/TvPlay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TvPlay',
    component: TvPlay
  },
  {
    path: '/tvdetail/:id',
    name: 'TvDetail',
    component: () => import('../views/tvplay/TvPlayDetail.vue')
  },
  {
    path: '/music',
    name: 'Mucsic',
    component: () => import('../views/music/Music.vue')
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import('../views/book/Book.vue')
  },
  {
    path: '/talk',
    name: 'Talk',
    component: () => import('../views/talk/Talk.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
