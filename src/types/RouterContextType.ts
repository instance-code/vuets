import type { RouteLocationNormalized, NavigationGuardNext } from "vue-router";
export default interface RouterContextType {
  from: RouteLocationNormalized;
  to: RouteLocationNormalized;
  next: NavigationGuardNext;
}
