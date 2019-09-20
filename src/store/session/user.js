/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 21:01:30
 * @LastEditTime: 2019-09-20 21:11:22
 * @LastEditors: Please set LastEditors
 */
const user = {

  status: sessionStorage.getItem("status") ? sessionStorage.getItem("status") : {
    user: {
      username: ""
    }
  },


  getters: {
    getUser (status) {
      return status.user
    }
  },

  mutations: {
    updateUser (status , user) {
      status.user = user
    }
  },

  actions: {
    asyncUpdateUser (context , user) {
      context.commit('updateUser' , user)
    }
  }

}

export default user
