<template>
  <div class="settingUser">
    <div class="information">
      <item-user-information />
    </div>
    <el-form ref="form" :model="sizeForm" size="medium" label-position="top">
      <div class="group">
        <el-form-item label="First name">
          <el-input v-model="sizeForm.firstname"></el-input>
        </el-form-item>
        <el-form-item label="Last name">
          <el-input v-model="sizeForm.lastname"></el-input>
        </el-form-item>
      </div>
      <div class="group">
        <el-form-item label="Email">
          <el-input v-model="sizeForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Phone number">
          <el-input v-model="sizeForm.phone"></el-input>
        </el-form-item>
      </div>
      <div class="group">
        <el-form-item label="State">
          <el-select
            v-model="sizeForm.state"
            placeholder="please select your zone"
          >
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="City">
          <el-select
            v-model="sizeForm.city"
            placeholder="please select your zone"
          >
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </div>

      <el-form-item label="Address">
        <el-input v-model="sizeForm.address" style="width: 703px"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button @click="onSubmit">Save</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import ItemUserInformation from "./itemUserInformation.vue";
export default {
  components: {
    ItemUserInformation,
  },
  data() {
    return {
      sizeForm: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        address: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";
.group {
  display: flex;
  justify-content: space-between;
}
.el-form-item {
  margin-right: 23px;
  /deep/.el-form-item__label {
    padding-bottom: 0px;
  }
}
/deep/.el-input {
  width: 340px;
  .el-input__inner {
    height: 44px;
  }
}
.information {
  padding-bottom: 36px;
}
.el-button {
  width: 144px;
  height: 40px;
  border: 1px solid $btnColor;
  background-color: $btnColor;
}
</style>
