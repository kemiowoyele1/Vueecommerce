import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import productDesc from '../views/productDesc.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Users from '../views/Users.vue'
import Comments from '../views/Comments.vue'
import Levels from '../views/Levels.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/products',
        name: 'ProductDetails',
      
       },

       {
        path: '/levels',
        name: 'Levels',
        component: Levels,
      
       },

       {
        path: '/users',
        component: Users,
      
       },

       {
        path: '/comments',
        component: Comments,
      
       },


    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/productDesc',
        name: 'productDesc',
        component: productDesc
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router