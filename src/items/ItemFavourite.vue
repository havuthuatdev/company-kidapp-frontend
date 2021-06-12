<template>
  <div class="item_favourite">
    <div class="item__favourite">
      <div class="profile__item">
        <div class="profile__item-img">
          <el-avatar shape="square" :size="48"></el-avatar>
        </div>
        <div class="profile__item-title">
          <h5>aaaaaa</h5>
        </div>
      </div>
      <div class="favourite__icon">
        <font-awesome-icon
          :icon="['fas', 'heart']"
          v-bind:style="{color: activeColor}"
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
@import "../assets/scss/variables.scss";
.item_favourite {
  @include sizeForm(100%, 140px);
//   @include item();
//   margin: 12px 0px;
  background-color: $inputColor;
  border: 1px solid $inputColor;
  border-radius: 10px;
}
.item__favourite {
  display: flex;
  margin: 16px;
  justify-content: space-between;
  .profile__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 108px;
  }
  h5 {
    margin: 0px;
  }
  //   .favourite__icon {
  //     padding: 16px 0px;
  //   }
  .svg-inline--fa {
    color: #eb5757;
  }
  //   .svg-inline--fa {
  //     color: black;
  //   }
}
</style>