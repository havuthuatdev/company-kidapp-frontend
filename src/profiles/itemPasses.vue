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
@import "../assets/scss/main";
.itemPasses {
  @include sizeForm(100%, 169px);
  @include backgroudItem();
  h4,
  h5,
  p {
    margin: 0px;
  }
  &__flex {
    display: flex;
    padding: 16px;
    justify-content: space-between;
    height: 100%;
    &--information {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 70%;
      .amount {
        color: #409eff;
      }
    }
    &--event {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 30%;
      .el-button {
        border: 1px solid $orangeColor;
        background-color: $orangeColor;
        width: 100%;
      }
    }
  }
}
</style>