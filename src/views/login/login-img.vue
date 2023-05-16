<template>
  <div class="login-img">
    <div class="block text-center">
      <el-carousel arrow="never">
        <el-carousel-item v-for="item in 4" :key="item" class="item">
          <img src="../../assets/img/OIP-C.jpg" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const img = ref;
</script>

<style scoped>
.login-img {
  display: flex;
  justify-content: center;
}


:deep(.block) {
  position: absolute;
  top: 100px;
  width: 900px;
}

img {
  width: 100%;
}

:deep(.el-carousel__button) {
  border-radius: 50%;
  width: 5px;
  height: 5px;
}
</style>
