<template>
  <div class="item">
    <div class="item__upcoming">
      <div class="item__upcoming--flex">
        <div class="item__upcoming--flex--calendar">
          <h4>Apr</h4>
          <h2>29</h2>
        </div>
      </div>
      <div class="item__upcoming--information">
        <h2>Hugo</h2>
        <h2>Piano</h2>
        <div class="item__upcoming--information--datetime">
          <p>Tue:9:00am</p>
          <p>(45mins)</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
@import "../assets/scss/main";
.item {
  @include backgroudItem();
  @include sizeForm(100%, 100%);
  &__upcoming {
    display: flex;
    align-items: center;
    margin: 16px;
    &--flex {
      @include sizeForm(80px, 80px);
      background-color: #8e8e93;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px ;
      color: white;
      font-family: 'Source Sans Pro', sans-serif;
      h4,
      h2 {
        margin: 0px;
        width: 80px;
        text-align: center;
      }
    }
    &--information {
      margin-left: 10px;
      h2,
      p {
        margin: 3px 0px;
        font-size: 1em;
      }
      &--datetime {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
}
</style>