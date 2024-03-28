<template>
  <el-config-provider :locale="locale">
    <router-view v-slot="{ Component, route }">
      <keep-alive v-if="route.meta.keepAlive">
        <component :is="Component" />
      </keep-alive>
      <component v-else :is="Component" />
    </router-view>
  </el-config-provider>
</template>font-weight


<script>
import { Options, Vue } from 'vue-class-component';
import { ElConfigProvider } from "element-plus";//！！！！！！
import { defineComponent } from 'vue'

import zhCn from "element-plus/lib/locale/lang/zh-cn"


export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      locale: zhCn,
    }
  },
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
