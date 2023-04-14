<template>
  <h3>
    <h2>单例模式 - 保证一个类仅有一个实例，并提供一个访问它的全局访问点</h2>
    <ol>
      <li>主要解决一个全局使用的类频繁得创建和销毁，占用内存</li>
    </ol>
    <h3>
      <el-button @click="showModal">打开</el-button>
      <el-card class="modal">这是一个弹出框</el-card>
    </h3>
  </h3>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  getUser();
  getUserClass();
  // showModal();
});

const getUser = (function() {
  var instance;

  function User(name, age) {
    this.name = name;
    this.age = age;
  }
  return function(name, age) {
    if (!instance) {
      instance = new User(name, age);
    }
    console.log(instance);
    return instance;
  };
})();
const getUserClass = () => {
  class Singleton {
    constructor(name, age) {
      // 如果值已存在，就不会再去改变
      if (!Singleton.instance) {
        this.name = name;
        this.age = age;
        Singleton.instance = this;
      }
      return Singleton.instance;
    }
  }
  // op的值永远是第一次实例化的对象（单例 => 单个实例化对象）
  var op = new Singleton("kobe", 19);
  var op = new Singleton("kobe", 1111);
  console.log(op);
};

//
const showModal = () => {
  // 单例模式下 => 让类的实例在当前页面中是唯一的，全局就一个访问点，重复调用重新new 也就是一个访问点
  // 避免全局对象污染
  class Model {
    constructor() {
      // 如果值已存在，就不会再去改变
      if (!Model.instance) {
        // instance = document.getElementsByTagName("button")[0];
        Model.instance = document.getElementsByClassName("modal")[0];
        Model.instance.style.display = "none";

        console.log(Model.instance);
      }
      return Model.instance;
    }
  }

  const modal = new Model();
  modal.style.display = "block";
};
</script>
<style lang="scss" scoped>
.modal {
  margin: 24px;
  display: none;
  border: 1px solid #ccc;
}
</style>
