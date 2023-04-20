<template>
  <div>
    <h2>装饰器模式 - 能够很好得对已有的功能进行拓展</h2>
    <h3>
      <ol>
        <li>装饰器模式不会改变原有的代码，对其他的业务产生影响，这方便我们在较少的改动下对软件功能进行拓展</li>
        <li>抽离功能，动态注入</li>
        <li>应用：axios中的interceptors拦截器就是类似于装饰器模式，前置后置切片函数</li>
      </ol>
    </h3>
    <h3>
      <el-button @click="onClick">触发数据上报</el-button>
      <el-button @click="ajax1  ">发送带token的ajax请求</el-button>
      <el-button @click="getAjax">发送ajax请求</el-button>
    </h3>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {});

Function.prototype.before = function(beforeFn) {
  var that = this;
  return function() {
    console.log(arguments);
    // 先将前置函数调用
    beforeFn.apply(this, arguments);
    // 执行原来的函数
    return that.apply(this, arguments);
  };
};

Function.prototype.after = function(afterFn) {
  var that = this;
  return function() {
    // 执行原来的函数
    const result = that.apply(this, arguments);
    // 后置函数调用
    afterFn.apply(this, arguments);
    return result;
  };
};

const test = () => {
  console.log(111);
};
var test1 = test
  .before(function() {
    console.log("0000 ");
  })
  .after(function() {
    console.log("222222");
  });
// test1的结果是test函数的返回值
console.log(test1());
test1();

const log = () => {
  console.log("上报uv, pv数据");
};

var render = () => {
  console.log("处理页面逻辑");
};
// 分离业务逻辑和切片任务
// render = render.before(log);
// const onClick = () => {
//   render();
// };
// 处理ajax请求
const getAjax = (url, methods, params) => {
  console.log(url, methods, params);
};
const ajax1 = getAjax.before((url, methods, params) => {
  params.token = 1111111;
});
ajax1("getData", "post", { name: 1 });
</script>
