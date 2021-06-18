<template>
  <div class="headerApp">
    <div class="headerApp__category">
      <div class="headerApp__category--items__group">
        <div class="items__logo">
          <el-image
            style="width: 115px; height: 40px"
            src="https://imgdb.net/storage/uploads/42d833488f8db25eca90ae1d092da7ce31deeca9f60ebc6f45a7d780cd2c61d1.png"
          ></el-image>
        </div>
      </div>
      <div class="headerApp__category--items__group items__group-one">
        <div class="items">
          <el-button type>Sports</el-button>
        </div>
        <div class="items">
          <el-button type>Music</el-button>
        </div>
        <div class="items">
          <el-button type>Education</el-button>
        </div>
      </div>
      <div class="headerApp__category--items__group items__group-two">
        <div class="items">
          <el-button type>Favourites</el-button>
        </div>
        <div class="items">
          <div class="items__notification">
            <i class="el-icon-bell"></i>
          </div>
        </div>
        <div class="items">
          <div class="items__profile">
            <div class="items__profile-avatar">
              <el-avatar :size="50"></el-avatar>
            </div>
            <div class="items__profile-username">
              <h5>Ann</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- search -->
    <div class="itemSearch">
      <item-search />
    </div>
  </div>
</template>
<script>
import itemSearch from '../items/itemSearch.vue';
export default {
  components: { itemSearch },
};
</script>
<style scoped lang="scss">
// @import "../assets/scss/variables.scss";
@import "../assets/scss/main";
.headerApp {
  &__category {
    display: flex;
    // margin: 20px 220px;
    justify-content: space-between;
    border-bottom: 1px solid $itemColor;
    &--items__group {
      display: flex;
      align-items: center;
      .items {
        margin-right: 24px;
        .items__profile {
          display: flex;
          align-items: center;
          .items__profile-username {
            margin-left: 8px;
          }
        }
        .el-button {
          @include sizeForm(107px, 40px);
        }
      }
    }
    .items__group-one {
      margin-right: 98px;
    }
  }
}
</style>