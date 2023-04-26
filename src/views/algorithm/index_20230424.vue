<template>
  <h3>
    <h2>算法实践_20230424</h2>
    <ol>
      <li>
        请你编写一个函数，该函数接受一个整数数组参数 arr 和一个过滤函数 fn，并返回一个过滤后元素数量较少或元素数量相等的新数组。
        返回的数组应该只包含通过过滤函数 fn(arr[i]， i) 计算后为真值的元素。
        <p>请你在不使用内置函数 Array.filter 的前提下解决该问题。</p>
      </li>

      <li></li>
    </ol>
  </h3>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // 输入：arr = [0,10,20,30],

  //  输出： [20,30]
  const arr = [0, 10, 20, 30];
  const fn = function greaterThan10(n) {
    return n > 10;
  };

  console.log(getData(arr, fn));
});

/***
 * @param arr 目标数组
 * @param fn 过滤函数
 */
const getData = (arr, fn) => {};
</script>
