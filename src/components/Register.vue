<template>
  <div class="container">
    <el-form :model="registerForm" :rules="rules">
      <div class="item-input item-group">
        <el-form-item prop="firstName">
          <el-input placeholder="First Name" v-model="registerForm.firstName"></el-input>
        </el-form-item>
        <el-form-item prop="lastName">
          <el-input placeholder="Last Name" v-model="registerForm.lastName"></el-input>
        </el-form-item>
      </div>
      <div class="item-input">
        <el-form-item prop="email">
          <el-input type="email" placeholder="Email" v-model="registerForm.email"></el-input>
        </el-form-item>
      </div>
      <div class="item-input">
        <el-form-item prop="email">
          <vue-tel-input v-model="registerForm.phone"></vue-tel-input>
        </el-form-item>
      </div>
      <div class="item-input">
        <el-form-item prop="pass">
          <el-input type="password" placeholder="Create password" v-model="registerForm.pass"></el-input>
        </el-form-item>
      </div>
      <div class="item-input">
        <el-form-item prop="checkPass">
          <el-input type="password" placeholder="Confirm password" v-model="registerForm.checkPass"></el-input>
        </el-form-item>
      </div>
      <div class="item-input">
        <el-checkbox label="I agree with our Terms and Conditions"></el-checkbox>
      </div>
      <div class="item-input">
        <el-button @click="onRegister">Register</el-button>
      </div>
      <div class="aready">
        <p>Aredy have an account?</p>
        <el-link>Login</el-link>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.registerForm.checkPass !== "") {
          this.$refs.registerForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.registerForm.pass) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        firstName: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
          {
            min: 1,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
        lastName: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
          {
            min: 1,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
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
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    onRegister() {
      console.log(this.registerForm.phone);
    },
  },
};
</script>
<style scoped lang="scss">
@import "../assets/scss/variables.scss";
.container {
  display: flex;
  justify-content: center;
}
.el-form {
  @include sizeForm(620px, 773px);
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
  // @include bgc();
}
.item-input {
  padding: 0px 107px;
  margin-bottom: 16px;
}
.item-group {
  display: flex;
  justify-content: space-between;
}
.el-form-item {
  margin: 0px;
}
/deep/ .el-input__inner {
  height: 56px;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  background: #f0f0f0;
  // border: 1px solid #00755F;

  // @include sizeForm(406px, 56px);
}

.item-group {
  .el-input {
    width: 191px;
    padding-top: 63px;
  }
}
.el-checkbox {
  display: flex;
  justify-content: flex-start;
}
.el-button {
  @include sizeForm(100%, 56px);
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  background-color: $btnColor;
  color: #f0f0f0;
  margin-bottom: 94px;
  margin-top: 44px;
}
.el-button:hover {
  @extend .el-button;
}
.el-button:focus {
  @extend .el-button;
}
/deep/ .el-link--inner {
  color: $btnColor;
}
// phone number input
/deep/ .vti__dropdown-list.below {
  font-size: 14px;
  width: 200px;
}
.vue-tel-input {
  border: 1px solid white;
  border-radius: 10px;
  background-color: white;
  @include sizeForm(100%, 56px);
  ::placeholder {
    color: #c0c4cc;
    text-indent: 15px;
  }
}

/deep/ .vue-tel-input:focus-within {
  border-color: white;
  -webkit-box-shadow: none;
  box-shadow: none;
}
/deep/ .vti__dropdown {
  @include sizeForm(84px, 56px);
  padding: 0px;
  border: 0px solid #f0f0f0;
  background-color: #f0f0f0;
  border-radius: 10px;
}
/deep/ .vti__input {
  justify-content: flex-end;
  @include sizeForm(298px, 56px);
  border: 0px solid #f0f0f0;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 0px;
  margin-left: 52px;
  text-indent: 15px;
}

/deep/ .vti__selection {
  padding: 0px 15px;
}
.aready {
  display: flex;
  justify-content: center;
}
/deep/ .is-checked {
  color: red;
}
.el-link.is-underline:hover:after {
  border-bottom: none;
}
.el-link {
  font-size: 16px;
  margin-left: 5px;
}
</style>