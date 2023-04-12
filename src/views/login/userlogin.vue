<template>
  <el-form
    class="login-form"
    status-icon
    :rules="loginRules"
    ref="loginForm"
    :model="loginForm"
    label-width="0"
  >
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" auto-complete="off" placeholder="请输入手机号/纳税人识别号码">
        <!-- <i slot="prefix" class="icon-yonghu"></i> -->
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        :type="passwordType"
        v-model="loginForm.password"
        auto-complete="off"
        placeholder="请输入密码"
      >
        <!-- <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i> -->
        <!-- <i slot="prefix" class="icon-mima"></i> -->
      </el-input>
    </el-form-item>

    <el-form-item prop="verCode">
      <el-row :gutter="20">
        <el-col :span="14">
          <el-input v-model="loginForm.verCode" placeholder="验证码" @keyup.enter="handleLogin">
            <span slot="prefix" class="el-input__icon">
              <svg class="icon-svg" aria-hidden="true">
                <use xlink:href="#icon-safetycertificate" />
              </svg>
            </span>
          </el-input>
        </el-col>
        <el-col :span="10" class="login-captcha">
          <img class="login-code" :src="captchaPath" @click="getCaptcha()" />
        </el-col>
      </el-row>
    </el-form-item>
    <!--<el-checkbox v-model="checked">记住账号</el-checkbox>-->
    <el-form-item>
      <el-button type="primary" @click.prevent="handleLogin" class="login-submit">登录</el-button>
    </el-form-item>
    <div class="register-text" @click="register">还没有账号？马上注册</div>
  </el-form>
</template>

<script>
import { isvalidUsername } from "@/utils/validate";
import { baseURL } from "@/config";

import cookies from "@/utils/cookies";
import { ElMessage } from "element-plus";
import { getUUID } from "@/utils";
import { getCaptcha, login } from "./api";

export default {
  name: "userLogin",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error("请输入正确的账号"));
      } else {
        callback();
      }
    };

    return {
      loginForm: {
        username: "rootroot",
        password: "123456"
      },
      checked: false,
      captchaPath: "",
      code: {
        src: "",
        value: "",
        len: 4,
        type: "text"
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "密码长度最少为6位", trigger: "blur" }
        ]
        // verCode: [
        //   { required: true, message: "请输入验证码", trigger: "blur" },
        //   { min: 4, max: 4, message: "验证码长度为4位", trigger: "blur" },
        // ],
      },
      passwordType: "password"
    };
  },
  created() {
    this.getCaptcha();
    // window.location.replace('#/register')
  },
  props: [],
  methods: {
    // 获取验证码
    async getCaptcha() {
      const data = await getCaptcha();
      this.captchaPath = "data:image/gif;base64," + data.captcha;
      this.loginForm.uuid = data.uuid;
    },

    showPassword() {
      this.passwordType === ""
        ? (this.passwordType = "password")
        : (this.passwordType = "");
    },
    // 登录
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        cookies.set("uuid", 111);
        cookies.set("token", 111);
        cookies.set("userName", 111);
        this.$router.push({ path: "/custom/home" });
      });
    },
    register() {
      this.$router.push({
        path: "/register"
      });
    }
  }
};
</script>
<style scoped lang="scss">
.login-form {
  .register-text {
    text-align: center;
    cursor: pointer;
  }

  .login-code {
    height: 40px - 2px;
    display: block;
    margin: 0px -10px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
}
</style>
