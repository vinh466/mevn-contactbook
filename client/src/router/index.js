import ContactBook from '@/views/ContactBook.vue';
import { auth } from "@/views/layouts";
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    {
        path: "/contacts/create",
        name: "contact.create",
        component: () => /* webpackChunkName: "contact.create" */ import("@/views/ContactCreate.vue")
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => /* webpackChunkName: "/contacts/:id" */ import("@/views/ContactEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
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
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
]

const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes })

export default router;
