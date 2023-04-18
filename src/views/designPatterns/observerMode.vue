<template>
  <h3>
    <h2>观察者模式 - 包含观察的目标和观察者两类对象（1 => N）</h2>
    <ol>
      <li>一个对象可以有任意数目的与之相依赖的观察者</li>
      <li>一旦观察的目标的状态发生改变，所有的观察者都将得到通知</li>
      <li>当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新，解决了主体对象和观察者之间功能的耦合，即一个对象状态改变给其他对象通知的问题</li>
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
  getExample();
});

/**
 * @description 教学案例
 */
const getData = () => {
  class Subject {
    constructor() {
      // 收集所有的观察者
      this.observers = [];
    }
    add(observer) {
      this.observers.push(observer);
    }
    remove(observer) {
      this.observers = this.observers.filter(item => item !== observer);
    }
    notify() {
      console.log(this.observers);
      this.observers.forEach(item => {
        item.update();
      });
    }
  }
  // 观察者
  class Observer {
    constructor(name) {
      this.name = name;
    }
    update() {
      console.log(this.name + "update");
    }
  }
  const subject = new Subject();
  const observer1 = new Observer("lili");
  const observer2 = new Observer("nana");

  subject.add(observer1);
  subject.add(observer2);
  subject.remove(observer2);
  subject.notify();
  console.log(subject.observers[0].name);
};

/**
 * @description 实际案例应用，实现侧边栏的改变和面包屑的页面的联动
 */

const getExample = () => {
  class Subject {
    constructor() {
      // 收集所有的观察者
      this.observers = [];
    }
    // 添加观察者
    add(observer) {
      this.observers.push(observer);
    }
    // 移除观察者
    remove(observer) {
      this.observers = this.observers.filter(item => item !== observer);
    }
    // 发送提示消息
    notify(data) {
      this.observers.forEach(item => {
        // 提示每一位观察者去执行一段操作
        item.update(data);
      });
    }
  }
  class Observer {
    constructor(name) {
      this.name = name;
      this.ele = document.querySelector(name);
    }
    update(data) {
      this.ele.innerHTML = data;
    }
  }
  const subject = new Subject();
  const observer1 = new Observer(".bread");
  const observer2 = new Observer(".header");
  subject.add(observer1);
  subject.add(observer2);

  let oli = document.querySelectorAll(".left li");
  for (let i = 0; i < oli.length; i++) {
    oli[i].onclick = function() {
      // this指向当前点击的元素
      console.log(this);
      subject.notify(this.innerHTML);
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
