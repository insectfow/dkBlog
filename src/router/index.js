import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Mobile from "../views/Mobile.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/mobile",
      name: "mobile",
      component: Mobile
    }
  ]
});
