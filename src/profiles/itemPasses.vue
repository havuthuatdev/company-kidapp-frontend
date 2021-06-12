<template>
  <div class="itemPasses">
    <div class="itemPasses__flex">
      <div class="itemPasses__flex--information">
        <h4 class="name">Hugo</h4>
        <h5 class="passesName">2/10 Tennis Credit Passed</h5>
        <p class="date">Expiry date: 3/31/2021</p>
        <p class="amount">2 classes available</p>
      </div>
      <div class="itemPasses__flex--event">
        <el-button type="primary">Use pass</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
@import "../assets/scss/variables.scss";
.itemPasses {
  background-color: $inputColor;
  @include sizeForm(100%, 169px);
  border: 1px solid $inputColor;
  border-radius: 10px;
  h4,
  h5,
  p {
    margin: 0px;
  }
  .itemPasses__flex {
    display: flex;
    padding: 16px;
    justify-content: space-between;
    height: 81%;
    .itemPasses__flex--information {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .amount{
          color: #409EFF;
      }
    }
    .itemPasses__flex--event {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .el-button{
          border: 1px solid $btnColor;
          background-color: $btnColor;
      }
    }
  }
}
</style>