'use strict';

import '../css/app.scss';
import 'bootstrap';

import Vue from 'vue';
import router from "./router";
import App from './App';

setTimeout(() => {
    new Vue({
        el: '#app',
        router,
        components: {App},
        template: '<App/>'
    });
}, 1000);
