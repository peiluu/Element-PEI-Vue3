<template>
  <div class="main-content">
    <div class="content-title">大师课 - 字符串的异步替换封装</div>
    <div></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  init();
});


// 页面初始化
const init = async () => {
  String.prototype.asyncReplaceAll = async function (search, replacer) {
    return

  }
  const template = `234, 55-234_j24-455`;
  console.log(template.asyncReplaceAll())
  const result = await template.asyncReplaceAll(/\d+|\D+/g, 'name');
  console.log(result)
}
// 将数字替换成字符串(name) siok
const getName = (str) => {

}
</script>
