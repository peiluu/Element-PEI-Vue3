<template>
  <div class="p-page">
    <h3 class="m-title">{{ textMap[updateStatus] || "新增凭证规则" }}</h3>
    <el-form
      :model="form"
      :inline="true"
      :rules="rules"
      ref="form"
      label-width="120px"
      class="detail-form"
      :disabled="updateStatus === 'detail'"
    >
      <el-form-item label="规则名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入规则名称" />
      </el-form-item>

      <el-form-item label="业务类别" prop="ywType">
        <el-select
          v-model="form.ywType"
          filterable
          placeholder="请选择业务类别"
        >
          <el-option
            v-for="item in metierSceneList"
            :key="item?.id"
            :label="item?.sceneName"
            :value="item?.id.toString()"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="原始凭证类别" prop="originalType">
        <el-select v-model="form.originalType" placeholder="请选择原始凭证类别">
          <el-option value="发票" label="发票" />
        </el-select>
      </el-form-item>

      <el-form-item label="币种" prop="bz">
        <el-select v-model="form.bz">
          <el-option value="人民币（RMB）" label="人民币（RMB）" />
        </el-select>
      </el-form-item>

      <el-form-item label="状态" prop="status" v-if="updateStatus === 'detail'">
        <el-select v-model="form.status">
          <el-option :value="1" label="已开启"></el-option>
          <el-option :value="0" label="已停用"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="创建时间"
        prop="createTime"
        v-if="updateStatus === 'detail' && form.createTime"
      >
        <el-input v-model="form.createTime" />
      </el-form-item>

      <el-form-item
        label="更新时间"
        prop="updateTime"
        v-if="updateStatus === 'detail' && form.createTime"
      >
        <el-input v-model="form.updateTime" />
      </el-form-item>
    </el-form>

    <div class="m-btns">
      <el-button
        v-if="updateStatus !== 'detail'"
        @click="handleUpdate('create', {}, 0)"
        type="primary"
        >科目维护</el-button
      >
    </div>

    <el-table stripe :data="list" highlight-current-row>
      <el-table-column align="center" type="index" label="序号" width="60" />
      <el-table-column align="center" label="摘要信息" prop="abstracts" />
      <el-table-column align="center" label="科目名称" prop="subjectName" />
      <el-table-column align="center" label="借/贷">
        <template v-slot="scope">{{
          scope.row.dcdirection == 0 ? "借" : "贷"
        }}</template>
      </el-table-column>

      <el-table-column align="center" label="核算协助" prop="helpCal">
      </el-table-column>

      <el-table-column
        v-if="updateStatus !== 'detail'"
        align="center"
        label="操作"
        width="120"
        fixed="right"
      >
        <template v-slot="scope">
          <el-button
            type="primary"
            link
            @click="handleUpdate('update', scope.row, scope.$index)"
            >编辑</el-button
          >
          <el-button type="primary" link @click="handleDelete(scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-model:current-page="listQuery.pageIndex"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="listQuery.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    /> -->

    <div class="m-footer">
      <el-button @click="cancel">取消</el-button>
      <el-button
        v-if="updateStatus !== 'detail'"
        type="primary"
        @click="handleSubmit"
        >提交</el-button
      >
    </div>

    <DialogDetail
      :dialogFormVisible="dialogFormVisible"
      :dialogStatus="dialogStatus"
      @closeDialog="handleCloseDialog"
      :rowData="rowData"
      :helpCalList="helpCalList"
      :list="list"
    />
  </div>
</template>

<script>
import {
  page,
  addObj,
  editObj,
  findMetierScene,
} from "../../api/voucherRule.js";
import { findHelpCal } from "../../api/helpCalManage.js";

import DialogDetail from "./dialogDetail.vue";

export default {
  name: "voucherRulesDetail",
  components: {
    DialogDetail,
  },
  data() {
    return {
      form: {
        status: 1,
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入规则名称",
            trigger: "blur",
          },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
        ywType: [
          {
            required: true,
            message: "请选择业务类别",
            trigger: "blur",
          },
        ],
        originalType: [
          {
            required: true,
            message: "请选择原始凭证类别",
            trigger: "blur",
          },
        ],
      },
      updateStatus: "",
      textMap: {
        update: "编辑凭证规则",
        create: "新增凭证规则",
        detail: "凭证规则详情",
      },
      list: [],
      total: 0,
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
      },
      rowData: {},
      dialogFormVisible: false,
      dialogStatus: "",
      metierSceneList: [],
      editIndex: 0,
      helpCalList: [],
    };
  },

  mounted() {
    this.findMetierScene();
    this.findHelpCal();
    // 查询详
    const { id = "", updateStatus = "" } = this.$route.query;
    this.updateStatus = updateStatus;
    if (id) {
      this.getDetail({
        pageIndex: 1,
        pageSize: 10,
        id,
      });
    }
  },
  watch: {},
  methods: {
    getDetail(params) {
      page(params).then((response) => {
        this.form = response.rows[0] || {};
        this.list = JSON.parse(this.form.jsonSubject || "");
      });
    },
    // 查询辅助核算列表
    findHelpCal() {
      findHelpCal().then((response) => {
        this.helpCalList = response || [];
      });
    },
    // 获取业务场景类别
    findMetierScene() {
      findMetierScene({
        pageIndex: 1,
        pageSize: 0,
      }).then((response) => {
        this.metierSceneList = response.rows;
      });
    },
    cancel() {
      this.$router.push({ path: "/basic/voucherRulesList" });
    },
    handleUpdate(dialogStatus = "", row = {}, editIndex = 0) {
      this.editIndex = editIndex;
      this.rowData = row;
      this.dialogFormVisible = true;
      this.dialogStatus = dialogStatus;
    },

    // 提交表单
    handleSubmit() {
      const set = this.$refs;
      set["form"].validate((valid) => {
        if (!valid) return false;
        const params = {
          ...this.form,
          jsonSubject: JSON.stringify(this.list),
        };
        if (this.updateStatus === "create") {
          this.create(params);
          return;
        }
        this.update(params);
      });
    },
    // 创建
    create(params) {
      addObj(params).then(() => {
        this.dialogFormVisible = false;
        this.$notify({
          title: "成功",
          message: "新建成功",
          type: "success",
          duration: 2000,
        });
        this.cancel();
      });
    },
    // 编辑
    update(params) {
      editObj(params).then(() => {
        this.dialogFormVisible = false;
        this.$notify({
          title: "成功",
          message: "更新成功",
          type: "success",
          duration: 2000,
        });
        this.cancel();
      });
    },
    // 接收弹窗数据，关闭弹窗
    handleCloseDialog(data, saveFlag) {
      this.dialogFormVisible = false;
      // 取消操作
      if (!saveFlag) {
        return;
      }
      // 新增科目维护
      if (this.dialogStatus === "create") {
        this.list = [...this.list.concat({ ...data })];
      }
      // 编辑科目
      if (this.dialogStatus === "update") {
        console.log(this);
        this.list.splice(this.editIndex, 1, { ...data });
        // vm.$set(this.list, this.editIndex, { ...data });
      }
    },
    handleDelete(rowIndex) {
      this.list = this.list.filter((item, index) => index !== rowIndex);
    },
  },
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
  .m-btns {
    float: right;
    .el-button {
      margin: 0 0 16px 16px;
    }
  }
}
</style>
