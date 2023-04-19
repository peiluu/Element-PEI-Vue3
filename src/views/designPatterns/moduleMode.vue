<template>
  <div>
    <h2>模块模式 - 最初被定义为在传统软件工程类提供私有和公共封装的一种方法</h2>
    <h3>
      <ol>
        <li>能够使一个单独的对象拥有公共 / 私有的方法</li>
        <li>ES6 模块化语法 export / import </li>
        <li>ES5 模块化语法 modules.exports = {} / require </li>
      </ol>
    </h3>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  console.log(getData("A", 10000));
});

const strategry = {
  A: salary => salary * 4,
  B: salary => salary * 3,
  C: salary => salary * 2,
  D: salary => salary * 1
};

// 策略算法 => 增加逻辑的时候只需要添加策略算法，不需要改变具体的应用代码
const listMap = {
  1: {
    text: "已通过",
    bgItem: "green"
  },
  2: {
    text: "审核中",
    bgItem: "yellow"
  },
  3: {
    text: "未通过",
    bgItem: "red"
  }
};

const getData = (level, salary) => {
  return strategry[level](salary);
};
</script>
