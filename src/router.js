import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProjectPage from "./pages/ProjectPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import DetailPage from "./pages/DetailPage.vue";
import ErrorPage404 from "./pages/ErrorPage404.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectPage,
        },
        {
            path: "/about",
            name: "about",
            component: AboutPage,
        },
        {
            path: "/projects/:slug",
            name: "single-project",
            component: DetailPage,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: ErrorPage404,
        },
    ],
});

export { router };