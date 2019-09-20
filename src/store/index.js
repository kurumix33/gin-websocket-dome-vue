/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 21:12:00
 * @LastEditTime: 2019-09-20 21:12:00
 * @LastEditors: your name
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from '../store/session/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  }
})
