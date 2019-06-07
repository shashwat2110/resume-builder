import firebase from 'firebase';
import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home';
import Login from '@/views/Login';
import Test from '@/views/Test';
import Data from '@/views/Data';
import Order from '@/views/Order';
import Experience from '@/views/Experience';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/orderfields',
      name: 'Order',
      component: Order,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/filldata',
      name: 'Data',
      component: Data,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('orderfields');
  else next();
});

export default router;
