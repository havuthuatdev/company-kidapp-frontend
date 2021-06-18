<template>
  <div class="search" v-show="false">
    <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      placeholder="Search for Kids Activities"
      @select="handleSelect"
    ></el-autocomplete>
    <el-button class="btnSearch">search</el-button>
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
    // loadAll() {
    //   return [
    //     { value: "vue", link: "https://github.com/vuejs/vue" },
    //     { value: "element", link: "https://github.com/ElemeFE/element" },
    //     { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
    //     { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
    //     { value: "vuex", link: "https://github.com/vuejs/vuex" },
    //     { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
    //     { value: "babel", link: "https://github.com/babel/babel" },
    //   ];
    // },
    // querySearchAsync(queryString, cb) {
    //   var links = this.links;
    //   var results = queryString
    //     ? links.filter(this.createFilter(queryString))
    //     : links;
    //   clearTimeout(this.timeout);
    //   this.timeout = setTimeout(() => {
    //     cb(results);
    //   }, 3000 * Math.random());
    // },
    // createFilter(queryString) {
    //   return (link) => {
    //     return (
    //       link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    //     );
    //   };
    // },
    // handleSelect(item) {
    //   console.log(item);
    // },
  },
  // mounted() {
  //   this.links = this.loadAll();
  // },
};
</script>

<style scoped lang="scss">
// @import "../assets/scss/variables.scss";
@import "../assets/scss/main";
.search {
  position: relative;
  @include sizeForm(617px, 56px);
  display: flex;
  /deep/ .el-input__inner {
    @include sizeForm(617px, 56px);
    background-color: $greyColor;
  }
  .btnSearch {
    position: absolute;
    right: 0;
    margin: 3px 3px;
    height: 50px;
    background-color: $orangeColor;
    color: white;
  }
}
</style>