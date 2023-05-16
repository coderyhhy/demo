<template>
  <div class="login-panel">
    <el-row>
      <el-col>
        <el-card shadow="always" class="box-card">
          <h2 class="login">欢迎登录</h2>
          <div class="text">左右软件后勤管理系统</div>
          <loginForm />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import loginForm from "./login-form.vue";
</script>

<style scoped>
.login {
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.text {
  font-size: 10px;
  color: #ddd;
  margin-bottom: 30px;
}

.box-card {
  width: 250px;
  height: 350px;
}
</style>
