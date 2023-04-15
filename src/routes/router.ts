import * as vR from 'vue-router';
import HomePage from '@/pages/Home.vue';
import NotFoundPage from '@pages/NotFound.vue';

// Create a router and then export it
const _routes:Array<vR.RouteRecordRaw> = [
  {
    path: '/',
    component: HomePage,
    name: 'home',
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/tickets',
    component: () => import("@/pages/Tickets/index.vue"),
    name: 'home.tickets',
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/tickets/:id',
    component: () => import("@/pages/Tickets/Ticket.vue"),
    name: 'home.tickets.ticket',
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/tickets/incident/submit',
    component: () => import("@/pages/Tickets/SubmitIncident.vue"),
    name: 'home.tickets.incident.submit',
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/tickets/request/submit',
    component: () => import("@/pages/Tickets/SubmitRequest.vue"),
    name: 'home.tickets.request.submit',
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/profile',
    component: () => import("@/pages/Profile.vue"),
    name: 'home.profile',
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/login',
    component: () => import("@pages/Auth.vue"), // Lazy loading to defer loading only when required
    name: 'auth', // user defined. Keep dot notation to have elegant design
    meta: {
      guestOnly: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
    name: 'home.missing',
    meta: {
      authOnly: true,
    },
  },
];

const router = vR.createRouter({
  history: vR.createWebHistory(), // WebHash  history will add hash before every route
  routes: _routes, // Send the routes here.
});

router.beforeEach((to, from, next) => {
  const auth = localStorage.getItem('helpdesk.auth');
  if (to.meta.authOnly && !auth) next({ name: 'auth' })
  else if (to.meta.guestOnly && auth) next({ name: 'home' })
  else next();
});

export default router;
