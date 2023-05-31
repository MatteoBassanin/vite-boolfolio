import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import AppShow from './pages/AppHome.vue';
import ProjectList from './pages/AppHome.vue';


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

            }
        ]
    }
);

export { router };