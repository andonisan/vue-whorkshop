import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import VillainsList from '@/views/VillainsList.vue'
import HeroesList from '@/views/HeroesList.vue'
import NotFound from '@/views/NotFound.vue'
import Purchased from '@/views/Purchased.vue'
import Products from '@/views/Products.vue'

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
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/purchased',
    name: 'purchased',
    component: Purchased
  },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  routes
})

export default router
