import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

// 引入axios并把axios添加到Vue上
import axios from 'axios'  
Vue.prototype.axios = axios;  

// 全局引入Scroller组件并设置Scroller组件
import Scroller from '@/components/Scroller'
Vue.component('Scroller', Scroller);

// 全局引入Loading组件并设置
import Loading from '@/components/Loading'
Vue.component('Loading', Loading);

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
