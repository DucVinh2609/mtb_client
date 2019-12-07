import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import moment from 'moment'

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY')
  }
});

Vue.filter('formatTime', function(value) {
  if (value) {
    const parts = value.split(":");

    return parts[0] + ":" + parts[1];
  } else {
    return "unknown"
  }
});

new Vue({// eslint-disable-line no-new
  el: '#app',
  router: router,
  render: h => h(App)
});
