import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Help from "./components/Help.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/help",
      name: "help",
      component: Help
    }
  ]
});
