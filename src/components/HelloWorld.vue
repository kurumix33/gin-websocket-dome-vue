<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 15:54:23
 * @LastEditTime: 2019-09-20 17:49:11
 * @LastEditors: Please set LastEditors
 -->
<template>

  <div class="hello">
    <img src="../assets/logo.png">
    <h1> 这是一个首页 </h1>
    <h3>
      <router-link to="/login">登陆页往这里 </router-link>
    </h3>
	<h3>
		<router-link to="/register">你是新来的？来这里，有好康的 </router-link>
	</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
