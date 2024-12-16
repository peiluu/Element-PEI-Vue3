<template>
  <div class="main-content">
    <div class="content-title">css操作</div>
    <code>
      <pre>
        以下CSS: 查找子孙元素中含有class为a的，隐藏该
        <div class="a">1<div><span></span></div></div>
      </pre>
    </code>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  const arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
  console.log(getResult(arr))
});

const getResult = (arr) => {
  const result = [];
  const flatten = (list) => {
    list.map((item) => {
      if (Array.isArray(item)) {
        flatten(item)
      } else {
        result.push(item)
      }
    })
  }
  flatten(arr)
  const finallyResult = [...new Set(result)].sort((a, b) => a - b)
  return finallyResult
};

</script>

