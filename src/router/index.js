import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  // {
  //   path: "*",
  //   redirect: "/404"
  // }
  {
    path: '/UserCenter',
    name: '/UserCenter',
    component: () => import('../components/UserCenter/UserCenter.vue'),
    children: [
      { path: '/UserMessage', component: () => import('../components/UserCenter/UserMessage.vue') },
      { path: '/PurchasedCourses', component: () => import('../components/UserCenter/PurchasedCourses.vue') }
    ]
  },
  // {
  //   path: '/UserMessage',
  //   name: '/UserMessage',
  //   component: () => import('../components/UserCenter/UserMessage.vue')
  // },
  // {
  //   path: '/PurchasedCourses',
  //   name: '/PurchasedCourses',
  //   component: () => import('../components/UserCenter/PurchasedCourses.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
