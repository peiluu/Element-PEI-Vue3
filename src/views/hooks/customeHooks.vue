<template>
  <div>
    <p>X: {{ x }}</p>
    <p>Y: {{ y }}</p>
    <p>copyX: {{ copyX }}</p>
  </div>
</template>


<script setup>
// 引入hooks
import useMousePosition from "../../hooks/useMousePosition";
 // setup只会调用一次，如果使用普通的公共函数，而不是自定义hooks, copyX的值将无法实时更新，因为不是响应式数据
const { x, y, copyX } = useMousePosition();
</script>


<!-- <script>
import { defineComponent } from "vue";
// 引入hooks

import useMousePosition from "../../hooks/useMousePosition";

export default defineComponent({
  // setup只会调用一次，如果使用普通的公共函数，而不是自定义hooks, copyX的值将无法实时更新，因为不是响应式数据
  setup() {
    const { x, y, copyX } = useMousePosition();
    return {
      x,
      y,
      copyX
    };
  }
});
</script> -->
