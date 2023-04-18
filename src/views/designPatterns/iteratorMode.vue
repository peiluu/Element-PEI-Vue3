<template>
  <h3>
    <h2>迭代器模式 - 迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而不需要暴露该对象的各个元素。</h2>
    <ol>
      <li>迭代器模式可以把迭代的过程从业务逻辑中分离出来</li>
      <li>在使用迭代器模式之后，不关心对象的内部构造，也可以按顺序访问其中的每个元素</li>
      <li>应用1：为遍历不同数据结构的"集合"提供统一的接口</li>
      <li>应用2：能遍历访问“集合”数据中的项，不关心项的数据结构</li>
    </ol>
  </h3>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // getData();
  // getData1();
  getData2();
});

const getData = () => {
  // 无论是什么格式的数据，都能按顺序访问
  const dataEach = (arr, callBack) => {
    for (let i = 0; i < arr.lengt; i++) {
      callBack(i, arr[i]);
    }
  };
  dataEach([12, 30], (key, value) => {
    console.log(key);
  });
};

// es6 Iterator
const getData1 = () => {
  // Array, map, set, String, arguments, nodeList部署Iterator接口，能够被for...of 遍历
  const arr = [1, 2, 3];
  let it = arr[Symbol.iterator]();
  console.log(it.next());
  const obj = {
    0: "lili",
    length: 1,
    // 手动安装迭代器接口
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
  };
  for (let key of obj) {
    console.log(key);
  }
  console.log(obj);
};

// 让任意对象的格式支持for...of 访问
const getData2 = () => {
  // Array, map, set, String, arguments, nodeList部署Iterator接口，能够被for...of 遍历
  const obj = {
    code: 200,
    name: "KONA",
    list: ["aaa", "bbb", "ccc"],
    // 手动安装迭代器接口
    [Symbol.iterator]: function() {
      let index = 0;
      return {
        next: () => {
          if (index < this.list.length) {
            return {
              value: this.list[index++],
              done: false
            };
          } else {
            return {
              value: undefined,
              done: true
            };
          }
        }
      };
    }
  };
  let it = obj[Symbol.iterator]();
  console.log(it.next());

  for (let key of obj) {
    console.log(key);
  }
  // console.log(obj);
};
</script>
