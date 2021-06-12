<template>
  <el-container>
    <el-header style="height: 160px;">
      <header-app />
    </el-header>
    <el-main>
      <content-app />
    </el-main>
  </el-container>
</template>
<script>
import ContentApp from "../components/contentApp.vue";
import HeaderApp from "../components/HeaderApp.vue";
export default {
  components: { HeaderApp, ContentApp },
};
</script>
<style scoped lang="scss">
</style>