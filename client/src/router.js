import Vue from "vue";

// Views
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/portfolio",
      component: () => import("./views/Portfolio.vue")
    },
    {
      path: "/project/:urlPath",
      component: () => import("./views/Project.vue"),
      props: true
    }
  ]
});
