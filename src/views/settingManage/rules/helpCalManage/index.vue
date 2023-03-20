<template>
  <div>
    <div class="m-header">
      <h4>辅助核算设定</h4>
    </div>
    <div class="list">
      <div
        class="item"
        v-for="item in list"
        :key="item.id"
        @click="handleUpdate('update', item)"
      >
        <el-icon :size="100"><UserFilled /></el-icon>
        <h3>{{ item.helpCalName }}</h3>
      </div>
      <div class="item" @click="handleUpdate('create', {})">
        <el-icon :size="50" color="#000">
          <CirclePlus />
        </el-icon>
      </div>
    </div>

    <el-dialog :title="textMap[dialogStatus]" v-model="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form" label-width="100px">
        <el-form-item label="名称" prop="helpCalName">
          <el-input v-model="form.helpCalName" placeholder="请输入分类名称" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="cancel()">取 消</el-button>
          <el-button type="primary" @click="handleSubmit()">确 定</el-button>
        </div>
      </template>
    </el-dialog>

  </div>
</template>

<script>
import {
  findHelpCal,
  addHelpCal,
  updateHelpCal,
  deleteHelpCal,
} from "@/views/settingManage/api/helpCalManage.js";

export default {
  name: "HelpCalManageList",
  data() {
    return {
      form: {},
      list: [],
      dialogFormVisible: false,
      dialogStatus: "",
      textMap: {
        update: "编辑分类",
        create: "新增分类",
      },
      rules: {
        helpCalName: [
          {
            required: true,
            message: "请输入分类名称",
            trigger: "blur",
          },
          {
            min: 1,
            max: 30,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    // 查询列表
    getList() {
      findHelpCal().then((response) => {
        this.list = response || [];
      });
    },

    handleUpdate(dialogStatus = "", row = {}) {
      if (dialogStatus === "update") {
        this.$router.push({
          path: "/rules/helpCalManageDetail",
          query: {
            id: row.id,
            helpCalName: row.helpCalName,
          },
        });
        return;
      }
      this.form = row;
      this.dialogFormVisible = true;
      this.dialogStatus = dialogStatus;
    },

    handleSelectionChange(val) {
      this.deleteList = val;
    },
    // 提交表单
    handleSubmit() {
      this.$refs["form"].validate((valid) => {
        if (!valid) return;
        if (this.dialogStatus === "create") {
          this.create();
          return;
        }
        this.update();
      });
    },
    // 创建
    create() {
      addHelpCal(this.form).then(() => {
        this.dialogFormVisible = false;
        this.$notify({
          title: "成功",
          message: "新建成功",
          type: "success",
          duration: 2000,
        });
        this.getList();
      });
    },
    // 编辑
    update() {
      updateHelpCal(this.form).then(() => {
        this.dialogFormVisible = false;
        this.$notify({
          title: "成功",
          message: "更新成功",
          type: "success",
          duration: 2000,
        });
        this.getList();
      });
    },
    handleDelete(row) {
      this.$confirm("你确定要删除这行内容吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        deleteHelpCal({ id: row.id }).then(() => {
          this.$notify({
            title: "成功",
            message: "删除成功",
            type: "success",
            duration: 2000,
          });
          this.getList();
        });
      });
    },
    cancel() {
      this.dialogFormVisible = false;
      this.$refs["form"].resetFields();
    },
  },
};
</script>
<style lang="scss" scoped>
.m-header {
  display: flex;
  align-items: center;
  padding-bottom: 24px;
}
.list {
  display: flex;
  flex-wrap: wrap;
  .item {
    flex-basis: 10%;
    padding: 1% 0;
    margin-right: 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px #ccc dashed;
  }
  h3 {
    margin-top: 24px;
  }
}
</style>
