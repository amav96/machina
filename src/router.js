import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    component: () => import('./views/Dashboard.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});


export default router;
