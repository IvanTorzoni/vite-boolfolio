import { createRouter, createWebHistory } from "vue-router";
import ProjectPage from "./pages/ProjectPage.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "projects",
            component: ProjectPage,
        },
    ],
});

export { router };