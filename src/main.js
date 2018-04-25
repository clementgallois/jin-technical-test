// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import vSelect from 'vue-select';
import App from './App';
import store from './store';
import router from './router';

Vue.config.productionTip = false;
Vue.use(require('vue-moment'));

Vue.component('v-select', vSelect);
/* eslint-disable no-new */
new Vue({
  store, // inject store to all children
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
