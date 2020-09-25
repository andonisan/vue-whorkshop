import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import VillainsList from '@/views/VillainsList.vue'
import HeroesList from '@/views/HeroesList.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [

  {
    path: '/',
    name: 'villains',
    component: VillainsList
  },
  {
    path: '/heroes',
    name: 'heroes',
    component: HeroesList
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import(/* webpackChunkName: "orders" */ '@/views/OrdersList.vue')
  },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  routes
})

export default router
