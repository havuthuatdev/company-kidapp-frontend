<template>
  <div class="settingProfile">
    <div class="back">
      <font-awesome-icon class="icon-star" :icon="['fas', 'chevron-left']" />
      <p>back</p>
    </div>
    <el-container style="width: 1070px; height: 100vh; border: 1px solid #eee">
      <el-aside style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '5']">
          <el-menu-item-group>
            <el-menu-item index="1">Profile setting</el-menu-item>
            <el-menu-item index="2">Children</el-menu-item>
            <el-menu-item index="3">Notification</el-menu-item>
            <el-menu-item index="4">Change password</el-menu-item>
            <el-menu-item index="5">Term and Privacy policy</el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- <setting-user /> -->
        <setting-children />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import SettingChildren from "../profiles/settingChildren.vue";
// import settingUser from '../profiles/settingUser.vue';
export default {
  components: { SettingChildren },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";
.el-aside {
  color: #333;
}

.back {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70px;
  height: 70px;
  background-color: white;
}
</style>