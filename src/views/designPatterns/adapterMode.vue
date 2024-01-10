<template>
  <h3>
    <h2>适配器模式 - 将一个类的接口转换成用户希望的另一个接口，适配器模式让那些接口不兼容的类可以一起工作</h2>
    <ol>
      <li>使用实例：如果要把ajax升级成dojo，就没有$.ajax方法，需要修改很多代码，可以通过适配器模式，增加自定义方法</li>
    </ol>
    <h3>
      <el-button @click="getAjax">调用ajax方法</el-button>
      <el-card class="modal">这是一个弹出框</el-card>
    </h3>
  </h3>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  class TencentMap {
    show() {
      console.log("开始渲染腾讯地图");
    }
  }
  class BaiduMap {
    display() {
      console.log("开始渲染百度地图");
    }
  }

  // 适配器类 => 在不同的环境下兼容工作
  class TencentAdapter extends TencentMap {
    constructor() {
      super();
    }
    display() {
      this.show();
    }
  }
  const renderMap = map => {
    map.display();
  };
  console.log(new BaiduMap());
  console.log(new TencentAdapter());
  renderMap(new TencentAdapter());
  renderMap(new BaiduMap());
});
// ajax => dojo 就没有$.ajax方法，需要修改很多代码，可以通过适配器模式
// 在dojo中写入一个对象
const $ = {
  // 在ajax中适配dojo的语法，外部调用还是使用$.ajax，抹平了在dojo环境下没有$.ajax方法
  ajax() {
  }
};

const getAjax = () => {
  $.ajax();
};
</script>

