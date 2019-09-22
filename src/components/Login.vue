<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 17:00:20
 * @LastEditTime: 2019-09-22 16:45:55
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
  <el-form ref="form" :model="form" label-width="80px" class="login-box" >
    <h3 class="login-title">Login Page</h3>
    <el-form-item label="Username" prop="username" :rules="[
    { required: true, message: '请输入用户名', trigger: 'blur' }
    ]">
      <el-input type="text" placeholder="请输入账号" v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password" :rules="[
    { required: true, message: '请输入密码', trigger: 'blur' }
    ]">
      <el-input placeholder="请输入密码" type="password"  v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="onSubmit('form')" type="primary" > Go </el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>

  export default {
    name:"Login",
    data() {
      return {
        form: {
          username: '',
          password: '',
        }
      }
    },
    methods: {
      onSubmit (formName) {

       this.$refs[formName].validate((valid) => {
          if (valid) {


            this.$axios({
              data: {
                username: this.form.username,
                password: this.form.password
              },
              method: "POST",
              url: "/api/login"
            }).then((req)=>{
              console.log(req)
              if (req.data.error) {
                this.$message({
                  message: '臭弟弟，这个输入是错误的！',
                  type: 'warning'
                })
              }else{
                this.saveStatus()
                this.$router.push({path:'happy'})
              }

            }).catch((req)=>{
              console.log(req)
            })

          } else {
            this.$message({
              message: '臭弟弟，没输入全！',
              type: 'warning'
        });
          }
        });
      },

      saveStatus () {
        sessionStorage.setItem("status" , this.form.username)
      }
    },

  }
</script>

<style scoped>

.login-box{
  margin: 180px auto;
  width: 500px;
  border: 1px solid #DCDFE6;
  padding: 50px 50px 50px 50px;
  border-radius: 7px;
  box-shadow: 0 0 25px #DCDFE6;
}

.login-title {
  text-align: center;
}

</style>
