<template>
  <el-dialog
    :title="textMap[props.dialogStatus]"
    v-model="dialogFormVisible"
    :beforeClose="cancel"
    destroy-on-close
  >
    <el-form
      :model="form"
      :rules="rules"
      label-width="100px"
      ref="ruleForms"
      class="dialogDetail-form"
    >
      <el-form-item label="科目编码" prop="subjectCode">
        <el-input
          v-model="form.subjectCode"
          placeholder="请输入科目代码"
        ></el-input>
      </el-form-item>
      <el-form-item label="科目名称" prop="subjectName">
        <el-input
          v-model="form.subjectName"
          placeholder="请输入科目名称"
        ></el-input>
      </el-form-item>

      <el-form-item label="上级科目" prop="pid">
        <el-cascader
          v-model="form.pid"
          placeholder="请选择科目"
          :options="props.sujectCascadeList"
          clearable
          ref="cascaderRef"
          @change="handleChange"
          :props="subjectProps"
          popper-class="cascaderClass"
          :disabled="props.dialogStatus !== 'create'"
        />
      </el-form-item>

      <el-form-item label="科目类别" prop="subjectCate">
        <el-select v-model="props.subjectCate" placeholder="请选择" disabled>
          <el-option
            v-for="item in subjectCateList"
            :key="item.value"
            :label="item.name"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="辅助核算" prop="checked">
        <div class="item-box">
          <el-checkbox v-model="checked" />
          <el-select v-model="form.helpCal" v-if="checked">
            <el-option
              v-for="item in props.helpCalList"
              :key="item.id"
              :label="item.helpCalName"
              :value="item.helpCalName"
            ></el-option>
          </el-select>
        </div>
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
import { addObj, editObj } from "../../api/subject.js";
import { reactive, defineProps, ref, defineEmits, watch, onMounted } from "vue";
import { ElMessage } from "element-plus";

const props = defineProps({
  dialogStatus: {
    type: String,
    default: "",
  },
  dialogFormVisible: {
    type: Boolean,
    default: false,
  },
  subjectCate: {
    type: Number,
    default: 0,
  },
  subjectCateList: {
    type: Array,
  },
  rowData: {
    type: Object,
    default: () => {},
  },
  helpCalList: {
    type: Array,
  },
  sujectCascadeList: {
    type: Array,
  },
});
let checked = ref(false);
const cascaderRef = ref();
const textMap = reactive({
  update: "编辑科目",
  create: "新增科目",
  addSub: "新增下级科目",
});
let dialogFormVisible = ref(false);
let form = reactive({ status: 1 });

const rules = reactive({
  subjectCode: [
    {
      required: true,
      message: "请输入科目代码",
      trigger: "blur",
    },
    {
      min: 1,
      max: 30,
      message: "长度在 1 到 20 个字符",
      trigger: "blur",
    },
  ],
  subjectName: [
    {
      required: true,
      message: "请输入科目名称",
      trigger: "blur",
    },
    {
      min: 1,
      max: 30,
      message: "长度在 1 到 20 个字符",
      trigger: "blur",
    },
  ],
});

const subjectProps = reactive({
  label: "subjectName",
  value: "id",
  checkStrictly: true,
});

const ruleForms = ref(null);

const emit = defineEmits(["closeDialog"]);

// 监听弹窗状态的变化
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
onMounted(() => {
  console.log("onMounted");
});

const cancel = () => {
  form = {};
  emit("closeDialog", false);
};

const handleSubmit = () => {
  ruleForms.value.validate((valid) => {
    if (!valid) return false;
    if (form.pid === form.id) {
      ElMessage({
        message: "请勿添加重复的科目",
        type: "error",
        duration: 5 * 1000,
      });
      return false;
    }
    // 调用接口
    const api = props.dialogStatus === "update" ? editObj : addObj;
    api(form).then(() => {
      form = {};
      emit("closeDialog", true);
    });
  });
};

const handleChange = (value) => {
  form.pid = value && value.length ? value[value.length - 1] : "";
  // console.log(cascaderRef);
  // console.log(cascaderRef1);
  cascaderRef.value.togglePopperVisible();
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
