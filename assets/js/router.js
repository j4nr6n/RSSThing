'use strict';

import Vue from 'vue';
import Router from 'vue-router';

// Page Content
import Home from './pages/Home';

// Fallback page
import PageNotFound from './pages/errors/PageNotFound';

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '**',
            name: 'PageNotFound',
            component: PageNotFound
        }
    ]
})
