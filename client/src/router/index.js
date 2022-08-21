import { auth } from "@/views/layouts";
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/signin',
        name: 'signin',
        meta: { layout: auth },
        component: () => /* webpackChunkName: "signin" */ import('../views/signIn.vue')
    },
    {
        path: '/signup',
        name: 'signup',
        meta: { layout: auth },
        component: () => /* webpackChunkName: "signup" */ import('../views/signUp.vue')
    }
]

const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes })

export default router;
