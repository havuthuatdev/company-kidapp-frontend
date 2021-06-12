<template>
  <div class="item_suggestedClasses">
    <div class="item_suggestedClasses__flex">
      <div class="item-left item_suggestedClasses__flex--group">
        <div class="item-div item-suggestedClasses__flex--group--datetime">
          <p class="item-suggestedClasses__flex--group--datetime--oclock">5:15PM</p>
          <p class="item-suggestedClasses__flex--group--datetime--seconds">(45mins)</p>
        </div>
        <div class="item-suggestedClasses__flex--group--rate">
          <font-awesome-icon
            class="icon-star"
            :icon="['fas', 'star']"
          />
          <p class="item-suggestedClasses__flex--group--rate--number">4.8 (23)</p>
        </div>
        <div class="item-suggestedClasses__flex--group--price">
          <h4 class="item-suggestedClasses__flex--group--price--dolar">$150</h4>
          <h5 class="item-suggestedClasses__flex--group--price--lesson">per lesson</h5>
        </div>
      </div>
      <div class="item-right item_suggestedClasses__flex--group">
        <div class="item_suggestedClasses__flex--group--information">
          <h4 class="item_suggestedClasses__flex--group--information--subject">Tennis</h4>
          <p
            class="item_suggestedClasses__flex--group--information--address"
          >ABC Tennis Camberwell - 1.5km</p>
          <p class="item_suggestedClasses__flex--group--information--teacher">w/Danny Smith</p>
        </div>
        <div class="item_suggestedClasses__flex--group--booking">
          <p class="item_suggestedClasses__flex--group--booking--slot">3 slots avaliable</p>
          <font-awesome-icon
            class="icon-email"
            :icon="['fas', 'envelope']"
          />
          <el-button type="primary">Book</el-button>
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
.item_suggestedClasses {
  @include sizeForm(100%, 154px);
//   margin: 12px 0px;
  align-items: center;
  background-color: $inputColor;
  border: 1px solid $inputColor;
  border-radius: 10px;
  p,
  h4,
  h5 {
    margin: 0px;
  }
  .item_suggestedClasses__flex {
    display: flex;
    margin: 16px;
    height: 80%;
    .item-left {
      width: 35%;
      border-right: 1px solid black;
      .icon-star {
        margin-right: 5px;
      }
    }
    .item-right {
      margin-left: 16px;
      width: 100%;
      p,
      h4 {
        margin-bottom: 5px;
      }
      .icon-email {
        padding: 11px;
        background-color: cadetblue;
        border: 1px solid cadetblue;
        border-radius: 4px;
      }
    }
    .item_suggestedClasses__flex--group {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .item-suggestedClasses__flex--group--rate {
        display: flex;
        //   justify-content: space-around;
      }
      .item_suggestedClasses__flex--group--booking {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }
      .item-suggestedClasses__flex--group--price {
        color: #d02760;
      }
    }
  }
}
</style>