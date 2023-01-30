import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/workplace',
    },
    {
      path: '/workplace',
      component: () => import('~/pages/WorkPlace/Workplace.vue'),
    },
  ],
})
