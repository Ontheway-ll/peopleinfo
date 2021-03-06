import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' // 引入UI
import 'element-ui/lib/theme-chalk/index.css'// 引入样式
import '@/styles/index.less'
import axios from 'axios'
import '@/permission'// 引入权限模块
Vue.config.productionTip = false
Vue.use(ElementUI)
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 基地址
Vue.prototype.$axios = axios // 将axios赋值给 Vue对象的原型属性

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
