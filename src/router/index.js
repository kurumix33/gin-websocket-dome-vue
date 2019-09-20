/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 15:54:23
 * @LastEditTime: 2019-09-20 20:27:39
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestOne from '@/components/TestOne'
import Login　from "@/components/Login"
import NotFound from "@/components/error/NotFound"
import Happy from '@/components/Happy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //组件名
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/happy',
      name: 'Happy',
      component: Happy,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/fuck',
      name: 'TestOne',
      component: TestOne
    },
    {
      path: '/login',
      name: "Login",
      component: Login
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    }
  ]
})
