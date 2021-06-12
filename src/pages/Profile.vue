<template>
  <el-container>
    <el-header>
      <header-app />
    </el-header>
    <el-main>
      <item-user-information />
      <content-profile />
    </el-main>
  </el-container>
</template>
<script>
import ContentProfile from "../components/contentProfile.vue";
import HeaderApp from "../components/HeaderApp.vue";
import ItemUserInformation from "../profiles/itemUserInformation.vue";
export default {
  components: {
    HeaderApp,
    ItemUserInformation,
    ContentProfile,
  },
};
</script>
<style scoped lang="scss">
@import "../assets/scss/variables.scss";
.el-main {
  margin: 0px 220px;
}
</style>