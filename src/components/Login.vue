<template>
  <div class="login">
    <el-form :model="formLogin" :rules="rules">
      <el-avatar shape="square" :size="64" />
      <el-form-item prop="email">
        <el-input placeholder="Email" v-model="formLogin.email"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="Password"
          type="password"
          v-model="formLogin.password"
          show-password
          prop="password"
        ></el-input>
      </el-form-item>
      <div class="flex-checkbox">
        <el-checkbox>Remember me</el-checkbox>
      </div>
      <div class="grid-div">
        <el-button 
        type="primary" 
        size="medium" 
        @click="submitForm"
          >Login
        </el-button>
      </div>
      <el-link class="el-link-forgot" type="primary">Forgot password?</el-link>
      <div class="flex-bulkhead">
        <div class="bulkhead"></div>
        <p>or login in with</p>
        <div class="bulkhead"></div>
      </div>
      <div class="div-grid-button-link">
        <el-button class="button-link">
          <div class="flex-button-link">
            <el-image
              src="https://imgdb.net/storage/uploads/5ba61ab84ee2b641525f6c4e0012289afae7907b60fa39a3db0bb803ac54cfd0.png"
            ></el-image>
            <div class="button-text">Login with Google</div>
          </div>
        </el-button>
        <el-button class="button-link">
          <div class="flex-button-link">
            <el-image
              src="https://imgdb.net/storage/uploads/9cf5a9414639f0133567639ccf15a0cac00b51233f5058ec7a3add3b075be9ec.png"
            ></el-image>
            <div class="button-text">Login with Facebook</div>
          </div>
        </el-button>
        <el-button class="button-link">
          <div class="flex-button-link">
            <el-image
              src="https://imgdb.net/storage/uploads/49d355e21a270217d1cd1fb77d0e277706674671bc7ee12a69cda2f86badd125.png"
            ></el-image>
            <div class="button-text">Login with Apple</div>
          </div>
        </el-button>
      </div>
      <p>
        Don't have an account?
        <el-link type="primary">Register</el-link>
      </p>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLogin: {
        email: "",
        password: "",
        url: "",
        url2: "",
        url3: "",
      },
      rules: {
        email: [
          {
            required: true,
            message: "Please input email address",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"],
          },
        ],
        password: [
          {
            required: true,
            message: "Please input the password",
            trigger: "change",
          },
          {
            min: 5,
            message: "Password length should be at least 5 characters",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.formLogin.email + this.formLogin.password);
    },
  },
};
</script>
<style scoped lang="scss">
@import "../assets/scss/main";
.login {
  @include fullScreen();
  @include flexCenter();
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // text-align: center;
  .el-form {
    @include sizeForm(620px, 773px);
    box-shadow: $box-shadow;
    .el-avatar {
      margin: 44px 0px 32px 0px;
    }
    .el-input {
      padding: 8px 0px;
      /* icon xem pass */
      /deep/ .el-input__icon {
        margin-right: 107px;
      }
      /deep/ .el-input__inner {
        @include sizeForm(406px, 56px);
        @include input();
      }
    }
    /deep/ .el-form-item__error {
      margin: 0px 107px;
    }
    .el-checkbox {
      margin: 10px 0px 22px 0px;
    }
    .el-link-forgot {
      margin-top: 8px;
    }
    .el-button {
      @include sizeForm(406px, 56px);
      @include button();
    }
    .flex-checkbox {
      display: flex;
      margin: 0px 107px;
    }
    .flex-bulkhead {
      display: flex;
      justify-content: space-around;
      margin: 16px 107px;
    }
    .flex-button-link {
      display: flex;
      padding: 0px 90px;
      /* justify-content: space-between; */
    }
    .bulkhead {
      width: 145px;
      height: 1px;
      background-color: black;
      margin-top: 25px;
    }
    .div-grid-button-link {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 8px;
      justify-items: center;
      .el-image {
        width: 18.07px;
        height: 18.07px;
        padding-right: 10px;
      }
      .button-link {
        background-color: $greyColor;
        border: 1px solid $greyColor;
        /* font-size: 17px; */
      }
    }
  }
}
</style>