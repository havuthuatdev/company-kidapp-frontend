<template>
  <el-container>
    <el-header>
      <header-app />
    </el-header>
    <el-main>
      <div class="user">
        <item-user-information />
      </div>
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
.el-container {
  margin: 0px 220px;
  .el-header {
  }
  .el-main {
    .user {
      margin: 48px 0px;
    }
  }
}
</style>