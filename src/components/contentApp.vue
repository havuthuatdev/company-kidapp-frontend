<template>
  <div class="contentApp">
    <div class="item favourites">
      <div class="title__group">
        <h2 class="title">Your favourites</h2>
        <el-link class="link_viewAll" type="primary">View All</el-link>
      </div>
      <el-carousel trigger="click" height="184px" interval="0" arrow="always">
        <el-carousel-item v-for="item in 3" :key="item">
          <el-row :gutter="24">
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-favourite />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-favourite />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-favourite />
            </el-col>
            <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
              <item-favourite />
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="item upcomingClasses">
      <div class="title__group">
        <h2 class="title">Upcoming classes</h2>
        <el-link class="link_viewAll" type="primary">View All</el-link>
      </div>
      <el-row :gutter="24">
        <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <item-upcoming-classes />
        </el-col>
        <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <item-upcoming-classes />
        </el-col>
        <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <item-upcoming-classes />
        </el-col>
        <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <item-upcoming-classes />
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <item-upcoming-classes />
        </el-col>
        <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <item-upcoming-classes />
        </el-col>
        <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <item-upcoming-classes />
        </el-col>
        <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <item-upcoming-classes />
        </el-col>
      </el-row>
    </div>
    <div class="item specialOffers">
      <div class="title__group">
        <h2 class="title">Special Offers</h2>
        <el-link class="link_viewAll" type="primary">View All</el-link>
      </div>
      <el-row :gutter="24">
        <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <item-special-offers />
        </el-col>
        <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <item-special-offers />
        </el-col>
        <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <item-special-offers />
        </el-col>
        <el-col :span="6" :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <item-special-offers />
        </el-col>
      </el-row>
    </div>
    <div class="item suggestedClasses">
      <div class="title__group">
        <h2 class="title">Suggested Classes</h2>
        <el-link class="link_viewAll" type="primary">View All</el-link>
      </div>
      <el-row :gutter="24">
        <el-col :span="8" :xl="8" :lg="8" :md="24" :sm="24" :xs="24">
          <item-suggested-classes />
        </el-col>
        <el-col :span="8" :xl="8" :lg="8" :md="24" :sm="24" :xs="24">
          <item-suggested-classes />
        </el-col>
        <el-col :span="8" :xl="8" :lg="8" :md="24" :sm="24" :xs="24">
          <item-suggested-classes />
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="8" :xl="8" :lg="8" :md="24" :sm="24" :xs="24">
          <item-suggested-classes />
        </el-col>
        <el-col :span="8" :xl="8" :lg="8" :md="24" :sm="24" :xs="24">
          <item-suggested-classes />
        </el-col>
        <el-col :span="8" :xl="8" :lg="8" :md="24" :sm="24" :xs="24">
          <item-suggested-classes />
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import ItemFavourite from "../items/ItemFavourite";
import ItemUpcomingClasses from "../items/itemUpcomingClasses.vue";
import ItemSpecialOffers from "../items/itemSpecialOffers.vue";
import ItemSuggestedClasses from "../items/itemSuggestedClasses.vue";
export default {
  components: {
    ItemFavourite,
    ItemUpcomingClasses,
    ItemSpecialOffers,
    ItemSuggestedClasses,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";
// .contentApp {
//   margin: 0px 220px;
// }
.link_viewAll {
  //   margin-right: 110px;
}
.title__group {
  display: flex;
  justify-content: space-between;
}
.el-col.el-col-6 {
  padding: 12px;
}
.el-col.el-col-8 {
  padding: 12px;
}
</style>