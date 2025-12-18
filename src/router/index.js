import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ErrorPage from "../views/Error.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/error",
    name: "Error",
    component: ErrorPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.name === "Error" || to.name === "NotFound") {
      return { top: 0 };
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 80,
      };
    }
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
