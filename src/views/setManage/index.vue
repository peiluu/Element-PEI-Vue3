<template>
  <div class="p-page">
    <el-form :model="listQuery" ref="form" :inline="true">
      <el-form-item label="账套名称" prop="accountSetName">
        <el-input @keyup.enter="getList" placeholder="账套名称" v-model="listQuery.accountSetName" />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="listQuery.status">
          <el-option :value="1" label="开启"></el-option>
          <el-option :value="2" label="关闭"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" icon="search" @click="getList">查询</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>

    <el-button @click="handleUpdate('', 'create')" type="primary">新增</el-button>

    <el-table stripe :data="list" highlight-current-row>
      <el-table-column align="center" type="index" label="序号" width="60" />
      <el-table-column align="center" label="账套名称">
        <template v-slot="scope">
          <el-button link type="primary" @click="handleUpdate(scope.row.id, 'detail')">{{ scope.row.accountSetName }}</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" label="启用时间" prop="qysj" />

      <el-table-column align="center" label="会计制度" prop="kjzd" />

      <el-table-column align="center" label="状态">
        <template v-slot="scope">
          <el-switch v-model="scope.row.status" :active-value="1" :inactive-value="0" @click="updateAccountSetStatus(scope.row)" />
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="300" fixed="right">
        <template v-slot="scope">
          <el-button type="primary" link @click="handleEnter(scope.row)">进入</el-button>
          <el-button type="primary" link @click="handleUpdate(scope.row.id, 'update')">修改</el-button>
          <el-button v-if="scope.row.id != accountSetId" type="primary" link @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" v-model:current-page="listQuery.pageIndex" :page-sizes="[10, 20, 30, 50]" :page-size="listQuery.pageSize"
      layout="total, sizes, prev, pager, next, jumper" :total="total" />
  </div>
</template>

<script>
import cookies from "@/utils/cookies";

import { findAccountSet, delObj, updateAccountSetStatus } from "./api/index.js";
export default {
  name: "setManageList",
  data() {
    return {
      form: {},
      list: [],
      total: 0,
      listQuery: {
        pageIndex: 1,
        pageSize: 10
      },
      status: 1
    };
  },
  mounted() {
    this.getList();
  },
  computed: {
    accountSetId() {
      return cookies.get('accountSetId')
    }
  },
  methods: {
    getList() {
      findAccountSet({
        ...this.listQuery,
        qyId: cookies.get('qyId')
      }).then(response => {
        this.list = response.rows
        this.total = response.total;
      });
    },
    // 重置表单
    reset() {
      this.listQuery = {
        pageIndex: 1,
        pageSize: 10
      };
      this.getList();
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
        path: "/setManage/detail",
        query: {
          id,
          updateStatus
        }
      });
    },
    // 进入账套
    handleEnter({ id = '', accountSetName = '', }) {
      cookies.set('accountSetId', id)
      cookies.set('accountSetName', accountSetName)
      this.$router.push({
        path: "/taxclude/home",
        query: {
          id
        }
      });
    },
    // 修改状态
    updateAccountSetStatus(row) {
      updateAccountSetStatus({ id: row.id }).then(() => {
        this.$notify({
          title: "成功",
          message: "操作成功",
          type: "success",
          duration: 2000
        });
        this.getList();
      });
    },
    handleDelete(row) {
      this.$confirm("你确定要删除这行内容吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        delObj({ id: row.id }).then(() => {
          this.$notify({
            title: "成功",
            message: "删除成功",
            type: "success",
            duration: 2000
          });
          this.getList();
        });
      }).catch(() => { })
    }
  }
};
</script>
