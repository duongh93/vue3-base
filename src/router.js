import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("./components/AddTutorial.vue")
  },
  {
    path: "/login",
    alias: "/login",
    name: "login",
    component: () => import("./components/login.vue")
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("./components/Tutorial.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddTutorial.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;