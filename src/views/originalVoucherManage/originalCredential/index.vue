<template>
  <div class="p-page">
    <el-form :model="listQuery" ref="form" :inline="true">
      <el-form-item label="原始凭据编码" prop="noteNo">
        <el-input
          @keyup.enter="getList"
          placeholder="原始凭据编码"
          v-model="listQuery.noteNo"
        />
      </el-form-item>

      <el-form-item label="原始凭据场景" prop="noteType">
        <el-select v-model="listQuery.noteType" filterable>
          <el-option
            v-for="item in noteTypeList"
            :key="item?.value"
            :label="item?.name"
            :value="item?.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="业务类型" prop="type">
        <el-select v-model="listQuery.type">
          <el-option :value="1" label="收入" />
          <el-option :value="2" label="成本" />
          <el-option :value="3" label="其他" />
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" icon="search" @click="getList"
          >查询</el-button
        >
      </el-form-item>
    </el-form>

    <el-button @click="handleUpdate('', 'create')" type="primary"
      >新增</el-button
    >

    <el-table stripe :data="list" highlight-current-row>
      <el-table-column align="center" type="index" label="序号" width="60" />

      <el-table-column align="center" label="凭据编码">
        <template v-slot="scope">
          <el-button
            link
            type="primary"
            @click="handleUpdate(scope.row.id, 'detail')"
            >{{ scope.row.noteNo }}</el-button
          >
        </template>
      </el-table-column>
      <el-table-column align="center" label="原始凭据场景">
        <template v-slot="scope">{{
          noteTypeMap[scope.row.noteType]
        }}</template>
      </el-table-column>
      <el-table-column align="center" label="原始凭据金额" prop="price" />

      <el-table-column align="center" label="业务类型">
        <template v-slot="scope">
          {{
            scope.row.type == 1 ? "收入" : scope.row.type == 2 ? "成本" : "其他"
          }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="所关联记账凭证">
        <template v-slot="scope" v-if="scope?.row?.mark">
          <el-button
            link
            type="primary"
            v-for="item in scope?.row?.mark.split(',')"
            :key="item"
            @click="goToDetail(scope.row.id, 'detail')"
            >记{{ item }};</el-button
          >
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="300" fixed="right">
        <template v-slot="scope">
          <el-button
            type="primary"
            link
            @click="showDialog(true, scope.row.billId)"
            >生成凭证</el-button
          >
          <el-button
            type="primary"
            link
            @click="handleUpdate(scope.row.id, 'update')"
            >修改</el-button
          >
          <el-button type="primary" link @click="handleDelete(scope.row)"
            >删除</el-button
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
    <el-dialog
      center
      title="请选择您要操作的类型"
      v-model="dialogTableVisible"
      width="20%"
    >
      <!-- :disabled="isDetail" -->
      <el-button type="primary" @click="associatedVoucher('new')"
        >新增新的凭证</el-button
      >
      <el-button type="primary" @click="associatedVoucher('list')"
        >关联以往凭证</el-button
      >
    </el-dialog>
  </div>
</template>

<script>
import cookies from "@/utils/cookies";

import { noteTypeList, noteTypeMap } from "@/const/index";

import { page, delObj } from "../api/originalCredential.js";

export default {
  name: "originalCredentialList",
  data() {
    return {
      form: {},
      list: [],
      total: 0,
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
      },
      dialogTableVisible: false,
      // 当前操作的id
      currentId: "",
      noteTypeList,
      noteTypeMap,
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      page({
        ...this.listQuery,
        accountSetId: cookies.get("accountSetId") || "",
      }).then((response) => {
        this.list = response.rows;
        this.total = response.total;
      });
    },

    handleAddChange(value) {
      this.form.subjectId =
        value && value.length ? value[value.length - 1] : "";
      this.$refs.cascaderRef.dropDownVisible = false;
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.getList();
    },

    handleUpdate(id = "", updateStatus = "") {
      this.$router.push({
        path: "/originalVoucherManage/originalCredentialDetail",
        query: {
          id,
          updateStatus,
        },
      });
    },

    showDialog(flag, id) {
      this.dialogTableVisible = flag;
      this.currentId = id;
    },

    // 查看记账凭证详情
    goToDetail(mark) {
      this.$router.push({
        path: "/bookKeepingVoucherManage/entry",
        query: {
          mark,
          // 记账凭证关联的原始凭证类型
          markType: "other",
          updateStatus: "detail",
        },
      });
    },
    // 关联凭证
    associatedVoucher(type) {
      const path =
        type === "new"
          ? "/bookKeepingVoucherManage/entry"
          : "/originalVoucherManage/associatedVoucher";
      this.$router.push({
        path,
        query: {
          type: "other",
          orgId: this.currentId,
        },
      });
    },
    handleDelete(row) {
      this.$confirm("你确定要删除这行内容吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delObj({ ids: [row.id] }).then(() => {
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
  },
};
</script>
<style lang="scss">
.el-dialog__body {
  display: flex;
  justify-content: center;
}
</style>
