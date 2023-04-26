<template>
  <h3>
    <h2>原型模式 - 将冗余代码进行复用并可以节约内存空间</h2>
    <el-card></el-card>
  </h3>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // getClassData();
  getPrototypeData();
  // getData();
});

const getClassData = () => {
  // 借用ES6的class，class类相当于是把构造器模式和原型模式结合在一起
  class Employee {
    // 构造器处理变量
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    // 原型处理方法，挂载在原型下的方法new的时候不会被重复创建
    say() {
      console.log("hi", this.name);
    }
  }

  const lili = new Employee("lili", 18);
  const luch = new Employee("luch", 20);
  console.log(lili);
  lili.say();
  luch.say();
};

const getPrototypeData = () => {
  // 借用构造函数
  function Employee(name, age) {
    this.name = name;
    this.age = age;
  }
  // 原型模式下，构造函数只有一个原型，方法挂载在构造函数的原型上，new的时候不会重新创建函数
  Employee.prototype.say = function() {
    console.log("hi", this.name);
  };
  const lili = new Employee("lili", 18);
  const luch = new Employee("luch", 20);
  // console.log(lili);
  // 对象的__proto__指向其构造函数的prototype
  // console.log(Employee.prototype);
  // console.log(lili.__proto__);
  // Employee构造函数本质上也是一个对象，它的__proto__也指向它的构造函数Function
  // console.log(Employee.__proto__);
  // console.log(Function.prototype);
  console.log(Function.__proto__);
  console.log(Function.prototype);
  // lili.say();
  // luch.say();
};

const getData = () => {
  // 借用构造函数
  function Employee(name, age) {
    this.name = name;
    this.age = age;
    // 构造器模式下，每次new都要生成一个新的重复的say, 浪费了空间
    this.say = function() {
      console.log("hi", this.name);
    };
  }
  const lili = new Employee("lili", 18);
  const luch = new Employee("luch", 20);
  console.log(lili);
  lili.say();
  luch.say();
};

const getData4 = () => {
  class Employee {
    constructor(age) {
      this.age = age;
    }
    // say和constructor是同等级别的函数
    say() {
      console.log(this.age);
    }
  }
  const student = new Employee(18);
  const teacher = new Employee();

  class User extends Employee {
    // 继承了父类的元素
    constructor(age, sex) {
      super(age);
      this.sex = sex;
    }
  }

  const Lucy = new User(12, "M");
  console.log(Lucy);
  Lucy.say();
};
</script>
