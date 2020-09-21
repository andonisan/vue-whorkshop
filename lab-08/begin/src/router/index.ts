import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import NotFound from '@/views/NotFound.vue'
import Purchased from '@/views/Purchased.vue'
import Products from '@/views/Products.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [

  {
    path: '/',
    name: 'default',
    redirect: '/products'
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
