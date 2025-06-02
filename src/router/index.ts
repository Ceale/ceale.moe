import { createRouter, createWebHistory } from "vue-router"
import { inject } from "vue"
import type { ShowSwitchAnimation } from "@/type/ShowSwitchAnimation"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("@p/index.vue")
        },
        {
            path: '/about',
            name: 'about',
            component: () => import("@p/about.vue")
        },
        {
            path: "/blog",
            component: () => import("@p/TodoPage.vue")
        },
        {
            path: "/fl",
            component: () => import("@p/TodoPage.vue")
        },
        {
            path: "/tool",
            component: () => import("@p/TodoPage.vue")
        },
        {
            path: "/tool/ssp",
            component: () => import("@p/tool/ssp.vue")
        },
        {
            path: "/:pathMatch(.*)*",
            component: () => import("@p/NotFound.vue")
        }
    ]
})

router.beforeEach((from, to, next) => inject<ShowSwitchAnimation>("ShowSwitchAnimation")!.run!(next, from, to))

export default router
