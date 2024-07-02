// src/router.js
import { createRouter, createWebHistory,RouteRecordRaw } from 'vue-router';
import Home from './views/home.vue'
import Product from './views/productList.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: Product }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
