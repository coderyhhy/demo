<template>
  <div class="login-form">
    <el-form :rules="rules" ref="ruleRef" :model="ruleForm">
      <el-form-item prop="username">
        <el-input placeholder="登录名" v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="密码" v-model="ruleForm.password" />
      </el-form-item>
    </el-form>
    <div class="text">
      <el-checkbox label="自动登录" size="small" />
      <div class="password">忘记密码</div>
    </div>

    <el-button style="width: 210px; background-color: royalblue; color: white"
      @click='submitForm'>登录</el-button
    >
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from 'vue-router'
import { toast } from '../../utils/utils'


const router = useRouter()
const ruleForm = reactive({
  username: "",
  password: "",
});

const rules = {
  username: [
    {required: true, message: '请输入用户名', trigger: 'blur'}    
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" },
  ],
};

const ruleRef = ref(null)
const submitForm = () => {
  ruleRef.value.validate((valid)=>{
        if(!valid){
            return false
        }
        
        store.dispatch("login",form).then(res=>{
            toast("登录成功")
            router.push("/")
        })
    })

}
</script>

<style scoped>
.text {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.password {
  font-size: 12px;
  color: blue;
}
</style>
