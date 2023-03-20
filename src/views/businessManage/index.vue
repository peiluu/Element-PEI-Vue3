<template>
  <div class="p-page">
    <el-form :model="listQuery" ref="form" :inline="true">
      <el-form-item label="企业名称" prop="qymc">
        <el-input
          @keyup.enter="getList"
          placeholder="企业名称"
          v-model="listQuery.qymc"
        />
      </el-form-item>

      <el-form-item label="纳税人识别号码 " prop="nsrsbh">
        <el-input
          @keyup.enter="getList"
          placeholder="纳税人识别号码"
          v-model="listQuery.nsrsbh"
        />
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

      <el-table-column align="center" label="企业名称">
        <template v-slot="scope">
          <el-button
            link
            type="primary"
            @click="handleUpdate(scope.row.id, 'detail')"
            >{{ scope.row.qymc }}</el-button
          >
        </template>
      </el-table-column>
      <el-table-column align="center" label="纳税类型">
        <template v-slot="scope">{{
          scope.row.nslx == 0 ? "小规模纳税人" : "其他"
        }}</template>
      </el-table-column>

      <el-table-column align="center" label="纳税人识别号码" prop="nsrsbh" />

      <el-table-column align="center" label="标为默认企业">
        <template v-slot="scope">{{
          scope.row.sfmr == "1" ? "是" : "否"
        }}</template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="300" fixed="right">
        <template v-slot="scope">
          <el-button
            v-if="scope.row.id != qyId"
            type="primary"
            link
            @click="handleDelete(scope.row)"
            >删除</el-button
          >
          <el-button
            type="primary"
            link
            @click="handleUpdate(scope.row.id, 'update')"
            >修改</el-button
          >
          <el-button
            v-if="scope.row.sfmr != '1'"
            type="primary"
            link
            @click="handleSetDefault(scope.row)"
            >切换为默认</el-button
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
import cookies from "@/utils/cookies";
import { page, delObj, updateEnterpriseStatus } from "./api/index.js";

export default {
  name: "businessManageList",
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
  computed: {
    qyId() {
      return cookies.get("qyId");
    },
  },

  methods: {
    getList() {
      page(this.listQuery).then((response) => {
        this.list = response.rows;
        this.total = response.total;
        const { qymc = " ", id = "" } = response.rows.find(
          (item) => item.sfmr == 1
        );
        // 存储主体企业信息
        cookies.set("qyId", id);
        cookies.set("qymc", qymc);
        this.$store.commit("SET_USERINFO", {
          qyId: id,
          qymc,
        });
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
      console.log(id);
      this.$router.push({
        path: "/businessManage/detail",
        query: {
          id,
          updateStatus,
        },
      });
    },
    // 设置为默认
    handleSetDefault({ id = "" }) {
      updateEnterpriseStatus({
        id,
      }).then(() => {
        this.$notify({
          title: "成功",
          message: "设置成功",
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
  },
};
</script>
