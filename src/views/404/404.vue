<template>
  <div class="not-found">
        <el-result
            icon="warning"
            title="404提示"
            sub-title="你找的页面走丢了~"
        >
            <template #extra>
                <el-button type="primary" @click="$router.push('/login')">回到首页</el-button>
            </template>
        </el-result>
  </div>
</template>

<script setup>

</script>

<style scoped>
</style>