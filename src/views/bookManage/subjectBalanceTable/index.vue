<template>
  <div>
    <lgtQuarterlySelect
      @export="handleExport"
      @print="handlePrint"
      @query="handleQuery"
      formLabel="科目余额账期"
    />

    <el-scrollbar height="600px">
      <el-table border :data="list" v-loading.body="listLoading" highlight-current-row show-summary>
        <el-table-column align="center" label="科目编码">
          <template v-slot="scope">
            <el-button link type="primary" @click="goToDetail(scope.row.code)">{{scope.row.code}}</el-button>
          </template>
        </el-table-column>
        <el-table-column align="center" label="科目名称" prop="name" />

        <el-table-column align="center" label="期初余额">
          <el-table-column prop="number" label="借方" />
          <el-table-column prop="number" label="贷方" />
        </el-table-column>

        <el-table-column align="center" label="本期发生额">
          <el-table-column prop="number" label="借方" />
          <el-table-column prop="number" label="贷方" />
        </el-table-column>
        <el-table-column align="center" label="本年累计发生额">
          <el-table-column prop="number" label="借方" />
          <el-table-column prop="number" label="贷方" />
        </el-table-column>
        <el-table-column align="center" label="期末余额">
          <el-table-column prop="number" label="借方" />
          <el-table-column prop="number" label="贷方" />
        </el-table-column>
      </el-table>
      <div class="table-footer">共{{list.length}}条数据</div>
    </el-scrollbar>
  </div>
</template>

<script>
import { getQuarterlyList } from "@/utils/util";
import lgtQuarterlySelect from "@/components/lgt-quarter-select/index.vue";
import { page } from "../api/generalLedger.js";

export default {
  name: "generalLedger",
  components: { lgtQuarterlySelect },
  data() {
    return {
      form: {},
      list: [
        { code: 1001, name: "库存现金", number: "111" },
        { code: 1002, name: "银行存款", number: "111" },
        { code: 1003, name: "应付账款", number: "111" },
        { code: 1004, name: "材料采购", number: "111" }
      ],
      total: 0,
      listLoading: false,
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        type: 1
      },
      dialogFormVisible: false,
      dialogStatus: "",
      deleteList: [],
      quarterlyList: []
    };
  },
  watch: {
    "listQuery.type"() {
      this.getList();
    }
  },
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
    handleQuery(data) {
      console.log("查询", data);
    },
    getList() {
      this.listLoading = true;
      page(this.listQuery).then(response => {
        this.list = response.rows;
        this.total = response.total;
        this.listLoading = false;
      });
    },
    goToDetail(code) {
      this.$router.push({
        path: "/bookManage/subLedgerQuery",
        query: {
          code
        }
      });
    }
  }
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
