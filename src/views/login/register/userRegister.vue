<template>
  <el-form
    class="p-register-form"
    status-icon
    :rules="loginRules"
    ref="form"
    :model="form"
    label-width="0"
  >
    <el-form-item prop="username">
      <el-input
        style="width: 270px"
        v-model="form.username"
        auto-complete="off"
        placeholder="请输入用户名"
      >
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        :type="passwordType"
        v-model="form.password"
        auto-complete="off"
        placeholder="请输入密码"
      >
        <i
          class="el-icon-view el-input__icon"
          slot="suffix"
          @click="showPassword"
        ></i>
        <i slot="prefix" class="icon-mima"></i>
      </el-input>
    </el-form-item>

    <el-form-item prop="name">
      <el-input
        style="width: 270px"
        v-model="form.name"
        auto-complete="off"
        placeholder="请输入姓名"
      >
        <i slot="prefix" class="icon-yonghu"></i>
      </el-input>
    </el-form-item>

    <el-form-item prop="sex">
      <el-select v-model="form.sex" placeholder="性别" clearable>
        <el-option label="男" value="男"></el-option>
        <el-option label="女" value="女"></el-option>
      </el-select>
      <!-- <el-input style="width: 270px" @keyup.enter.native="handleLogin" v-model="form.loginName" auto-complete="off" placeholder="请输入用户名">
        <i slot="prefix" class="icon-yonghu"></i>
      </el-input> -->
    </el-form-item>
    <!-- <el-form-item prop="phone">
      <el-input  @keyup.enter.native="handleLogin" v-model="form.phone" auto-complete="off" placeholder="请输入手机号码">
        <i slot="prefix" class="icon-shouji"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="code">
      <el-input @keyup.enter.native="handleLogin" v-model="form.code" auto-complete="off" placeholder="请输入验证码">
        <i slot="prefix" class="icon-yanzhengma yanzhengma" style=""></i>
        <template v-slot:append>
          <span @click="handleSend" class="msg-text" :class="[{ display: msgKey }]">{{ msgText }}</span>
        </template>
      </el-input>
    </el-form-item> -->

    <!--<el-checkbox v-model="checked">记住账号</el-checkbox>-->
    <el-form-item>
      <div class="login-text" @click="backLogin">已有账号？立即登录</div>
      <el-button
        type="primary"
        @click.prevent="handleRegister"
        class="login-submit"
        >注册</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { isvalidUsername, isvalidatemobile } from "@/utils/validate";
import { ElMessage } from "element-plus";

import { register } from "../api";

const MSGINIT = "发送验证码";
// const MSGERROR = '验证码发送失败'
const MSGSCUCCESS = "${time}秒后重发";
const MSGTIME = 60;
export default {
  name: "userRegister",
  data() {
    const validatePhone = (rule, value, callback) => {
      if (isvalidatemobile(value)[0]) {
        callback(new Error(isvalidatemobile(value)[1]));
      } else {
        callback();
      }
    };
    // const validateCode = (rule, value, callback) => {
    //   if (value.length !== 4) {
    //     callback(new Error('请输入4位数的验证码'))
    //   } else {
    //     callback()
    //   }
    // }
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };

    const validateCode = (rule, value, callback) => {
      if (this.code.value !== value) {
        this.form.code = "";
        this.refreshCode();
        callback(new Error("请输入正确的验证码"));
      } else {
        callback();
      }
    };
    return {
      msgText: MSGINIT,
      msgTime: MSGTIME,
      msgKey: false,
      form: {},
      checked: false,
      code: {
        src: "",
        value: "",
        len: 4,
        type: "text",
      },
      loginRules: {
        loginName: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "密码长度最少为6位", trigger: "blur" },
        ],
        name: {
          required: true,
          message: "请输入姓名",
        },
        sex: {
          required: true,
          message: "请选择性别",
        },
        // code: [
        //   { required: true, message: '请输入验证码', trigger: 'blur' },
        //   { min: 4, max: 4, message: '验证码长度为4位', trigger: 'blur' },
        //   { required: true, trigger: 'blur', validator: validateCode }
        // ],
        phone: [{ required: true, trigger: "blur", validator: validatePhone }],
        code: [{ required: true, trigger: "blur", validator: validateCode }],
      },
      passwordType: "password",
    };
  },
  created() {},
  mounted() {},
  computed: {},
  props: [],
  methods: {
    backLogin() {
      this.$router.replace({
        path: "/login",
      });
    },
    showPassword() {
      this.passwordType === ""
        ? (this.passwordType = "password")
        : (this.passwordType = "");
    },
    handleRegister() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          register(this.form).then(() => {
            ElMessage({
              message: "注册成功",
              type: "success",
            });
            setTimeout(() => {
              this.$router.push({ path: "/login" });
            }, 500);
          });
          // this.$store.dispatch('Login', this.form).then(res => {
          //   this.$router.push({ path: '/dashboard/dashboard' })
          // })
        }
      });
    },
    handleSend() {
      if (this.msgKey) return;
      this.msgText = MSGSCUCCESS.replace("${time}", this.msgTime);
      this.msgKey = true;
      const time = setInterval(() => {
        this.msgTime--;
        this.msgText = MSGSCUCCESS.replace("${time}", this.msgTime);
        if (this.msgTime === 0) {
          this.msgTime = MSGTIME;
          this.msgText = MSGINIT;
          this.msgKey = false;
          clearInterval(time);
        }
      }, 1000);
    },
  },
};
</script>
<style lang="scss">
.p-register-form {
  .el-form-item {
  }
  .el-select {
    width: 100%;
  }
  .login-text {
    cursor: pointer;
  }
}
</style>
