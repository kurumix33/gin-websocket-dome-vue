<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 20:18:34
 * @LastEditTime: 2019-09-20 21:45:44
 * @LastEditors: Please set LastEditors
 -->
<template>

  <div>
    在这里大家可以一起嗨皮，嗨皮的其中一个人就是你，{{name}}
  </div>

</template>

<script>



export default {

  mounted(){
    console.log("准备完成")
    let hahaha = new WebSocket("ws://localhost/ws");
  },

  name: "Happy" ,

  data () {
    return {
      name: sessionStorage.getItem("status")
    }
  }
}
</script>

<style>

</style>
