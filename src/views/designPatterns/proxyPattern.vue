<template>
  <div>
    <h2>代理模式（Proxy） - 为其他对象提供一种代理以控制对这个对象的访问</h2>
    <h3>
      <ol>
        <li>代理模式使得代理对象控制具体对象的引用，代理几乎可以是任何对象：文件、资源、内存中的对象，或者是一些难以复制的东西</li>
        <li>应用：ES6的new Proxy代理对象</li>
        <li>应用：Vue3数据响应式原理</li>
      </ol>
    </h3>
    <h3>
      <div id="box"></div>
    </h3>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  // getData();
  // getProxy();
  getProperty();
});

const getData = () => {
  class Star {
    play() {
      console.log("演戏");
    }
  }
  class StarProxyFather {
    // constructor(n) {
    //   this.n = n;
    // }
    // play() {
    //   console.log("演戏");
    // }
  }

  class StarProxy extends StarProxyFather {
    constructor() {
      super();
      this.superStar = new Star();
    }
    talk(price) {
      if (price > 10000) {
        this.superStar.play();
      } else {
        throw new Error("价格不合适");
      }
    }
  }
  let jr = new StarProxy();
  jr.talk(100000);
};

/**
 * 封装在源码中，开发者只需要关注最终生成的代理对象
 * Vue 基于数据驱动来更新页面，无需直接操作DOM => ES6 Proxy 数据劫持
 */
const getProxy = () => {
  let star = {
    name: "tie",
    workPrice: 100000
  };

  let proxy = new Proxy(star, {
    get(target, key) {
      if (key === "workPrice") {
        console.log("访问了");
      }
      return target[key];
    },
    set(target, key, value) {
      if (key === "workPrice") {
        console.log("设置了");
        if (value > 100000) {
          console.log("可以合作了");
        } else {
          throw new Error("价格不合适");
        }
      }
      if (key === "name") {
        document.getElementById("box").innerHTML = value;
      }

      target[key] = value;
      return true;
    }
  });

  console.log(proxy.workPrice);
  console.log(proxy.workPrice);
  proxy.name = 111;
  console.log((proxy.workPrice = 200000));
};

/**
 * 封装在源码中，开发者只需要关注最终生成的代理对象
 * Vue 基于数据驱动来更新页面，无需直接操作DOM => ES5 => defineProperty
 */
const getProperty = () => {
  let star = {
    name: "tie",
    workPrice: 100000
  };
  let property = Object.defineProperty(star, "name", {
    get() {
      console.log(`访问a`);
      return star.name;
    },
    set(value) {
      document.getElementById("box").innerHTML = value;
    }
  });
  console.log(star);
  star.name = 1;
};
</script>

