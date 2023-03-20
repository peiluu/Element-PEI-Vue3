<template>
  <div class="p-page">
    <div class="m-title">
      <el-icon @click="goBack"><ArrowLeft /></el-icon>
      <h3>辅助核算设定_{{ helpCalName }}</h3>
    </div>
    <el-form :model="listQuery" ref="form" :inline="true">
      <el-form-item label="名称" prop="itemName">
        <el-input
          @keyup.enter="getList"
          placeholder="名称"
          v-model="listQuery.itemName"
        />
      </el-form-item>

      <el-form-item label="状态" prop="status">
        <el-select v-model="listQuery.status">
          <el-option :value="1" label="开启"></el-option>
          <el-option :value="2" label="关闭"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" icon="search" @click="getList"
          >查询</el-button
        >
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>

    <div class="m-btns">
      <el-button @click="handleUpdate('create', {})" type="primary"
        >新增</el-button
      >
      <el-button @click="handleDelete('all')" type="primary">导出</el-button>
    </div>

    <div class="table-tip">
      <el-icon color="#1890FF"> <Warning /> </el-icon>已选择
      <span>{{ selectionList.length }}</span>
      项
    </div>
    <el-table
      stripe
      :data="list"
      v-loading.body="listLoading"
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        align="center"
        type="selection"
        label="序号"
        width="60"
      />

      <el-table-column align="center" label="编码" prop="helpCode" />

      <el-table-column align="center" label="名称" prop="itemName" />

      <el-table-column align="center" label="备注" prop="remark" />

      <el-table-column align="center" label="状态">
        <template v-slot="scope">
          <el-switch
            v-model="scope.row.status"
            :active-value="1"
            :inactive-value="0"
            @click="updateHelpCalManageStatus(scope.row)"
          />
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="300" fixed="right">
        <template v-slot="scope">
          <el-button type="primary" link @click="handleDelete(scope.row.id)"
            >删除</el-button
          >
          <el-button
            type="primary"
            link
            @click="handleUpdate('update', scope.row)"
            >修改</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-model:current-page="listQuery.pageIndex"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="listQuery.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    />
    <!-- 详情弹窗 -->
    <el-dialog :title="textMap[dialogStatus]" v-model="dialogFormVisible">
      <el-form
        :model="form"
        :rules="rules"
        ref="form"
        label-width="100px"
        class="dialogDetail-form"
      >
        <el-form-item label="编码" prop="helpCode">
          <el-input v-model="form.helpCode" placeholder="请输入编码" />
        </el-form-item>

        <el-form-item label="名称" prop="itemName">
          <el-input v-model="form.itemName" placeholder="请输入名称" />
        </el-form-item>

        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" placeholder="请输入备注" />
        </el-form-item>

        <el-form-item label="状态" prop="status">
          <el-select v-model="form.status" placeholder="请选择">
            <el-option :value="1" label="开启" />
            <el-option :value="0" label="关闭" />
          </el-select>
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
  addHelpCalManage,
  findHelpCalManage,
  updateHelpCalManage,
  deleteHelpCalManage,
  updateHelpCalManageStatus,
} from "@/views/settingManage/api/helpCalManage.js";
export default {
  name: "voucherRulesList",

  data() {
    return {
      form: {
        status: 1,
      },
      list: [],
      total: 0,
      listLoading: false,
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
      },
      selectionList: [],
      metierSceneList: [],
      helpCalName: "",
      helpCateId: "",
      dialogFormVisible: false,
      dialogStatus: "",
      textMap: {
        update: "编辑分类",
        create: "新增分类",
      },
      rules: {
        helpCode: [
          {
            required: true,
            message: "请输入编码",
            trigger: "blur",
          },
          {
            min: 1,
            max: 30,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
        itemName: [
          {
            required: true,
            message: "请输入名称",
            trigger: "blur",
          },
          {
            min: 1,
            max: 30,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
        remark: [
          {
            required: true,
            message: "请输入备注",
            trigger: "blur",
          },
          {
            min: 1,
            max: 30,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
        status: [
          {
            required: true,
            message: "请输入选择状态",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {
    const { id = "", helpCalName = "" } = this.$route.query;
    this.helpCateId = id;
    this.helpCalName = helpCalName;
    this.getList();
  },
  methods: {
    // 查询列表
    getList() {
      findHelpCalManage({
        ...this.listQuery,
        helpCateId: this.helpCateId,
      }).then((response) => {
        this.list = response.rows;
        this.total = response.total;
        this.cancel();
      });
    },

    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.getList();
    },

    handleUpdate(dialogStatus = "", row = {}) {
      this.form = { ...this.form, ...row };
      this.dialogFormVisible = true;
      this.dialogStatus = dialogStatus;
    },
    // 修改状态
    updateHelpCalManageStatus(row) {
      updateHelpCalManageStatus({ id: row.id }).then(() => {
        this.$notify({
          title: "成功",
          message: "操作成功",
          type: "success",
          duration: 2000,
        });
        this.getList();
      });
    },

    handleDelete(id) {
      this.$confirm("你确定要删除所选内容吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteHelpCalManage({ id }).then(() => {
            this.$notify({
              title: "成功",
              message: "删除成功",
              type: "success",
              duration: 2000,
            });
            this.getList();
          });
        })
        .catch(() => {});
    },

    // 重置表单
    reset() {
      this.listQuery = {
        pageIndex: 1,
        pageSize: 10,
      };
      this.getList();
    },
    // 多选
    handleSelectionChange(val) {
      this.selectionList = val;
    },
    // 根据json字符串拼接得出科目管理信息
    getSubjectInfo(data = "") {
      const list = JSON.parse(data);
      let str = "";
      list.map((item) => {
        str = `${str}\n\n${item.dcdirection == 0 ? "借" : "贷"}：${
          item.subjectName
        }`;
      });
      return str;
    },
    cancel() {
      this.dialogFormVisible = false;
      this.$refs["form"].resetFields();
      this.form = {};
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
      addHelpCalManage({
        ...this.form,
        helpCateId: this.helpCateId,
      }).then(() => {
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
      updateHelpCalManage({
        ...this.form,
        helpCateId: this.helpCateId,
      }).then(() => {
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
    goBack() {
      this.$router.replace({ path: "/rules/helpCalManage" });
    },
  },
};
</script>
<style lang="scss" scoped>
.m-title {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  .el-icon {
    cursor: pointer;
    margin-right: 4px;
  }
}
.m-btns {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.table-tip {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: #e6f7ff;
  border-radius: 4px;
  border: 1px solid #ade0ff;

  .el-icon {
    margin-right: 4px;
  }

  span {
    color: #1890ff;
  }
}
</style>
