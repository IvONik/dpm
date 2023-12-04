import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TherapyView from '@/views/TherapyView.vue'
import BracketView from '@/views/BracketView.vue'
import CleanView from '@/views/CleanView.vue'
import ContactView from '@/views/ContactView.vue'
import DoctorsView from '@/views/DoctorsView.vue'
import ReviewsView from '@/views/ReviewsView.vue'
import ProstheticsView from '@/views/ProstheticsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'


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
        path: '/prosthetics',
        name: 'prosthetics',
        component: ProstheticsView,
      },
      {
        path: '/bracket',
        name: 'bracket',
        component: BracketView,
      },
      {
        path: '/clean',
        name: 'clean',
        component: CleanView,
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
      {
        path: '/signup',
        name: 'signup',
        // which is lazy-loaded when the route is visited.        
        component: () => import('../views/SignupView.vue')
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
