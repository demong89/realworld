import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _08a0625e = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _e6b6f374 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _08248ae2 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _6a542ae2 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _19b6a0ee = () => interopDefault(import('../pages/setting' /* webpackChunkName: "" */))
const _203e15d8 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _511e6e2f = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _08a0625e,
    children: [{
      path: "",
      component: _e6b6f374,
      name: "home"
    }, {
      path: "/login",
      component: _08248ae2,
      name: "login"
    }, {
      path: "/register",
      component: _08248ae2,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _6a542ae2,
      name: "profile"
    }, {
      path: "/setting",
      component: _19b6a0ee,
      name: "setting"
    }, {
      path: "/editor",
      component: _203e15d8,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _511e6e2f,
      name: "articleDetail"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
