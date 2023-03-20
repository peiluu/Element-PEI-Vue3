<template>
  <div>
    <div class="m-header">
      <span>类别</span>
        <el-tabs v-model="listQuery.subjectCate" type="card">
          <el-tab-pane
            v-for="item in subjectCateList"
            :label="item.name"
            :name="item.value"
            :key="item.value"
            >{{ item.name }}</el-tab-pane
          >
        </el-tabs>
    </div>

    <el-form :model="listQuery" ref="form" :inline="true">
      <el-form-item label="编码" prop="subjectCode">
        <el-input
          @keyup.enter="getList"
          placeholder="编码"
          v-model="listQuery.subjectCode"
        />
      </el-form-item>

      <el-form-item label="名称" prop="name">
        <el-input
          @keyup.enter="getList"
          placeholder="名称"
          v-model="listQuery.name"
        />
      </el-form-item>

      <el-form-item label="状态" prop="status">
        <el-select v-model="listQuery.status" placeholder>
          <el-option :value="1" label="开启" />
          <el-option :value="2" label="关闭" />
        </el-select>
      </el-form-item>

      <el-form-item label="辅助核算" prop="helpCal">
        <el-select v-model="listQuery.helpCal" placeholder="请选择">
          <el-option
            v-for="item in helpCalList"
            :key="item.id"
            :label="item.helpCalName"
            :value="item.helpCalName"
          />
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" icon="search" @click="getList"
          >查询</el-button
        >
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>

    <el-button @click="handleUpdate({}, 'create')" type="primary"
      >新增</el-button
    >
    <!-- <el-button @click="handleUpdate('', 'create')" style="float: right"
      >导出</el-button
    > -->
    <el-table
      stripe
      :data="list"
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        align="center"
        type="selection"
        width="60"
        label="选择"
      />

      <el-table-column align="center" label="编码" prop="subjectCode" />
      <el-table-column align="center" label="名称" prop="subjectName" />

      <el-table-column align="center" label="辅助核算" prop="helpCal" />

      <el-table-column align="center" label="状态">
        <template v-slot="scope">
          <el-switch
            v-model="scope.row.status"
            :active-value="1"
            :inactive-value="0"
            @click="updateTaxSubjectStatus(scope.row)"
          />
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="300" fixed="right">
        <template v-slot="scope">
          <el-button
            type="primary"
            link
            @click="handleUpdate(scope.row, 'addSub')"
            >新增下级</el-button
          >
          <el-button type="primary" link @click="handleDelete(scope.row)"
            >删除</el-button
          >
          <el-button
            type="primary"
            link
            @click="handleUpdate(scope.row, 'update')"
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
    <dialogDetail
      :dialogFormVisible="dialogFormVisible"
      :dialogStatus="dialogStatus"
      @closeDialog="handleCloseDialog"
      :subjectCate="listQuery.subjectCate"
      :subjectCateList="subjectCateList"
      :rowData="rowData"
      :helpCalList="helpCalList"
      :sujectCascadeList="sujectCascadeList"
    />
  </div>
</template>

<script>
import {
  page,
  delObj,
  findParentTaxSubject,
  updateTaxSubjectStatus,
  findTaxSubjectCascade,
} from "../../api/subject.js";
import { findHelpCal } from "../../api/helpCalManage.js";
import dialogDetail from "./dialogDetail.vue";

export default {
  name: "subjectList",
  components: { dialogDetail },
  data() {
    return {
      form: {},
      subjectCateList: [],
      list: [],
      total: 0,
      listLoading: false,
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
      },
      dialogFormVisible: false,
      dialogStatus: "",
      deleteList: [],
      rowData: {},
      helpCalList: [],
      sujectCascadeList: [],
    };
  },
  watch: {
    "listQuery.subjectCate"() {
      this.getList();
    },
  },
  mounted() {
    this.findParentTaxSubject();
    this.findHelpCal();
  },
  methods: {
    // 查询科目类别
    findParentTaxSubject() {
      findParentTaxSubject().then((response) => {
        this.subjectCateList = response;
        this.listQuery.subjectCate = response[0]?.value;
      });
    },
    // 查询辅助核算列表
    findHelpCal() {
      findHelpCal().then((response) => {
        this.helpCalList = response || [];
      });
    },

    // 查询科目列表
    getList() {
      this.listLoading = true;
      page(this.listQuery).then((response) => {
        this.list = response.rows;
        this.total = response.total;
        this.listLoading = false;
      });
      // 查询科目级联列表
      findTaxSubjectCascade({ id: this.listQuery.subjectCate }).then(
        (response) => {
          this.sujectCascadeList = response;
        }
      );
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.getList();
    },

    handleUpdate(row = {}, dialogStatus = "") {
      this.rowData = row;
      this.dialogFormVisible = true;
      this.dialogStatus = dialogStatus;
    },
    // 修改状态
    updateTaxSubjectStatus(row) {
      updateTaxSubjectStatus({ id: row.id }).then(() => {
        this.$notify({
          title: "成功",
          message: "操作成功",
          type: "success",
          duration: 2000,
        });
        this.getList();
      });
    },
    handleSelectionChange(val) {
      this.deleteList = val;
    },
    handleDelete(row) {
      this.$confirm("你确定要删除这行内容吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        delObj({ id: row.id }).then(() => {
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
    handleCloseDialog(saveFlag) {
      this.dialogFormVisible = false;
      if (saveFlag) {
        this.getList();
      }
    },
    // 重置表单
    reset() {
      this.listQuery = {
        pageIndex: 1,
        pageSize: 10,
        subjectCate: this.listQuery.subjectCate
      };
      this.getList();
    },
  },
};
</script>
<style lang="scss" scoped>
.m-header {
  display: flex;
  align-items: center;
  padding-bottom: 24px;

  span {
    padding-right: 8px;
  }

  /deep/ .el-tabs__header {
    margin: 0;
  }

  .el-tab-pane {
    display: none;
  }
}
</style>
