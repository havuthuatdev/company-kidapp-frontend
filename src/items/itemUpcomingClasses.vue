<template>
  <div class="upcoming__classes">
    <div class="upcoming__classes-flex">
      <div class="upcoming__classes-calendar">
        <div class="upcoming__classes-calendar-group">
          <h4 class="upcoming__classes-calendar--month">Apr</h4>
          <h2 class="upcoming__classes-calendar--day">29</h2>
        </div>
      </div>
      <div class="upcoming__classes-information">
        <h2 class="upcoming__classes-information--teacher">Hugo</h2>
        <h2 class="upcoming__classes-information--subjects">Piano</h2>
        <div class="upcoming__classes-information--datetime">
          <p class="upcoming__classes-information--time">Tue:9:00am</p>
          <p class="upcoming__classes-information--seconds">(45mins)</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
@import "../assets/scss/variables.scss";
.upcoming__classes {
  @include item();
  @include sizeForm(100%, 119px);
  align-items: center;
  justify-content: center;
  .upcoming__classes-flex {
      display: flex;
      margin: 16px;
      width: 100%;
    .upcoming__classes-calendar {
      @include sizeForm(100px, 100px);
      background-color: #8e8e93;
      display: flex;
      // margin: 20px 0px;
      justify-content: center;
      align-items: center;
      h4,
      h2 {
        margin: 0px;
      }
    }
    .upcoming__classes-information {
      margin-left: 10px;
      h2,
      p {
        margin: 3px 0px;
      }
      &--datetime {
        display: flex;
        width: 145px;
        justify-content: space-around;
      }
    }
  }
}
</style>