<template>
  <div class="itemUserInformation">
    <div class="itemUserInformation__avatar">
      <el-avatar :size="124" src="https://empty">
        <img
          src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
        />
      </el-avatar>
    </div>
    <div class="itemUserInformation__name">
      <h2>Ann Nguyen</h2>
      <el-button type="primary">Profile setting</el-button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
@import "../assets/scss/main";
.itemUserInformation {
  display: flex;
  &__avatar {
    margin-right: 15px;
  }
  &__name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .el-button {
      width: 148px;
      margin: 4px 0px;
    }
    h2 {
      font-size: 30px;
      margin: 4px 0px;
    }
  }
}
</style>