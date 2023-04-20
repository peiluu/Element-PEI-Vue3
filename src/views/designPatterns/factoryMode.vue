<template>
  <h2>工厂模式 - 由工厂对象决定创建某一种产品对象类的实例。主要用来创建同一类对象</h2>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  factoryMode();
  factoryModeClass();
});

// es5 => 借助构造函数
const factoryMode = () => {
  function User(role, pages) {
    this.role = role;
    this.pages = pages;
  }
  function UserFactory(role) {
    switch (role) {
      case "superadmin":
        return new User("superadmin", [
          "home",
          "user-manage",
          "root--manage",
          "message-manage"
        ]);
      case "admin":
        return new User("admin", ["home", "user-manage", "message-manage"]);
      case "editor":
        return new User("editors", ["home", "message-manage"]);
    }
    return;
  }
  const user = new UserFactory("superadmin");
  console.log(user);
};

// es6 => 使用class类
const factoryModeClass = () => {
  class User {
    constructor(role, pages) {
      this.role = role;
      this.pages = pages;
    }
    // static静态类方法，不用实例化，可以直接通过类名调用
    static UserFactory(role) {
      switch (role) {
        case "superadmin":
          return new User("superadmin", [
            "home",
            "user-manage",
            "root--manage",
            "message-manage"
          ]);
        case "admin":
          return new User("admin", ["home", "user-manage", "message-manage"]);
        case "editor":
          return new User("editors", ["home", "message-manage"]);
      }
    }
  }
  const user = User.UserFactory("admin");
  console.log(user);
  console.log(User);
};
</script>
