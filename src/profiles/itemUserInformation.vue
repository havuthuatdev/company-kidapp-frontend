<template>
  <div class="itemUserInformation">
    <div class="itemUserInformation__avatar">
      <el-avatar :size="124" src="https://empty">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
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
.itemUserInformation{
    display: flex;
    margin: 48px 0px;
    .itemUserInformation__avatar{
        margin-right: 15px;
    }
}
</style>