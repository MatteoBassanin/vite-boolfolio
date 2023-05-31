import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import AppShow from './pages/AppShow.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';


const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome

            },
            {
                path: '/dettagli',
                name: 'show',
                component: AppShow

            },
            {
                path: '/progetti',
                name: 'projects',
                component: ProjectList

            },
            {
                path: '/progetti/:slug',
                name: 'single-project',
                component: SingleProject

            }

        ]
    }
);

export { router };