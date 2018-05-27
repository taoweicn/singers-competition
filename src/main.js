import Vue from 'vue';
import 'normalize.css';
import wxInit from '@/plugins/wx';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

(async () => {
  try {
    await wxInit();
  } catch (e) {
    console.log(e);
  }
})();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
