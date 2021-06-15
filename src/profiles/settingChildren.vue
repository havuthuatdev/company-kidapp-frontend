<template>
  <div class="settingUser">
    <div class="information">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
      >
        <el-avatar :size="83">
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
        <!-- search -->
        <el-form-item label="Interests">
          <el-input
            style="width: 727px"
            placeholder="Search"
            suffix-icon="el-icon-search"
            class="input-new-tag"
            v-model="sizeForm.inputValue"
            ref="saveTagInput"
            size="mini"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-tag
            closable
            :disable-transitions="false"
            :key="tag"
            v-for="tag in sizeForm.dynamicTags"
            @close="handleClose(tag)"
          >
            {{ tag }}
          </el-tag>
        </el-form-item>
      </div>
      <!-- date -->
      <div class="grid">
        <div class="group">
          <!-- day -->
          <el-form-item label="Day" v-if="available">
            <el-date-picker
              v-model="sizeForm.date1"
              type="date"
              v-for="date1 in sizeForm.dynamicDateTime"
              :key="date1"
              ref="saveDate1"
              placeholder="Pick a date"
              default-value="2010-10-01"
              @keyup.enter.native="handleavailableConfirm"
              @blur="handleavailableConfirm"
            >
              <!--  -->
            </el-date-picker>
          </el-form-item>
          <div class="time">
            <!-- from -->
            <el-form-item label="From" v-if="available">
              <el-time-select
                placeholder="Start time"
                v-model="sizeForm.startTime1"
                ref="savestartTime1"
                v-for="startTime1 in sizeForm.dynamicDateTime"
                :key="startTime1"
                :picker-options="{
                  start: '00:00',
                  step: '00:30',
                  end: '23:30',
                }"
                @keyup.enter.native="handleavailableConfirm"
                @blur="handleavailableConfirm"
              >
                <!-- {{ startTime1.startTime1 }} -->
              </el-time-select>
            </el-form-item>
            <!-- to -->
            <el-form-item label="To" v-if="available">
              <el-time-select
                placeholder="End time"
                v-model="sizeForm.endTime1"
                ref="saveendTime1"
                v-for="endTime1 in sizeForm.dynamicDateTime"
                :key="endTime1"
                :picker-options="{
                  start: '00:00',
                  step: '00:30',
                  end: '23:30',
                }"
                @keyup.enter.native="handleavailableConfirm"
                @blur="handleavailableConfirm"
              >
                {{ endTime1.endTime1 }}
              </el-time-select>
            </el-form-item>
          </div>
        </div>
      </div>
      <el-button class="button-new-tag" size="small" @click="showAvailableTime"
        >+ New time
      </el-button>

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
        irstname: "",
        lastname: "",
        dateOfBirth: "",
        gender: "1",
        search: "",
        state: "",
        city: "",
        address: "",
        startTime1: "",
        endTime1: "",
        date1: "",
        dynamicTags: ["Tag 1", "Tag 2", "Tag 3"],
        dynamicDateTime: [
          { date1: "10/10/2021", startTime1: "8:00", endTime1: "9:00" },
        ],
        inputValue: "",
        value: "",
      },
      available: false,
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    // remove tags
    handleClose(tag) {
      console.log("tag");
      this.sizeForm.dynamicTags.splice(
        this.sizeForm.dynamicTags.indexOf(tag),
        1
      );
    },
    //show search
    showInput() {
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    // save search -> tag
    handleInputConfirm() {
      let inputValue = this.sizeForm.inputValue;
      if (inputValue) {
        this.sizeForm.dynamicTags.push(inputValue);
      }
      this.inputValue = "";
    },

    // show datetime
    showAvailableTime() {
      console.log("a");
      this.available = true;
      this.$refs.saveDate1.$el.focus();
      this.$refs.savestartTime1.$el.focus();
      this.$refs.saveendTime1.$el.focus();
    },
    // save date in input -> date
    handleavailableConfirm() {
      let inputDate1 = this.sizeForm.date1;
      let inputStartTime1 = this.sizeForm.startTime1;
      let inputEndTime1 = this.sizeForm.endTime1;

      if (inputDate1 != "" && inputStartTime1 != "" && inputEndTime1 != "") {
        let obj = {
          date1: inputDate1,
          startTime1: inputStartTime1,
          endTime1: inputEndTime1,
        };
        if (obj) {
          this.sizeForm.dynamicDateTime.push(obj);
        }
        console.log(this.sizeForm.dynamicDateTime);
        // this.available = false;
        inputStartTime1 = "";
        inputEndTime1 = "";
        inputDate1 = "";
      }
      // console.log(inputDate1);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";
// .el-form{
//   height: 100%;
// }
// tag
.el-tag + .el-tag {
  margin-left: 10px;
  margin-top: 12px;
  background-color: $btnColor;
  color: $inputColor;
}
.el-button.button-new-tag {
  width: 100px;
  // height: 32px;
  // margin-left: 10px;
  margin-bottom: 15px;
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
    width: 352px;
  }
}
.el-form-item {
  margin-right: 23px;
  /deep/.el-form-item__label {
    padding-bottom: 0px;
  }
}
/deep/.el-input {
  width: 352px;
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
  color: $inputColor;
}
.grid {
  // display: flex;
  // flex-direction: column;
  // background-color: violet;
  /deep/.el-input {
    width: 191px;
    .el-input__inner {
      height: 44px;
    }
  }
}
.time {
  display: flex;
  margin-left: 107px;
}

// .el-form-item__content{}
</style>
