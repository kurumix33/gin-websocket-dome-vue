<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 15:54:23
 * @LastEditTime: 2019-09-20 21:28:07
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    window.addEventListener('unload' , this.saveStatus)
  },
  methods: {
    saveStatus ()　{
      sessionStorage.setItem('status' , JSON.stringify(this.$store.status))
    }
  }
}
</script>

