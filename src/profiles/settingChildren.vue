<template>
  <div class="settingUser">
    <div class="information">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <el-avatar :size="83" :src="circleUrl">
          <font-awesome-icon class="icon-star" :icon="['fas', 'camera']" />
        </el-avatar>
      </el-upload>
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
        <el-form-item label="Date of birth">
          <el-date-picker
            v-model="sizeForm.dateOfBirth"
            type="date"
            placeholder="Pick a day"
            suffix-icon="el-icon-date"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Gender">
          <el-radio v-model="sizeForm.gender" label="1">Male</el-radio>
          <el-radio v-model="sizeForm.gender" label="2">Female</el-radio>
        </el-form-item>
      </div>
      <div class="group">
        <el-form-item label="Interests">
          <el-input
            style="width: 703px"
            placeholder="Search"
            suffix-icon="el-icon-search"
            v-model="sizeForm.search"
          >
          </el-input>
          <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >
            {{ tag }}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="mini"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button
            circle
            type="danger"
            v-else
            class="button-new-tag"
            size="small"
            @click="showInput"
            >+</el-button
          >
          <p>Add new</p>
        </el-form-item>
      </div>
      <div class="grid">
        <el-form-item label="Day">
          <el-select v-model="value" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select v-model="value" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </div>

      <el-form-item size="large">
        <el-button @click="onSubmit">Save</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sizeForm: {
        firstname: "",
        lastname: "",
        dateOfBirth: "",
        gender: "1",
        search: "",
        state: "",
        city: "",
        address: "",
      },
      dynamicTags: ["Tag 1", "Tag 2", "Tag 3"],
      inputVisible: false,
      inputValue: "",
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      value: "",
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";
// tag
.el-tag + .el-tag {
  margin-left: 10px;
  margin-top: 12px;
}
.el-button.button-new-tag.el-button--danger.el-button--small.is-circle {
  width: 32px;
  height: 32px;
  margin-left: 10px;
}
// .button-new-tag {
//   margin-left: 10px;
//   height: 32px;
//   line-height: 30px;
//   padding-top: 0;
//   padding-bottom: 0;
// }
// .input-new-tag {
//   width: 90px;
//   margin-left: 10px;
//   vertical-align: bottom;
// }
//   -------------
.group {
  display: flex;
  //   justify-content: ;
  .el-date-editor {
    width: 340px;
  }
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
.grid{
    display: flex;
    flex-direction: column;
    background-color: violet;
}
</style>
