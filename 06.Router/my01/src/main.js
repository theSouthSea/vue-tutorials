import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './route-config.js'
Vue.use(VueRouter);
const router = new VueRouter();
router.map(routerConfig);
let App = Vue.extend(require('./App.vue'));
router.start(App, '#app');