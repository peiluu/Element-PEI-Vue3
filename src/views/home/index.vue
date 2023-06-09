<template>
  <div class="main-content">
    这个一个首页
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
// 。Vue I18 是 Vue.js 的国际化插件，它可以轻松地将一些本地化功能集成到应用程序中。
const { locale } = useI18n();

// 切换语言
const changeLocale = (lang) => {
  locale.value = lang;
};


const a = () => {

}
</script>
<<<<<<< HEAD
=======
<style lang="scss" scoped>
.item-box {
  display: flex;

  .el-select {
    margin-left: 16px;
  }
}
</style>
>>>>>>> c467417 (feat: 调整目录结构)
