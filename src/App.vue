<template>
  <div id="app">
    <router-view class="app-router-view">
    </router-view>
  </div>
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
