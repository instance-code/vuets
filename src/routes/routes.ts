import { RouteRecordRaw } from "vue-router";
import authenticate from "@/middleware/authenticate";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/home.vue"),
    meta: {
      title: "welcome",
      middleware: [authenticate],
    },
  },
  {
    path: "/test",
    component: () => import("@/pages/test.vue"),
    meta: {
      title: "test",
    },
  },
  {
    path: "/404",
    component: () => import("@/pages/errors/e404.vue"),
    meta: {
      title: "404",
    },
  },
  // { path: "/:pathMatch(.*)*", redirect: "/404" },
];

export default routes;
