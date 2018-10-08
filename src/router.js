import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Help from "./components/Help.vue";
import store from "@/store";

Vue.use(Router);

const beforeTestEnter = (to, from, next) => {
  store.dispatch("connectSocket");
  next();
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter: beforeTestEnter
    },
    {
      path: "/help",
      name: "help",
      component: Help
    }
  ]
});
