<template>
  <div id="app">
    <!-- <el-config-provider :locale="zhCn">
      <router-view v-slot="{ Component }" class="app-router-view">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
    </el-config-provider> -->
    <router-view v-slot="{ Component }" class="app-router-view">
      <!-- <transition> -->
        <component :is="Component" />
      <!-- </transition> -->
    </router-view>

  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue { }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

}
</style>
