<template>
  <div class="item__specialOffers">
    <div class="item__specialOffers-group">
      <h4 class="item__specialOffers-group--subject">Tenis</h4>
      <h5 class="item__specialOffers-group--offers">Free Trial</h5>
      <p class="item__specialOffers-group--address">Vida Tenis Altona - 1.5km</p>
      <h4 class="item__specialOffers-group--price">FREE</h4>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
@import "../assets/scss/variables.scss";
.item__specialOffers {
  @include sizeForm(100%, 138px);
  @include item();
//   margin: 12px 0px;
  align-items: center;
  &-group {
    margin: 16px;
    h4,
    h5,
    p {
      margin: 6px 0px;
      font-size: 15px;
    }
    h4 {
      font-size: 18px;
    }
    h5 {
      font-size: 17px;
    }
    &--price {
      color: #d02760;
    }
  }
}
</style>