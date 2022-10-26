import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'APP',
        component: () =>import('../views/Home.vue')
    },
    {
        path: '/crud',
        name: 'CRUD',
        component: () =>import('../views/Crud.vue')
    },
    {
        path: '/chart',
        name: 'CHART',
        component: () =>import('../views/Chart.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
