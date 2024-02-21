import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TherapyView from '@/views/TherapyView.vue'
import ContactView from '@/views/ContactView.vue'
import DoctorsView from '@/views/DoctorsView.vue'
import ReviewsView from '@/views/ReviewsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import AddReview from '@/views/AddReview.vue'


const routes = [
      {
        path: '/',
        name: 'home',
        component: HomeView,
      },  
      {
        path: '/therapy',
        name: 'therapy',
        component: TherapyView,
      }, 
      {
        path: '/contact',
        name: 'contact',
        component: ContactView,
      },
      {
        path: '/doctors',
        name: 'doctors',
        component: DoctorsView,
      },
      {
        path: '/reviews',
        name: 'reviews',
        component: ReviewsView,
      },
      // {
      //   path: '/signup',
      //   name: 'signup',
      //   // which is lazy-loaded when the route is visited.        
      //   component: () => import('../views/SignupView.vue')
      // },
      // {
      //   path: '/lk',
      //   redirect: '/signup' 
      // },
      {
        path: '/lk/:userID?',
        name: 'lk',
        // which is lazy-loaded when the route is visited.        
       
        component: () => import('../views/SignupView.vue') 
        // component: () => import('../views/PersonalAccount.vue')  
      },
      {
        path: '/register',
        name: 'register',
        // which is lazy-loaded when the route is visited.        
        component: () => import('../views/RegisterView.vue')
      },
      // {
      //   path: '/LK',
      //   name: 'LK',
      //   // which is lazy-loaded when the route is visited.        
      //   component: () => import('../views/PersonalAccount.vue')
      // },
      // {
      //   path: '/addReview',
      //   name: 'addReview',               
      //   component: () => import('../views/AddReview.vue')
      // },
      {
        path: '/addReview',
        name: 'addReview',               
        component: () => import('../views/AddReview.vue')
      },
      {
        path: '/:CatchAll(.*)',
        name: '404',
        component: NotFoundView,
      }, 
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
