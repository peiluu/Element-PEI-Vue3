<template>
  <div>1</div>
</template>

<script setup lang="ts">
import { reactive, defineProps, ref, defineEmits, watch, onMounted } from "vue";
import { ElMessage } from "element-plus";

const props = defineProps({
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
  },
  rowData: {
    type: Object,
    default: () => {}
  },

});
let checked = ref(false);
const cascaderRef = ref();

let dialogFormVisible = ref(false);
let form = reactive({ status: 1 });


const subjectProps = reactive({
  label: "subjectName",
  value: "id",
  checkStrictly: true
});

const ruleForms = ref(null);

const emit = defineEmits(["closeDialog"]);

// 监听数据的变化
watch(
  () => props.dialogFormVisible,
  (newVal) => {
    dialogFormVisible = newVal;
    // 添加固定的科目分类
    form = reactive({ ...form, subjectCate: props.subjectCate });
    // 编辑科目
    if (props.dialogStatus === "update") {
      form = reactive({ ...form, ...props.rowData });
    }
    // 新增下级科目
    if (props.dialogStatus === "addSub") {
      form = reactive({ ...form, pid: props.rowData.id });
    }
    // 判断有没有辅助核算
    checked = ref(!!props.rowData.helpCal && props.dialogStatus === "update");
  }
);

// 监听数据的变化
watch(() => {

});

onMounted(() => {
  func();
});

const func = () => {};
</script>
<style lang="scss" scoped>
.item-box {
  display: flex;
  .el-select {
    margin-left: 16px;
  }
}
</style>
