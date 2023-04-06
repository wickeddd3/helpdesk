import * as vR from 'vue-router';
import DashboardPage from '@pages/Dashboard.vue';
import NotFoundPage from '@pages/NotFound.vue';

// Create a router and then export it
const _routes:Array<vR.RouteRecordRaw> = [
  {
    path: '/',
    component: DashboardPage,
    name: 'home'
  },
  {
    path: '/tickets',
    component: () => import("@/pages/Tickets/index.vue"),
    name: 'home.tickets',
  },
  {
    path: '/tickets/:id',
    component: () => import("@/pages/Tickets/Ticket.vue"),
    name: 'home.tickets.ticket',
  },
  {
    path: '/tickets/incident/submit',
    component: () => import("@/pages/Tickets/SubmitIncident.vue"),
    name: 'home.tickets.incident.submit',
  },
  {
    path: '/tickets/request/submit',
    component: () => import("@/pages/Tickets/SubmitRequest.vue"),
    name: 'home.tickets.request.submit',
  },
  {
    path: '/profile',
    component: () => import("@/pages/Profile.vue"),
    name: 'home.profile',
  },
  {
    path: '/login',
    component: () => import("@pages/Auth.vue"), // Lazy loading to defer loading only when required
    name: 'home.auth', // user defined. Keep dot notation to have elegant design
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
    name: 'home.missing',
  },
];

const router = vR.createRouter({
  history: vR.createWebHistory(), // WebHash  history will add hash before every route
  routes: _routes, // Send the routes here.
});

export default router;
