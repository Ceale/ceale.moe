import type { RouteLocationNormalized, NavigationGuardNext } from "vue-router"

export type ShowSwitchAnimation = {
    run?: (from: RouteLocationNormalized, to: RouteLocationNormalized, next: NavigationGuardNext) => void
}