<template>
  <h3>
    <h2>算法实践_20230424</h2>
    <ol>
      <li>
        请你编写一段可应用于所有数组的代码，使任何数组调用 array. groupBy(fn) 方法时，它返回对该数组 分组后 的结果。
        数组 分组 是一个对象，其中的每个键都是 fn(arr[i]) 的输出的一个数组，该数组中含有原数组中具有该键的所有项。
        提供的回调函数 fn 将接受数组中的项并返回一个字符串类型的键。
        每个值列表的顺序应该与元素在数组中出现的顺序相同。任何顺序的键都是可以接受的。
        请在不使用 lodash 的 _.groupBy 函数的前提下解决这个问题。
      </li>
    </ol>
  </h3>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // 输入：arr = [0,10,20,30],

  //  输出： [20,30]
  const array = [{ id: "1" }, { id: "1" }, { id: "2" }];
  const fn = function(item) {
    return item.id;
  };
  console.log(getData(array, fn));
});

/***
 * @param arr 目标数组
 * @param fn 过滤函数
 */
const getData = (arr, fn) => {};
</script>
