<template>
  <div class="app-main">
    <transition name="fade" mode="out-in">
      <!-- <tags-view></tags-view> -->
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import LgtBreadcrumb from "@/components/lgt-breadcrumb";

export default {
  name: "AppMain",
  components: {
    LgtBreadcrumb
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    },
    key() {
      return this.$route.fullPath;
    }
  }
};
</script>
