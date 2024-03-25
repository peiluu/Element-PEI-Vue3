<template>
  <h3>
    <h2>
      职责链模式 -
      使多个对象都有机会处理请求，从而避免了请求的发送者与多个接收者直接的耦合关系。
      将这些接收者连接成一条链，顺着这条链传递该请求，直到找到能处理该请求的对象
    </h2>
    <ol>
      <h2>优点</h2>
      <li>符合单一职责，使每个方法中只有一个职责</li>
      <li>符合开放封闭原则，在需求增加时可以很方便得拓展新的责任</li>
      <li>在使用时不需要知道谁才是真正的处理方法，减少大量的if或switch方法</li>
    </ol>
    <ol>
      <h2>缺点</h2>
      <li>团队成员需要对责任链存在共识，s否则当看到一个方法莫名其妙的返回一个next会很奇怪</li>
      <li>出错时不好排查问题，因为不知道是哪个环节中出现的问题，需要从链头开始往后找</li>
    </ol>
    <el-card>
      <el-input v-model="password" style="width: 200" />
      <el-button @click="onHandle">注册</el-button>
    </el-card>
  </h3>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";

let password = ref();
let checks = reactive();

onMounted(() => {
  getData();
});

const onHandle = () => {
  checks.check();
};

const getData = () => {
  const checkEmpty = () => {
    if (!password.value) {
      console.log("密码不能为空");
      return;
    }
    return "next";
  };
  const checkNumber = () => {
    console.log(11111);
    if (Number.isNaN(password)) {
      console.log("密码必须是数字");
      return;
    }
    return "next";
  };

  const checkLength = () => {
    if (!password > 6) {
      console.log("密码必须长度必须大于6位");
      return;
    }
    return "1";
  };

  class Chain {
    constructor(fn) {
      this.checkRule = fn;
      this.nextRule = null;
    }
    // 添加链子
    addRule(nextRule) {
      this.nextRule = nextRule;
    }
    check() {
      this.checkRule() === "next" ? this.nextRule.check() : null;
    }
  }
  checks = new Chain(checkEmpty);
  const checkNumberChain = new Chain(checkNumber);
  const checkLengthChain = new Chain(checkLength);
  checks.addRule(new Chain(checkNumber));
  checks.addRule(new Chain(checkLength));
  // 添加链条尾
  // checks.addRule({
  //   check: () => {
  //     console.log("end");
  //     return "end";
  //   }
  // });
};
</script>
<style lang="scss" scoped>
.el-card__body {
  display: flex;
  .el-input {
    width: 200px;
    margin-right: 24px;
  }
}
</style>
