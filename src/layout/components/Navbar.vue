<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <el-menu class="c-navbar" mode="horizontal">
    <div class="m-left">
      <lgt-hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened" />
      <lgt-breadcrumb />
    </div>

    <div class="m-right">
      <el-icon :size="20">
        <User />
      </el-icon>
      <span>{{ userName }}</span>
      <el-button link type="primary" @click="logout">注销</el-button>
    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
import LgtHamburger from "@/components/lgt-hamburger";
import LgtBreadcrumb from "@/components/lgt-breadcrumb";

import cookies from "@/utils/cookies";
import { ElMessageBox } from "element-plus";

// import request from "@/utils/request";

export default {
  name: "navBar",
  components: {
    LgtHamburger,
    LgtBreadcrumb
  },
  data() {
    return {
      showChange: false,
    };
  },
  mounted() { },
  computed: {
    ...mapGetters(["sidebar", "name", "avatar", "userInfo"]),
    userName() {
      return cookies.get("userName");
    },
    // 主体企业名称
    qymc() {
      return cookies.get("qymc");
    },
    // 账套名称
    accountSetName() {
      return cookies.get("accountSetName");
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("ToggleSideBar");
    },

    logout() {
      ElMessageBox.confirm("确定要注销吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$store.dispatch("LogOut").then(() => {
            cookies.remove("token");
            cookies.remove("uuid");
            setTimeout(() => {
              this.$router.push({
                path: "/login",
              });
            }, 1000);
          });
        })
        .catch(() => { });
    },
  },
};
</script>

<style lang="scss" scoped>
.c-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  line-height: 50px;
  border-radius: 0px !important;
  padding: 0 16px;

  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding-right: 16px;
  }

  .m-left {
    display: flex;
    align-items: center;
  }

  .m-right {
    display: flex;
    align-items: center;
    height: 100%;

    span {
      padding: 0 4px;
    }
  }
}
</style>
