import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _16daaed4 = () => interopDefault(import('..\\pages\\instructions.vue' /* webpackChunkName: "pages_instructions" */))
const _528be3e7 = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages_users" */))
const _0d2209b1 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/instructions",
      component: _16daaed4,
      name: "instructions"
    }, {
      path: "/users",
      component: _528be3e7,
      name: "users"
    }, {
      path: "/",
      component: _0d2209b1,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
