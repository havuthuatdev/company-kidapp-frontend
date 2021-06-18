<template>
  <div class="item_suggestedClasses">
    <div class="item_suggestedClasses__flex">
      <div class="item-left item_suggestedClasses__flex--group">
        <div class="item-div item-suggestedClasses__flex--group--datetime">
          <p>5:15PM</p>
          <p>(45mins)</p>
        </div>
        <div class="item_suggestedClasses__flex--group--rate">
          <font-awesome-icon class="icon-star" :icon="['fas', 'star']" />
          <p>4.8</p>
          <p>(23)</p>
        </div>
        <div class="item_suggestedClasses__flex--group--price">
          <h4>$150</h4>
          <h5>per lesson</h5>
        </div>
      </div>
      <div class="item-right item_suggestedClasses__flex--group">
        <div class="item_suggestedClasses__flex--group--information">
          <h4>Tennis</h4>
          <p>ABC Tennis Camberwell - 1.5km</p>
          <p>w/Danny Smith</p>
        </div>
        <!-- <div class="item_suggestedClasses__flex--group--booking">
          <p>3 slots avaliable</p>
          <div class="group">
            <div class="email">
              <font-awesome-icon
                class="icon-email"
                :icon="['fas', 'envelope']"
              />
            </div>
            <el-button type="primary">Book</el-button>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
@import "../assets/scss/main";
.item_suggestedClasses {
  @include sizeForm(100%, 154px);
  @include backgroudItem();
  p,
  h4,
  h5 {
    margin: 0px;
  }
  &__flex {
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
      height: 100%;
      // width: 100%;
      p,
      h4 {
        margin: 0px;
        // margin-bottom: 5px;
      }
      .email {
        padding: 11px;
        background-color: cadetblue;
        border: 0px solid cadetblue;
        border-radius: 4px;
        margin: 0px 5px;
      }
    }
    &--group {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &--rate {
        display: flex;
        p {
          padding: 0 2px;
        }
        //   justify-content: space-around;
      }
      &--booking {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        .group {
          display: flex;
          width: 50%;
          .email {
            width: 30%;
          }
          .el-button {
            width: 70%;
          }
        }
      }
      &--price {
        color: #d02760;
      }
    }
  }
}
</style>