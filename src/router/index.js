import Vue from 'vue';
import Router from 'vue-router';

import Project from '@/components/Project';
import AuthCallback from '@/components/AuthCallback';
import SignOutCallback from '@/components/SignOutCallback';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Project,
    },
    {
      path: '/oauth/github/callback',
      component: AuthCallback,
    },
    {
      path: '/signout',
      name: 'signout',
      component: SignOutCallback,
    },
  ],
});
