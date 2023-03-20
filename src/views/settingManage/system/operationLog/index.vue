<template>
  <div class="p-page">
    <el-form :model="listQuery" ref="form" :inline="true">
      <el-form-item label="用户名" prop="status">
        <el-input @keyup.enter="getList" placeholder="用户名" v-model="listQuery.name" />
      </el-form-item>

      <el-form-item label="操作类型" prop="status">
        <el-input @keyup.enter="getList" placeholder="操作类型" v-model="listQuery.qymc" />
      </el-form-item>

      <el-form-item label="日期" prop="status">
        <el-date-picker v-model="listQuery.time" value-format="YYYY-MM-DD" placeholder="日期" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" icon="search" @click="getList">查询</el-button>
      </el-form-item>
    </el-form>

    <!-- <el-button @click="handleUpdate('', 'create')" type="primary">新增</el-button> -->
    <el-table stripe :data="list" v-loading.body="listLoading" highlight-current-row>
      <el-table-column align="center" type="index" label="序号" width="60" />

      <el-table-column align="center" label="日期" prop="time" />

      <el-table-column align="center" label="用户名" prop="cateName" />

      <el-table-column align="center" label="操作类型" prop="cateName" />
      <el-table-column align="center" label="操作日志内容" prop="cateName" />
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
import { page, delObj } from "../../api/index.js";

export default {
  name: "operationLog",
  data() {
    return {
      form: {},
      list: [
        { cateName: "北京模型有限公司", time: "2022-12" },
        { cateName: "北京模型有限公司", time: "2022-12" },
        { cateName: "北京模型有限公司", time: "2022-12" },
        { cateName: "北京模型有限公司", time: "2022-12" },
        { cateName: "北京模型有限公司", time: "2022-12" },
        { cateName: "北京模型有限公司", time: "2022-12" }
      ],
      total: 0,
      listLoading: false,
      listQuery: {
        pageIndex: 1,
        pageSize: 10
      }
    };
  },
  mounted() {
    // this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true;
      page(this.listQuery).then(response => {
        this.list = response.rows;
        this.total = response.total;
        this.listLoading = false;
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
        path: "/businessManage/detail",
        query: {
          id,
          updateStatus
        }
      });
    },

    handleEnter() {},
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
      });
    }
  }
};
</script>
