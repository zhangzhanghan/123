import { createRouter, createWebHistory } from "vue-router"
import Home from "../components/Home.vue"
import About from "../components/About.vue"
import HelloWorld from "../components/HelloWorld.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/HelloWorld",
    name: "HelloWorld",
    component: HelloWorld,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
