<template>
  <el-dialog
    :title="textMap[props.dialogStatus]"
    v-model="dialogFormVisible"
    :beforeClose="cancel"
  >
    <el-form
      :model="form"
      :rules="rules"
      label-width="100px"
      ref="ruleForms"
      class="dialogDetail-form"
    >
      <el-form-item label="摘要" prop="abstracts">
        <el-input v-model="form.abstracts" placeholder="请输入摘要" />
      </el-form-item>

      <el-form-item label="科目" prop="subjectName">
        <el-select v-model="form.subjectName" placeholder="请选择">
          <el-option
            v-for="(item, index) in subjectList"
            :key="index"
            :label="item?.subjectName"
            :value="item?.subjectName"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="借贷" prop="dcdirection">
        <el-select v-model="form.dcdirection" placeholder="请选择" disabled>
          <el-option :value="0" label="借"></el-option>
          <el-option :value="1" label="贷"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="协助核算" prop="helpCal">
        <el-select v-model="form.helpCal" placeholder="请选择">
          <el-option
            v-for="item in props.helpCalList"
            :key="item.id"
            :label="item.helpCalName"
            :value="item.helpCalName"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { reactive, defineProps, ref, defineEmits, onMounted, watch } from "vue";
import { findTaxSubjectRule } from "../../api/voucherRule.js";
import { useMousePosition } from "./useHooks";

const props = defineProps({
  dialogStatus: {
    type: String,
    default: "",
  },
  dialogFormVisible: {
    type: Boolean,
    default: false,
  },
  rowData: {
    type: Object,
    default: () => {},
  },
  list: {
    type: Array,
    default: () => [],
  },
  helpCalList: {
    type: Array,
    default: () => [],
  },
});
const { textMap, rules, sum } = useMousePosition();

let form = reactive({});

let subjectList = reactive([]);
let dialogFormVisible = ref(false);

const ruleForms = ref(null);
const emit = defineEmits(["closeDialog"]);

onMounted(() => {
  getSubject();
  sum();
});

// 监听所选科目的变化，给借贷方向赋值
watch(
  () => form.subjectName,
  (newVal) => {
    const { dcdirection = "" } =
      subjectList.find((item) => item?.subjectName === newVal) || {};
    form.dcdirection = dcdirection;
  }
);

// 监听弹窗状态的变化
watch(
  () => props.dialogFormVisible,
  (newVal) => {
    dialogFormVisible = newVal;
    form =
      props.dialogStatus === "update"
        ? reactive({ ...form, ...props.rowData })
        : reactive({});
  }
);

// 获取科目规则
const getSubject = () => {
  findTaxSubjectRule().then((response) => {
    subjectList = response.rows;
  });
};

const handleSubmit = () => {
  ruleForms.value.validate((valid) => {
    if (!valid) return false;
    if (
      props.dialogStatus === "create" &&
      props.list.findIndex((item) => item.subjectName === form.subjectName) > -1
    ) {
      ElMessage({
        message: "请勿添加重复的科目",
        type: "error",
        duration: 5 * 1000,
      });
      return;
    }
    emit("closeDialog", form, true);
    form = {};
  });
};

const cancel = () => {
  form = {};
  emit("closeDialog", false);
};
</script>
<style lang="scss" scoped>
.p-page {
  .m-title {
    margin: 0 16px 24px;
  }
  .m-footer {
    margin: 32px 0 32px 33%;
  }
}
</style>
