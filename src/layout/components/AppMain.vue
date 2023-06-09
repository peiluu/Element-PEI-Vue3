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
<style lang="scss" scoped>
.app-main {
  width: 100%;
  height: calc(100vh - 50px);
  padding: 12px;
  background: #fafafa;
  overflow-y: auto;

}
.main-content {
  height: 100%;
  padding: 12px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 #f0f2f5;
  background: #ffffff;

}
</style>
