<template>
  <div class="item">
    <div class="item__favourite">
      <div class="item__favourite--profile">
        <div class="profile__item-img">
          <el-avatar shape="square" :size="48"></el-avatar>
        </div>
        <div class="profile__item-title">
          <h4>aaaaaa</h4>
        </div>
      </div>
      <div class="favourite__icon">
        <font-awesome-icon
          :icon="['fas', 'heart']"
          v-bind:style="{ color: activeColor }"
          @click="onFavourite"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeColor: "red",
    };
  },
  methods: {
    onFavourite() {
      this.activeColor =
        this.activeColor == "red"
          ? (this.activeColor = "blue")
          : (this.activeColor = "red");
      //   if (this.activeColor == "red") {
      //     this.activeColor = "blue";
      //   } else if (this.activeColor == "blue") {
      //     this.activeColor = "red";
      //   }
    },
  },
};
</script>
<style scoped lang="scss">
// @import "../assets/scss/variables.scss";
@import "../assets/scss/main";
.item {
  @include sizeForm(100%, 100%);
  @include backgroudItem();
  &__favourite {
    display: flex;
    margin: 16px;
    justify-content: space-between;
    &--profile {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 108px;
      h4 {
        margin: 0px;
      }
    }
    .svg-inline--fa {
      color: #eb5757;
    }
  }
}
</style>