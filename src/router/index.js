import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import test11 from "../views/test11.vue";
import test22 from "../views/test22.vue";
import menu from "../views/menu.vue";
import menu2 from "../views/menu2.vue";
import store from "../views/store.vue";
import RequestBtn from "../views/RequestBtn.vue";
import BookStore from "../views/BookStore.vue";
import Alfred from "../views/Alfred.vue";
import Flavor from "../views/Flavor.vue";
import CookBook from "../views/CookBook.vue";
import CreditCardView from "../views/CreditCardView.vue";
// import CreditCardViewcopy from "../views/CreditCardViewcopy.vue";
import NoteBook from "../views/NoteBook.vue";
import slswitch from "../views/slswitch.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/NoteBook",
    name: "NoteBook",
    component: NoteBook,
  },
  {
    path: "/slswitch",
    name: "slswitch",
    component: slswitch,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/creditCard",
    name: "creditCard",
    component: CreditCardView,
  },

  {
    path: "/CookBook",
    name: "CookBook",
    component: CookBook,
  },
  {
    path: "/Flavor",
    name: "Flavor",
    component: Flavor,
  },
  {
    path: "/Alfred",
    name: "Alfred",
    component: Alfred,
  },
  {
    path: "/BookStore",
    name: "BookStore",
    component: BookStore,
  },
  {
    path: "/RequestBtn",
    name: "RequestBtn",
    component: RequestBtn,
  },
  {
    path: "/test11",
    name: "test11",
    component: test11,
  },
  {
    path: "/test22",
    name: "test22",
    component: test22,
  },
  {
    path: "/menu",
    name: "menu",
    component: menu,
  },
  {
    path: "/store",
    name: "store",
    component: store,
  },
  {
    path: "/menu2",
    name: "menu2",
    component: menu2,
  },
  {
    path: "/",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/about",
    name: "about1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
