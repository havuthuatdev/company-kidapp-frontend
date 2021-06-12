<template>
  <div class="headerApp">
    <div class="category">
      <div class="items__group">
        <div class="items__logo">
          <el-image
            style="width: 115px; height: 40px"
            src="https://imgdb.net/storage/uploads/42d833488f8db25eca90ae1d092da7ce31deeca9f60ebc6f45a7d780cd2c61d1.png"
          ></el-image>
        </div>
      </div>
      <div class="items__group items__group-one">
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
      <div class="items__group items__group-two">
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
    <!-- <div class="search">
      <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="Search for Kids Activities"
        @select="handleSelect"
      ></el-autocomplete>
      <el-button class="btnSearch">sfds</el-button>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: [],
      state: "",
      timeout: null,
    };
  },
  methods: {
    loadAll() {
      return [
        { value: "vue", link: "https://github.com/vuejs/vue" },
        { value: "element", link: "https://github.com/ElemeFE/element" },
        { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
        { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
        { value: "vuex", link: "https://github.com/vuejs/vuex" },
        { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
        { value: "babel", link: "https://github.com/babel/babel" },
      ];
    },
    querySearchAsync(queryString, cb) {
      var links = this.links;
      var results = queryString
        ? links.filter(this.createFilter(queryString))
        : links;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createFilter(queryString) {
      return (link) => {
        return (
          link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
  },
  mounted() {
    this.links = this.loadAll();
  },
};
</script>
<style scoped lang="scss">
@import "../assets/scss/variables.scss";
.headerApp{
    // height: 200px;
    // border-bottom: 1px solid $inputColor;
}
.category {
  display: flex;
  margin: 20px 220px;
  justify-content: space-between;
  border-bottom: 1px solid $inputColor;
}
.items {
  margin-right: 24px;
}
.el-button {
  @include sizeBtn(107px, 40px);
}
.items__category {
  margin-right: 24px;
}
.items__group {
  display: flex;
  align-items: center;
}
.items__group-one {
  margin-right: 98px;
}

.items__profile {
  display: flex;
  align-items: center;
}
.items__profile-username {
  margin-left: 8px;
}
// searech
.search {
  position: relative;
  margin: 0px 220px;
  background-color: $inputColor;
  @include sizeBtn(617px, 56px);
  display: flex;
  /deep/ .el-input__inner {
    @include sizeBtn(617px, 56px);
    background-color: $inputColor;
  }
  .btnSearch {
    position: absolute;
    right: 0;
    margin: 3px 3px;
    height: 50px;
    background-color: $btnColor;
  }
}
</style>