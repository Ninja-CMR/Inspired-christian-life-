import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AcademyView from '../views/AcademyView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/academy',
            name: 'academy',
            component: AcademyView
        },
        {
            path: '/academy/personality',
            name: 'academy-personality',
            component: AcademyView
        },
        {
            path: '/academy/inner-dialogue',
            name: 'academy-inner-dialogue',
            component: AcademyView
        },
        {
            path: '/academy/future-spouses',
            name: 'academy-future-spouses',
            component: AcademyView
        },
        {
            path: '/resources',
            name: 'resources',
            component: () => import('../views/ResourcesView.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/ContactView.vue')
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import('../views/BlogView.vue')
        }
    ],
    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;
