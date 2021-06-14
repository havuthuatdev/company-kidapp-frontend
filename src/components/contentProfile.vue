<template>
  <div class="contentApp">
    <div class="item favourites">
      <div class="title__group">
        <h2 class="title">Children</h2>
        <!-- <el-link class="link_viewAll" type="primary">View All</el-link> -->
        <el-button type="primary">Add a child</el-button>
      </div>
      <el-carousel trigger="click" height="200px" interval="0" arrow="always">
        <el-carousel-item v-for="item in 3" :key="item">
          <el-row :gutter="24">
            <el-col :span="6" :xl="6" :lg="6" :md="6" :sm="24" :xs="24">
              <item-children />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="6" :sm="24" :xs="24">
              <item-children />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="6" :sm="24" :xs="24">
              <item-children />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="6" :sm="24" :xs="24">
              <item-children />
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="Upcoming classes" name="first">
        <div class="item upcomingClasses">
          <div class="title__group">
            <h2 class="title">Upcoming classes</h2>
            <el-link class="link_viewAll" type="primary">View All</el-link>
          </div>
          <el-row :gutter="24">
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-upcoming-classes-profile />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-upcoming-classes-profile />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-upcoming-classes-profile />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-upcoming-classes-profile />
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-upcoming-classes-profile />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-upcoming-classes-profile />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-upcoming-classes-profile />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-upcoming-classes-profile />
            </el-col>
          </el-row>
          <div class="viewmore">
            <el-button class="btnViewmore">view more</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Passes" name="second">
        <div class="item specialOffers">
          <div class="title__group">
            <h2 class="title">Special Offers</h2>
            <el-link class="link_viewAll" type="primary">View All</el-link>
          </div>
          <el-row :gutter="24">
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-passes />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-passes />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-passes />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-passes />
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-passes />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-passes />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-passes />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-passes />
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-passes />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-passes />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-passes />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-passes />
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Previous classes" name="third">
        <div class="item suggestedClasses">
          <div class="title__group">
            <h2 class="title">Suggested Classes</h2>
            <el-link class="link_viewAll" type="primary">View All</el-link>
          </div>
          <el-row :gutter="24">
            <el-col :span="8" :xl="8" :lg="8" :md="24" :sm="24" :xs="24">
              <item-upcoming-classes-profile />
            </el-col>
            <el-col :span="8" :xl="8" :lg="8" :md="24" :sm="24" :xs="24">
              <item-upcoming-classes-profile />
            </el-col>
            <el-col :span="8" :xl="8" :lg="8" :md="24" :sm="24" :xs="24">
              <item-upcoming-classes-profile />
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="8" :xl="8" :lg="8" :md="24" :sm="24" :xs="24">
              <item-upcoming-classes-profile />
            </el-col>
            <el-col :span="8" :xl="8" :lg="8" :md="24" :sm="24" :xs="24">
              <item-upcoming-classes-profile />
            </el-col>
            <el-col :span="8" :xl="8" :lg="8" :md="24" :sm="24" :xs="24">
              <item-upcoming-classes-profile />
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
// import ItemFavourite from "../items/ItemFavourite";
// import ItemUpcomingClasses from "../items/itemUpcomingClasses.vue";
// import ItemSpecialOffers from "../items/itemSpecialOffers.vue";
// import ItemSuggestedClasses from "../items/itemSuggestedClasses.vue";
import ItemChildren from "../profiles/itemChildren.vue";
import ItemPasses from "../profiles/itemPasses.vue";
import ItemUpcomingClassesProfile from "../profiles/itemUpcomingClassesProfile.vue";
export default {
  components: {
    // ItemFavourite,
    // ItemSpecialOffers,
    // ItemSuggestedClasses,
    ItemChildren,
    ItemUpcomingClassesProfile,
    ItemPasses,
  },
};
</script>
<style scoped lang="scss">
@import "../assets/scss/variables.scss";
// .upcomingClasses{
//   display: flex;
// }
.title__group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .el-button {
    width: 124px;
    height: 40px;
  }
}
.viewmore {
  display: flex;
  justify-content: center;
  align-items: center;
  .el-button {
    width: 176px;
    height: 48px;
    border: 1px solid $btnColor;
    // background-color: $btnColor;
  }
}
.el-col.el-col-6 {
  padding: 12px;
}
.el-col.el-col-8 {
  padding: 12px;
}
.el-tabs {
  margin-top: 48px;
}
</style>