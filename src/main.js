import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

// 引入axios，并添加到Vue上
import axios from 'axios'   
Vue.prototype.axios = axios;  

// 图片的url的过滤器
Vue.filter('setWH', (url, arg) => {
  return url.replace(/w\.h/, arg);
});



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
