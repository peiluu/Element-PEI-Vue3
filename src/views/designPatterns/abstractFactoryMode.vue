<template>
  <h3>
    <h2>抽象工厂模式 - 抽象工厂模式并不直接生产实例，而是用于对产品类簇的创建</h2>
    <ol>
      <li>抽象工厂模式基于面向对象的继承和重写，更加灵活和松散，能够更好的解耦</li>
      <li>更加符合设计模式的初衷和原则，对于扩展开放，对于修改关闭</li>
      <li>抽象工厂模式并不是直接创建实例，而是你要处理的类</li>
    </ol>
  </h3>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  abstractFactoryMode();
});
// es6 => 使用class类
const abstractFactoryMode = () => {
  class User {
    constructor(name, role, pages) {
      this.name = name;
      this.role = role;
      this.pages = pages;
    }
    welcome() {
      console.log("欢迎回来，", this.name);
    }
    dataShow() {
      throw new Error("抽象方法需要被实现");
    }
  }

  class SuperAdmin extends User {
    constructor(name) {
      super(name, "superadmin", ["home", "root-manage"]);
    }
    dataShow() {
      console.log("superadmin-dataShow");
    }
    addRoot() {}
    addUser() {}
  }
  class Admin extends User {
    constructor(name) {
      super(name, "superadmin", ["home"]);
    }
    dataShow() {
      console.log("superadmin-dataShow");
    }
    addRoot() {}
    addUser() {}
  }
  // 获得抽象的函数工厂
  function getAbstractFactory(role) {
    switch (role) {
      case "superadmin":
        return SuperAdmin;
      case "admin":
        return Admin;
    }
  }
  // 返回类
  const UserClass = getAbstractFactory("superadmin");
  console.log(UserClass);
  console.log(new UserClass("lida"));
};

const getData = () => {

}
</script>
