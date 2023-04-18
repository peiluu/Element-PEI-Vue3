<template>
  <h3>
    <h2>发布订阅模式 - 观察者和目标要互相知道，发布者和订阅者不用相互知道，通过第三方实现调度。属于经过解耦合的观察者模式</h2>
    <ol>
      <li></li>
    </ol>
    <h3>
      <el-card>
        <ul class="left">
          <li>首页</li>
          <li>用户管理</li>
          <li>信息管理</li>
          <li>数据管理</li>
        </ul>
        <div>
          <header>
            当前页面路径:
            <span class="header"></span>
          </header>
          <div>
            页面内容:
            <span class="bread"></span>
          </div>
        </div>
      </el-card>
    </h3>
  </h3>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // getData();
  getData1();
  getExample();
});

/**
 * @description 简单订阅发布
 * @param subscribe 订阅
 * @param publish 发布
 */
const getData = () => {
  const PubSub = {
    list: [],
    publish() {
      this.list.map(item => {
        item();
      });
    },
    subscribe(cb) {
      this.list.push(cb);
    }
  };
  function testA() {
    console.log("testA");
  }
  function testB() {
    console.log("testB");
  }
  PubSub.subscribe(testA);
  PubSub.subscribe(testB);
  PubSub.publish();
};

/**
 * @description 带名字的订阅发布，实现 条件筛选
 * @param subscribe 订阅
 * @param publish 发布
 */
const getData1 = () => {
  const PubSub = {
    message: {},
    // 发布
    publish(type, data) {
      if (!this.message[type]) return;
      this.message[type].map(item => {
        item(data);
      });
    },
    subscribe(type, cb) {
      // 初始化数组的时候直接赋值
      !this.message[type]
        ? (this.message[type] = [cb])
        : this.message[type].push(cb);
    },
    // 取消订阅
    unSubscribe(type, cb) {
      if (!this.message[type]) return;
      if (!cb) {
        // 取消当前所有的type事件
        this.message[type] && (this.message[type].length = 0);
      } else {
        this.message[type] = this.message[type].filter(item => item !== cb);
      }
    }
  };
  function testA(data) {
    console.log("testA", data);
  }
  function testB(data) {
    console.log("testB", data);
  }
  function testC(data) {
    console.log("testC", data);
  }
  PubSub.subscribe("AAA", testA);
  PubSub.subscribe("AAA", testC);
  PubSub.subscribe("BBB", testB);
  // 取消一个
  PubSub.unSubscribe("BBB", testB);
  // 取消全部订阅
  PubSub.unSubscribe("AAA");
  PubSub.publish("AAA", 11);
  PubSub.publish("AAA", 3333);
  PubSub.publish("BBB", 22);
  PubSub.publish("BBB", 22);
};

/**
 * @description 实际案例应用，实现侧边栏的改变和面包屑的页面的联动
 */

const getExample = () => {
  const PubSub = {
    message: {},
    // 发布
    publish(type, data) {
      if (!this.message[type]) return;
      this.message[type].map(item => {
        item(data);
      });
    },
    subscribe(type, cb) {
      // 初始化数组的时候直接赋值
      !this.message[type]
        ? (this.message[type] = [cb])
        : this.message[type].push(cb);
    },
    // 取消订阅
    unSubscribe(type, cb) {
      if (!this.message[type]) return;
      if (!cb) {
        // 取消当前所有的type事件
        this.message[type] && (this.message[type].length = 0);
      } else {
        this.message[type] = this.message[type].filter(item => item !== cb);
      }
    }
  };
  function testA(data) {
    console.log("testA", data);
  }
  function testB(data) {
    console.log("testB", data);
  }
  function testC(data) {
    console.log("testC", data);
  }
  // 提前订阅
  PubSub.subscribe("updateBread", function(data) {
    document.querySelector(".bread").innerHTML = data;
  });

  let oli = document.querySelectorAll(".left li");
  for (let i = 0; i < oli.length; i++) {
    oli[i].onclick = function() {
      // this指向当前点击的元素
      PubSub.publish("updateBread", this.innerHTML);
    };
  }
};
</script>
<style lang="scss">
.el-card__body {
  display: flex;
  .left {
    width: 200px;
  }
}
</style>
