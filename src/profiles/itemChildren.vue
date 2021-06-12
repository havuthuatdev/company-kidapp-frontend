<template>
  <div class="item__children">
    <div class="item__children__flex">
      <div class="item__children--information">
        <el-avatar :size="72" src="https://empty">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
        </el-avatar>
        <div class="information--group">
          <h2>Hugo</h2>
          <p>8 years old</p>
        </div>
      </div>
      <div class="item__children--edit">
        <el-button type="primary">Edit profile</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
@import "../assets/scss/variables.scss";
.item__children {
  @include sizeForm(100%, 184px);
  background-color: $inputColor;
  border: 1px solid $inputColor;
  border-radius: 10px;
  .item__children__flex {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 24px;
    justify-content: space-between;
    .item__children--information {
      display: flex;
      align-items: center;
      .information--group {
        margin-left: 15px;
      }
    }
    .item__children--edit{
        .el-button{
            width: 140px;
            height: 40px;
        }
    }
  }

  // padding: 16px;
}
h2,
p {
  margin: 0px;
//   font-size: 1.2rem;
}
</style>