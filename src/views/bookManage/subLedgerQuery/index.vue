<template>
  <div>
    <lgtQuarterlySelect
      @export="handleExport"
      @print="handlePrint"
      @query="handleQuery"
      formLabel="明细账期"
    />

    <div class="m-section">
      <el-card>
        <template #header>科目：{{currentSubject.subjectCode  }} {{currentSubject.subjectName  }}</template>
        <el-table
          stripe
          :data="list"
          v-loading.body="listLoading"
          highlight-current-row
        >
          <el-table-column align="center" label="日期" prop="accountingTime" />
          <el-table-column align="center" label="凭证字号" prop="mark" />
          <el-table-column align="center" label="摘要" prop="summary" />
          <el-table-column align="center" label="借方金额" prop="creditPrice" />
          <el-table-column align="center" label="贷方金额" prop="debitPrice" />

          <el-table-column align="center" label="方向">
            <template v-slot="scope">
              {{
                scope.row.creditPrice > scope.row.debitPrice
                  ? "借"
                  : scope.row.creditPrice < scope.row.debitPrice
                  ? "贷"
                  : "平"
              }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="余额" prop="startPrice" />
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
      </el-card>

      <el-card>
        <template #header>
          <el-input v-model="inputVal" suffix-icon="Search" />
        </template>
        <div
          v-for="item in subjectList"
          :key="item.subjectCode"
          :class="{
            item: true,
            active: item.subjectCode === currentSubject.subjectCode,
          }"
          @click="currentSubject = item"
        >
          <el-icon color="#87DDF7">
            <Document />
          </el-icon>
          {{ item.subjectCode }} {{ item.subjectName }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getQuarterlyList } from "@/utils/util";
import cookies from "@/utils/cookies";

import lgtQuarterlySelect from "@/components/lgt-quarter-select/index.vue";
import { page, delObj, findTaxSubject } from "../api/generalLedger.js";

export default {
  name: "setManageList",
  components: { lgtQuarterlySelect },
  data() {
    return {
      form: {},
      list: [],
      subjectList: [],
      originSubjectList: [],
      total: 0,
      listLoading: false,
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
      },
      quarterlyList: [],
      currentSubject: {},
      inputVal: "",
      time: "",
    };
  },
  mounted() {
    this.findTaxSubject();
      this.quarterlyList = getQuarterlyList(2);
  },
  watch: {
    inputVal(val) {
      // 根据搜索内容模糊筛选科目列表
      this.subjectList = this.originSubjectList.filter((item) =>
        item.subjectName.includes(val)
      );
    },
    currentSubject(val) {
      if (this.time) {
        this.getList({
          time: this.time,
          subjectCode: val.subjectCode,
        });
      }
    },
  },
  methods: {
    getList(params) {
      page({
        ...params,
        accountSetId: cookies.get("accountSetId"),
      }).then((response) => {
        this.list = response;
      });
    },
    // 获取科目列表
    findTaxSubject() {
      findTaxSubject({
        pageIndex: 1,
        pageSize: 0,
      }).then(({ rows = [] }) => {
        this.originSubjectList = rows;
        // 根据传入的code值查找当前的科目项，默认值为列表第一项
        this.currentSubject =
          rows?.find((item) => item.subjectCode == this.$route.query.code) || rows[0];
        // 当前展示的科目列表
        this.subjectList = [...rows];

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

    handleExport() {
      console.log("导出");
    },
    handlePrint() {
      console.log("打印");
    },
    handleQuery(time) {
      this.time = time;
      // 第一次进入页面，先查科目列表，再查明细
      if (this.currentSubject.subjectCode) {
        this.getList({
        time,
        subjectCode: this.currentSubject.subjectCode,
      });
      }

    },
  },
};
</script>
<style lang="scss" scoped>
.el-form-item {
  margin-right: 16px;
}
.m-section {
  display: flex;
}
.el-card {
  flex-basis: 70%;
  &:last-child {
    flex-basis: 30%;
    .item {
      display: flex;
      align-items: center;
      margin-top: 8px;
      padding: 4px;
      cursor: pointer;
      &.active {
        background: #ffebc0;
      }
    }
    .el-icon {
      margin-right: 4px;
    }
  }
  /deep/ .el-card__body {
    height: 73vh;
    overflow: auto;
    padding: 0 20px 20px;
  }
}
</style>
