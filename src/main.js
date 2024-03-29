/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 15:54:23
 * @LastEditTime: 2019-09-22 16:04:24
 * @LastEditors: Please set LastEditors
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

router.beforeEach((to , from , next) => {

  if(to.name == 'Happy' && to.meta.needLogin ){
    if(!sessionStorage.getItem("status")){
      next({ name: "Login" })
    }
  }

  next()

})

Vue.use(Router)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(ElementUI)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
