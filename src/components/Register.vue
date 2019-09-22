<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-22 16:47:38
 * @LastEditTime: 2019-09-22 16:55:18
 * @LastEditors: Please set LastEditors
 -->
<template>
 <div>
  <el-form ref="form" :model="form" label-width="80px" class="register-box" >
    <h3 class="register-title">Login Page</h3>


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


    <el-form-item label="Password" prop="password" :rules="[
    { required: true, message: '请输入重复密码', trigger: 'blur' }
    ]">
      <el-input placeholder="请再入密码" type="password"  v-model="form.repassword"></el-input>
    </el-form-item>


    <el-form-item>
      <el-button @click="onSubmit('form')" type="primary" > Go </el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
      return {
        form: {
          username: '',
          password: '',
          repassword: ''
        }
      }
    },
    methods: {
      onSubmit(formName){
        this.$refs[formName].validate( valied => {

          if(valied){
            if( this.form.password == this.form.repassword ){
              this.$message({
                  message: 'OK,提交中',
                  type: 'success'
              });
            }else{
              this.$message({
                message:"亲爱的臭弟弟，两次密码不一致",
                type: 'warning'
              })
            }

          }else{
              this.$message({
              message: '臭弟弟，没输入全！',
              type: 'warning'
            });
          }

        })
      }
    }
}
</script>

<style scoped>


.register-box{
  margin: 180px auto;
  width: 500px;
  border: 1px solid #DCDFE6;
  padding: 50px 50px 50px 50px;
  border-radius: 7px;
  box-shadow: 0 0 25px #DCDFE6;
}

.register-title {
  text-align: center;
}

</style>
