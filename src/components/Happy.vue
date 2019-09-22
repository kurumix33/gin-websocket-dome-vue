<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 20:18:34
 * @LastEditTime: 2019-09-20 21:45:44
 * @LastEditors: Please set LastEditors
 -->
<template>

  <div id="speak" >

  <el-alert
    title="公告"
    type="info"
    description="这个聊天室处于测试阶段"
    show-icon>
  </el-alert>

    <div v-for="message in allMessage">
      <el-divider content-position="left">{{ message.username }}</el-divider>
      <span> {{ message.message }} </span>

      <el-divider content-position="right">{{ new Date() }}</el-divider>
    </div>


  <div class="input-box">
    <el-input
      type="text"
      autosize
      placeholder="请输入内容"
      v-model="inputText"
        @keyup.enter.native="gotoSend"
       icon="search" >
    </el-input>
  </div>



  </div>

</template>

<script>

export default {

  mounted(){
    if(!sessionStorage.getItem("status")){
      this.$message({
        message: "嘿嘿嘿",
        type:"warning"
      })
      this.$router.push({ name: "Login" })
      return
    }

    this.hahaha = new WebSocket("ws://localhost/ws");


    this.hahaha.onopen =  ()=>{
     this.$notify({
               title: 'Hello World',
               message: '在这里大家可以一起嗨皮，嗨皮的其中一个人就是你，' + this.name,
               type: 'success'
     })
    }

    this.hahaha.onerror = () => {
      this.$notify({
                title: 'Connect Error',
                message: '很抱歉，'+ this.name + '，或许是您的网络出了异常，又或许是服务器出现了异常。',
                type: 'error'
      })
    }

    this.hahaha.onmessage = (event) => {
       this.allMessage.push(JSON.parse(event.data))
    }


  },

  name: "Happy" ,

  data () {
    return {
      hahaha : null ,
      name: sessionStorage.getItem("status"),
      inputText: '',
      allMessage : [],
    }
  },

  methods: {
    gotoSend(event) {
      let keyCode = window.event ? event.keyCode : event.which;
        if(keyCode == 13 && this.inputText){
          this.hahaha.send(this.inputText)
          this.inputText = ""
        }
    }
  }
}
</script>

<style scoped>

  .input-box {
    position: fixed;
    width: 500px;
    bottom: 100px;
    box-shadow: 3px 3px 10px #DCDFE6;
  }

</style>
