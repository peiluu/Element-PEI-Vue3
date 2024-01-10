<template>
  <div class="main-content">
    <div class="content-title">试用自定义组件库</div>
    <QuarterDatePicker :pickerType="'季'" />
  </div>
</template>

<script setup lang="ts">
import { reactive, defineProps, ref, watch, onMounted, watchEffect } from "vue";
import { ElMessage } from "element-plus";

const props: String = defineProps({
  dialogStatus: {
    type: String,
    default: ""
  },
  dialogFormVisible: {
    type: Boolean,
    default: false
  },
  subjectCate: {
    type: Number,
    default: 0
  },
  subjectCateList: {
    type: Array
  }
});
let checked = ref(false);

// 监听数据的变化
watch(checked, val => {
  console.log(111, val);
});
interface dobblueType {
  a: string;
}
watchEffect(() => {
});
const dobblue: object = reactive({
  a: "1"
});

onMounted(() => {
  // ElMessage({
  //   message: "欢迎来到首页",
  //   type: "success"
  //   // duration: 5 * 1000
  // });
});
</script>
<style lang="scss" scoped>
.item-box {
  display: flex;

  .el-select {
    margin-left: 16px;
  }
}
</style>
