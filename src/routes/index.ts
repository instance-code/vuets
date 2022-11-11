import { createRouter, createWebHistory } from "vue-router";
import type RouterContextType from "@/types/RouterContextType";
import routes from "@/routes/routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to) =>
    to.hash
      ? { el: to.hash, behavior: "smooth" }
      : { top: 0, left: 0, behavior: "smooth" },
});

const nextFactory = (
  context: RouterContextType,
  middleware: Array<any>,
  index: number
) => {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) {
    return context.next;
  }

  return (parameters: any) => {
    // Run the default Vue Router `next()` callback first.
    context.next(parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({
      ...context,
      next: nextMiddleware,
    });
  };
};

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title ?? ""}`;

  if (typeof to.meta.middleware === "undefined") next();

  const middleware = Array.isArray(to.meta.middleware)
    ? to.meta.middleware
    : [to.meta.middleware];
  const context = {
    from,
    to,
    next,
  };
  return middleware[0]({
    ...context,
    next: nextFactory(context, middleware, 1),
  });
});

export { router, routes };
