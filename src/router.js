import { createRouter, createWebHistory } from "vue-router"
import Home from "./components/front/Home.vue";
import Identification from "./components/front/Identification.vue";
import Creer from "./components/front/Creer.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "home", component: Home },
        { path: "/identification", name: "identification", component: Identification },
        { path: "/creer", name: "creer", component: Creer }

    ]
})