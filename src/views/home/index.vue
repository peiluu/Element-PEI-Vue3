<template>
  <div class="main-content">
    这个一个首页
  </div>
</template>

<script setup lang="ts">
import { reactive, defineProps, ref, watch, onMounted, watchEffect } from "vue";
import { ElMessage } from "element-plus";

const a = {};
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
  console.log(1);
});
const dobblue: object = reactive({
  a: "1"
});
console.log(dobblue);

onMounted(() => {
  ElMessage({
    message: "欢迎来到首页",
    type: "success"
    // duration: 5 * 1000
  });
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
