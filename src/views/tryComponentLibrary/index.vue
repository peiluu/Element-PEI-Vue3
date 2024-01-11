<template>
  <div class="main-content">
    <div class="content-title">试用自定义组件库</div>
    <el-card class="content-card">
      <template #header>
        <div class="card-header">
          <span>季度选择器</span>
        </div>
      </template>
      <QuarterDatePicker />
    </el-card>

  </div>
</template>

<script setup lang="ts">
import { reactive, defineProps, ref, watch, onMounted, watchEffect } from "vue";
import { ElMessage } from "element-plus";
// import QuarterDatePicker from "../../../components/lib/quarterDatePicker/src/Index";
//
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

.content-card {
  width: 33%;
}
</style>
