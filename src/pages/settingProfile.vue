<template>
  <div class="settingProfile">
    <el-page-header @back="goBack"> </el-page-header>
    <!-- <div class="back">
      <font-awesome-icon class="icon-star" :icon="['fas', 'chevron-left']" />
      <p>back</p>
    </div> -->
    <el-container style="width: 100%; height: 100vh; border: 1px solid #eee">
      <!-- <el-aside style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '5']">
          <el-menu-item-group>
            <el-menu-item index="1" route="">Profile setting</el-menu-item>
            <el-menu-item index="2">Children</el-menu-item>
            <el-menu-item index="3">Notification</el-menu-item>
            <el-menu-item index="4">Change password</el-menu-item>
            <el-menu-item index="5">Term and Privacy policy</el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </el-aside> -->
      <el-aside style="width: 100%">
        <el-tabs :tab-position="tabPosition" style="height: 200px">
          <el-tab-pane label="User">User</el-tab-pane>
          <el-tab-pane label="Config">Config</el-tab-pane>
          <el-tab-pane label="Role">Role</el-tab-pane>
          <el-tab-pane label="Task">Task</el-tab-pane>
        </el-tabs>
      </el-aside>

      <el-main style="width: 70%">
        <setting-user />
        <setting-children />
      </el-main>
    </el-container>
  </div>
</template>

<script>
// import SettingChildren from "../profiles/settingChildren.vue";
// import settingUser from "../profiles/settingUser.vue";
export default {
  data() {
    return {
      tabPosition:'left'
    };
  },
  // components: { settingUser },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";
.el-container{
  padding: 0px 220px;
}
.el-aside {
  color: #333;
}
/deep/.el-tabs__content{
  width: 70%;
}
/deep/.el-tabs__header{
  width: 30%;
}

// .back {
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   width: 70px;
//   height: 70px;
//   background-color: white;
// }
</style>