<template>
  <div class="item__children">
    <div class="item__children__flex">
      <div class="item__children__flex--information">
        <el-avatar :size="72" src="https://empty">
          <img
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
          />
        </el-avatar>
        <div class="item__children__flex--information--group">
          <h2>Hugo</h2>
          <p>8 years old</p>
        </div>
      </div>
      <div class="item__children__flex--edit">
        <el-button type="primary">Edit profile</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
// @import "../assets/scss/variables.scss";
@import "../assets/scss/main";
.item__children {
  @include sizeForm(100%, 184px);
  background-color: $itemColor;
  border: 1px solid $itemColor;
  border-radius: 10px;
  h2,
  p {
    margin: 0px;
  }
  &__flex {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 24px;
    justify-content: space-between;
    &--information {
      display: flex;
      align-items: center;
      // width: 150px;
      // justify-content: space-between;
      &--group {
        margin-left: 7px;
      }
    }
    &--edit {
      .el-button {
        width: 40%;
        // height: 40px;
      }
    }
  }
}
</style>