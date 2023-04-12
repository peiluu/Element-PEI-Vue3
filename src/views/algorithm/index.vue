<template>
  <ol>
    <li>给定一个任意嵌套结构的对象如下，使用你熟悉的算法，将对象的属性按照层级输出到一个数组中.如下：</li>
    <!-- <li>
      给定一个任意嵌套结构的对象如下，使用你熟悉的算法，将对象的属性按照层级输出到一个数组中.如下：
    </li>-->
  </ol>
</template>

<script setup lang="ts">
import {
  reactive,
  defineProps,
  ref,
  defineEmits,
  watch,
  onMounted,
  watchEffect
} from "vue";
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
onMounted(() => {
  getResult();
});
// 给定一个任意嵌套结构的对象如下，使用你熟悉的算法，将对象的属性按照层级输出到一个数组中
const getResult = () => {
  // 输入一个对象
  const obj = {
    a: {
      b: {
        c: 1,
        e: 3
      },
      d: 2
    }
  };
  const result = [];
  const fun = (obj, depth) => {
    for (const key in obj) {
      result[depth] ? result[depth].push(key) : (result[depth] = [key]);
      // 循递归
      if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
        fun(obj[key], depth + 1);
      }
    }
    return result;
  };
  console.log(fun(obj, 0));
  // 输出一个数组
};
</script>
<style lang="scss" scoped>
.item-box {
  display: flex;
  .el-select {
    margin-left: 16px;
  }
}
</style>
