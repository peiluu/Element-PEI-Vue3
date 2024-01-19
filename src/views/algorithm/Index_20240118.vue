<template>
  <div class="main-content">
    <div class="content-title">数组操作</div>
    <code>
                  <pre>
        已知如下数组：
        var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
        编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
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
    list  .map((item) => {
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

