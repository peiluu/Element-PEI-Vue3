<template>
  <h3>
    <h2>桥接模式 - 将抽象部分与它的实现部分分离，使他们都可以独立变化（使用抽象类和方法是实现）</h2>
    <ol>
      <li>使用场景：一个类存在两个或多个独立变化的维度，且这两个维度都需要进行拓展</li>
      <li>优点：把抽象和实现隔离开，有助于独立地管理各部分</li>
      <li>缺点：每使用一个桥接元素都要增加一次函数调用，这对应用程序的性能会有一些负面影响 - 提高了系统的复杂度</li>
    </ol>
  </h3>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // getData();
  getExample();
});

/**
 * @description 教学案例
 */
const getData = () => {
  function Aodi1(engine) {
    this.engine = engine;
  }
  Aodi1.prototype.platform = function() {
    console.log("aodi1 平台");
  };
  Aodi1.prototype.loadEngine = function() {
    console.log(this);
    // this.engine.run();
  };
  function Aodi2(engine) {
    this.engine = engine;
  }
  // 各种平台和方法互相分割，组合
  Aodi2.prototype.platform = function() {
    console.log("aodi2 平台");
  };
  Aodi2.prototype.loadEngine = function() {
    console.log(this);
    // this.engine.run();
  };

  function V6() {
    this.run = function() {
      console.log("V6 发动机");
    };
  }
  function V8() {
    this.run = function() {
      console.log("V8 发动机");
    };
  }
  new Aodi1({}).loadEngine();
  new Aodi1(new V6()).loadEngine();
  new Aodi1(new V8()).loadEngine();
};

/**
 * @description 实际案例应用，实现不同的组件的不同的动画效果
 */
const getExample = () => {
  // 具体实现的逻辑分离出来集中放在统一平台中, 搭一个桥使抽象和实现连接起来
  const Animations = {
    bounce: {
      show(ele) {
        console.log(ele, "弹跳显示");
      },
      hide(ele) {
        console.log(ele, "弹跳隐藏");
      },
    },
    slide: {
      show(ele) {
        console.log(ele, "滑动显示");
      },
      hide(ele) {
        console.log(ele, "弹跳隐藏");
      }
    },
    rotate: {
      show(ele) {
        console.log(ele, "旋转显示");
      },
      hide(ele) {
        console.log(ele, "旋转隐藏");
      }
    }
  };

  function Toast(ele, animation) {
    // 将传入构造函数中的参数放在this上统一管理，方便在其他地方访问
    this.ele = ele;
    console.log(this)
    this.animation = animation;
  }
  Toast.prototype.show = function () {
    console.log(this)

    // 抽象
    this.animation.show(this.ele);
  };
  Toast.prototype.hide = function() {
    // 抽象
    this.animation.hide(this.ele);
  };
  const toast1 = new Toast("div", Animations.bounce);
  toast1.show();
  setTimeout(() => {
    toast1.hide();
  }, 1000);
};
</script>
