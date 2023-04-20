<template>
  <h3>
    <h2>构造器模式 - 将冗余代码进行复用</h2>

  </h3>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  getData();
});


const getData = () => {
  // 借用构造函数
  function Employee(name, age) {
    this.name = name;
    this.age = age;
    this.say = function() {
      console.log("hi", this.name);
    };
  }
  const lili = new Employee("lili", 18);
  const luch = new Employee("luch", 20);
  lili.say()
  luch.say()
};
</script>
