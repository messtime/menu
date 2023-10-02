import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// window.apiPrefix = "http://127.0.0.1:8881/"  //本地
window.apiPrefix = "http://43.200.174.50:8881/"

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
