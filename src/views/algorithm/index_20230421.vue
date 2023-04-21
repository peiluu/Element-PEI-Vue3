<template>
  <h3>
    <h2>算法实践_20230421</h2>
    <ol>
      <li>查找字符串中的最长公共前缀</li>
    </ol>
  </h3>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  getData();
});

/***
 * @param arr 目标数组
 * @returns 最长公共前缀
 */
const getData = () => {
  const arr = ["flower", "flow", "flight"];
  let result = "";
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // j === arr.length - 1是为了限制此字符串只在循环的最后一次赋值给result
      if (arr[0][i] === arr[j][i] && j === arr.length - 1) {

        result += arr[0][i];
      }
    }
  }
  console.log(result);
};
</script>
