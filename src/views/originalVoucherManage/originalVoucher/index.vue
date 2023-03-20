<template>
  <div class="p-page">
    <el-form :model="listQuery" ref="form" :inline="true">
      <el-form-item label="原始凭证编码" prop="voucherCode">
        <el-input
          @keyup.enter="getList"
          placeholder="原始凭证编码"
          v-model="listQuery.voucherCode"
        />
      </el-form-item>

      <!-- <el-form-item label="原始凭证类型" prop="status">
        <el-select v-model="listQuery.status">
          <el-option :value="1" label="开启"></el-option>
          <el-option :value="2" label="关闭"></el-option>
        </el-select>
      </el-form-item> -->

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

      <el-table-column align="center" label="凭证编码">
        <template v-slot="scope">
          <el-button
            link
            type="primary"
            @click="handleUpdate(scope.row.id, 'detail')"
            >{{ scope.row.voucherCode }}</el-button
          >
        </template>
      </el-table-column>
      <el-table-column align="center" label="原始凭证场景" prop="sceneName" />

      <el-table-column align="center" label="原始凭证金额" prop="orgPrice" />

      <el-table-column align="center" label="业务类型">
        <template v-slot="scope">{{
          scope.row.type == 1 ? "收入" : scope.row.type == 2 ? "成本" : "其他"
        }}</template>
      </el-table-column>

      <el-table-column align="center" label="所关联记账凭证" prop="mark" />

      <el-table-column align="center" label="操作" width="300" fixed="right">
        <template v-slot="scope">
          <el-button type="primary" link @click="handleEnter(scope.row)"
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
  </div>
</template>

<script>
import { page, delObj } from "../api/originalVoucher.js";

export default {
  name: "originalVoucherList",
  data() {
    return {
      form: {},
      list: [],
      total: 0,
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
      },
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      page(this.listQuery).then((response) => {
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
        path: "/originalVoucherManage/originalVouchereDetail",
        query: {
          id,
          updateStatus,
        },
      });
    },

    handleEnter() {},
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
