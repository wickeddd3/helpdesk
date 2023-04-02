import * as vR from 'vue-router';
import DashboardPage from '@pages/Dashboard.vue';
import NotFoundPage from '@pages/NotFound.vue';

// Create a router and then export it
const _routes:Array<vR.RouteRecordRaw> = [
  // Path & Component are mandatory.
  {
    path: '/',
    component: DashboardPage,
    name: 'home'
  },
  {
    path: '/tickets',
    component: () => import("@/pages/Tickets.vue"), // Lazy loading to defer loading only when required
    name: 'home.tickets', // user defined. Keep dot notation to have elegant design
  },
  {
    path: '/login',
    component: () => import("@pages/Auth.vue"), // Lazy loading to defer loading only when required
    name: 'home.auth', // user defined. Keep dot notation to have elegant design
  },
  {
    path: '/:catchAll(.*)', // Need to change with regex to catch all non-defined
    component: NotFoundPage,
    name: 'home.missing',
  },
];

const router = vR.createRouter({
  history: vR.createWebHistory(), // WebHash  history will add hash before every route
  routes: _routes, // Send the routes here.
});

export default router;
