<template>
  <div>
    <div class="m-header">
      <div>
        <span>汇总周期</span>
        <LgtQuarterlyTab @dateChange="handleDateChange" />
        <span
          >凭证总张数: {{ list.length }} 张，附件总张数: {{ filesTotal }}</span
        >
      </div>

      <div class="btns">
        <el-button @click="$emit('export')">导出</el-button>
        <el-button @click="$emit('print')">打印</el-button>
      </div>
    </div>

    <el-table
      stripe
      :data="list"
      v-loading.body="listLoading"
      highlight-current-row
    >
      <el-table-column align="center" label="科目编码">
        <template v-slot="scope">
          <el-button
            link
            type="primary"
            @click="goToDetail(scope.row.subjectCode)"
            >{{ scope.row.subjectCode }}</el-button
          >
        </template>
      </el-table-column>
      <el-table-column align="center" label="科目名称" prop="subjectName" />
      <el-table-column align="center" label="借方金额" prop="creditPrice" />
      <el-table-column align="center" label="贷方金额" prop="debitPrice" />
    </el-table>
    <div class="table-footer">共{{ list.length }}条</div>

    <!-- <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-model:current-page="listQuery.pageIndex"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="listQuery.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    /> -->
  </div>
</template>

<script>
import LgtQuarterlyTab from "@/components/lgt-quarter-tab/index.vue";

import { AccountVoucherPool } from "../api/index.js";
export default {
  name: "voucherSummary",
  components: { LgtQuarterlyTab },

  data() {
    return {
      form: {},
      list: [],
      listLoading: false,
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
      },
      time: "",
      filesTotal: 0,
    };
  },
  methods: {
    // 获取列表数据
    getList(val) {
      AccountVoucherPool({
        ...this.listQuery,
        accountSetId: this.$cookies.get("accountSetId") || "",
        time: val || this.time,
      }).then((response = []) => {
        this.list = response;
        // this.total = response.total;
      });
    },
    // handleSizeChange(val) {
    //   this.listQuery.pageSize = val;
    //   this.getList();
    // },
    // handleCurrentChange(val) {
    //   this.listQuery.pageIndex = val;
    //   this.getList();
    // },
    // 改变查询季度
    handleDateChange(val) {
      this.time = val;
      this.getList(val);
    },
    // 查询详情
    goToDetail(code) {
      this.$router.push({
        path: "/bookManage/subLedgerQuery",
        query: {
          code,
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.m-header {
  display: flex;
  justify-content: space-between;
  & div:first-child {
    display: flex;
    align-items: center;
  }
  span {
    padding: 0 8px;
  }
}
.table-footer{
  float: right;
  padding-top: 16px;
}
</style>
