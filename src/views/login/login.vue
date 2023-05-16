<template>
  <div class="login">
    <login-img />
    <div class="panel">
      <login-panel />
    </div>
    
    <div class="bottom">
      <div class="text">
        <login-bottom />
      </div>
    </div>
  </div>
</template>

<script setup>
import loginBottom from './login-bottom.vue'
import loginPanel from './login-panel.vue';
import loginImg from './login-img.vue'
</script>

<style scoped>
.login {
  overflow: hidden;
}
.panel {
  position: relative;
  top: 60px;
  left: 880px;
}

.bottom {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  position: absolute;
  bottom: 0;
  overflow-y: hidden;
}

</style>