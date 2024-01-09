<template>
  <div class="main-content">    
    <div class="content-title">setup</div>
    <div><el-input /></div>
  </div>
</template>

<script setup lang="ts" name="Index_20240108">
import { de, tr } from 'element-plus/es/locale';
import { ref, onMounted, watch } from 'vue'
// 生命周期
onMounted(() => {
  init();
});

let count = ref(0)
let refObj: any = ref({ a: 1 })

const init = () => {
  count = 1
  setInterval(() => {
    count++
    refObj.b = 2

  }, 1000)
}
// 组合式api, 所有的数据和操作都在一起，聚合操作
let radioList = ref([1])
const onChange = () => {
  radioList.forEach((item) => {

  })
}
watch(radioList, (newVal, oldVal) => {

}, {
  deep: true,
  immediate: true, // 立即监视, 初始化执行oldVal undefined
})


</script>
