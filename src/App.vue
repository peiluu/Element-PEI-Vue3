<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive v-if="route.meta.keepAlive">
      <component :is="Component" />
    </keep-alive>
    <component v-else :is="Component" />
  </router-view>
</template>


<script>
import { Options, Vue } from 'vue-class-component';
// import HelloWorld from './components/HelloWorld.vue';

// @Options({
//   components: {
//     HelloWorld,
//   },
// })
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
