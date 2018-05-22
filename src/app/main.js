import '../assets/styles/main.scss';

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'

Vue.use(VueRouter);


const router =  new VueRouter({
 routes: Routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
});