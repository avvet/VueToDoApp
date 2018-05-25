import '../assets/styles/main.scss';

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'
// import Paginate from 'vuejs-paginate'

// Vue.component('paginate', Paginate);

Vue.use(VueRouter);
// Vue.use(Paginate);


const router =  new VueRouter({
 routes: Routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
});