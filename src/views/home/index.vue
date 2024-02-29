<template>
  <div class="main-content">
    <div>
      <el-button type="primary" @click="changeLocale('zh')">切换为中文</el-button>
      <el-button type="primary" @click="changeLocale('zh')">切换为中文</el-button>
      <el-button @click="changeLocale('en')">切换为英文</el-button>
    </div>

    <ul>
      <li>{{ $t("navigateBar.hotspot") }}</li>
      <li>{{ $t("navigateBar.experience") }}</li>
      <li>{{ $t("navigateBar.focus") }}</li>
      <li>{{ $t("navigateBar.recommend") }}</li>
    </ul>
    <ol>
      <li>{{ $t("tabs.work") }}</li>
      <li>{{ $t("tabs.private") }}</li>
      <li>{{ $t("tabs.collect") }}</li>
      <li>{{ $t("tabs.like") }}</li>
    </ol>
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
</script>
