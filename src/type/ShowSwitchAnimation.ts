import type { RouteLocationNormalized, NavigationGuardNext } from "vue-router"

export type ShowSwitchAnimation = {
    run?: (next: NavigationGuardNext, from: RouteLocationNormalized, to: RouteLocationNormalized) => void
}