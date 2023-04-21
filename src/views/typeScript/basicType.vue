<template>
  <h3>
    <h2>TS基本类型</h2>
    <ol>
      <li></li>
    </ol>
  </h3>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  // getData();
  // getData1();
  getData4();
});

const getData = () => {
  // 如果比变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
  let number = "1";
  let num: number;
  num = "1";
  number = 1; // error， 不能将类型“number”分配给类型“string”

  console.log(number);
  const arr: number[] = [1, 2, 3];
  const arr1: string[] = [1, 2, 3]; //.0 error
  // const arr 22

  let obj: unknown;
  obj = 1;

  interface options {
    name: string;
    age: number;
  }
  interface options {
    name: string;
    age: number;
  }
  type options1 = {
    name: string;
    age: number;
  };
  // type options1 = {
  //   name: string;
  //   age: number;
  // };

  // const obj: options || options1 = {
  //   name: "pl",
  //   age: 18
  // };
  console.log(obj);

  // console.log(arr);
};

const getData1 = () => {
  const fun = (num: number): number => {
    return num;
  };
  console.log(fun(1));
  enum Direction {
    NORTH,
    SOUTH,
    EAST,
    WEST
  }
  let und: undefined = undefined;
  let nul: null = null;

  let dir: Direction = Direction.NORTH;
  const fun1 = (num: number): void => {
    console.log(num);
  };
  console.log(fun(1));
};

const getData2 = () => {
  const num: number | string = 1;
  console.log(num);
};
const getData3 = () => {
  // 箭头函数定义法
  const fun = <T>(arg: T): T => {
    return arg;
  };
  const identity1: <T>(arg: T) => T = arg => {
    return arg;
  };
  // 普通函数定义发
  function identity2<T>(arg: T): T {
    return arg;
  }
};
const getData4 = () => {
  class Employee {
    constructor(user) {
      this.user = user;
    }
    // say和constructor是同等级别的函数
    say() {
      console.log(this.user)
    }
  }
  const student = new Employee({ age: 18 });
  console.log(student)
};
</script>
