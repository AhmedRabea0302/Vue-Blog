import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../components/Details.vue'
import Tags from '../views/Tags.vue'
import Create from '../views/Create.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/posts/:id',
        name: 'Details',
        component: Details,
        props: true
    },

    {
        path: '/create',
        name: 'Create',
        component: Create
    },

    {
        path: '/tags/:tag',
        name: 'Tag',
        component: Tags,
        props: true
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router