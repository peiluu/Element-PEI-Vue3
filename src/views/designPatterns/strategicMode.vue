<template>
  <h3>
    <h2>策略模式 - 策略模式定义一系列算法，并把每个算法封装起来，且算法的变化不会影响使用算法的客户（匹配策略）</h2>
    <ol>
      <li>策略模式属于对象行为模式</li>
      <li>该模式主要解决在多种算法相似的情况下，使用if...else所带来的复杂和难以维护</li>
      <li>它的优点是算法可以自由切换，同时可以避免多重if...else判断，具有良好的拓展性</li>
      <li>应用1：node中的路由匹配策略，不同的路由匹配不同的路由组件</li>
      <li>应用2：应用map数据结构去根据key去查找value</li>
    </ol>
  </h3>
</template>

<script setup lang="ts">
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
