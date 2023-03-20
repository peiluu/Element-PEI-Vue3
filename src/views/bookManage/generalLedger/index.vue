<template>
  <div>
    <lgtQuarterlySelect
      @export="handleExport"
      @print="handlePrint"
      @query="handleQuery"
      formLabel="总账账期"
    />

    <el-scrollbar height="600px">
      <el-table
        border
        stripe
        :data="list"
        highlight-current-row
        :span-method="objectSpanMethod"
      >
        <el-table-column align="center" label="科目编码" prop="subjectCode" />
        <el-table-column align="center" label="科目名称" prop="subjectName" />

        <el-table-column align="center" label="期间" prop="accountingTime" />

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
      <div class="table-footer">共{{ list.length }}条数据</div>
    </el-scrollbar>
  </div>
</template>

<script>
import { getQuarterlyList } from "@/utils/util";
import cookies from "@/utils/cookies";

import lgtQuarterlySelect from "@/components/lgt-quarter-select/index.vue";
import { page } from "../api/generalLedger";
export default {
  name: "subjectBalanceTable",
  components: { lgtQuarterlySelect },
  data() {
    return {
      form: {},
      list: [],
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
      },
      time: "",
      dialogFormVisible: false,
      dialogStatus: "",
      deleteList: [],
      quarterlyList: [],
    };
  },
  // watch: {
  //   "listQuery.type"() {
  //     this.getList();
  //   }
  // },
  mounted() {
    this.quarterlyList = getQuarterlyList(2);
  },
  methods: {
    handleExport() {
      console.log("导出");
    },
    handlePrint() {
      console.log("打印");
    },
    handleQuery(time) {
      this.time = time;
      this.getList({
        ...this.listQuery,
        time,
        accountSetId: cookies.get("accountSetId"),
      });
    },
    getList(params) {
      page(params).then((response) => {
        this.list = response;
        this.total = response.total;
      });
    },
    // 合并单元格
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      return;
      // 0，1，2列合并三行
      if (columnIndex < 3) {
        if (rowIndex % 3 === 0) {
          return {
            rowspan: 3,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.el-form-item {
  margin-right: 16px;
}
.table-footer {
  padding: 16px;
  text-align: center;
}
</style>
