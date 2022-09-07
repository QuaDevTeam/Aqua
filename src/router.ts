import { createRouter, createWebHashHistory } from "vue-router"

const routes = [{
    path: "/",
    name: "Index",
    component: () => import(/* webpackChunkName: "about" */ './views/Index.vue')
}]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})