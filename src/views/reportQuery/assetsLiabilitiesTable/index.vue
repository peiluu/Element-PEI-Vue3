<template>
  <div>
    <!-- <lgtQuarterlySelect
      @export="handleExport"
      @print="handlePrint"
      @query="handleQuery"
      formLabel="资产负债表账期"
    /> -->

    <el-scrollbar height="600px">
      <el-table
        border
        stripe
        :data="list"
        v-loading.body="listLoading"
        highlight-current-row
      >
        <el-table-column align="center" label="项目" prop="cateName" />
        <el-table-column align="center" label="行次" prop="time" />
        <el-table-column align="center" label="本年累计金额" prop="time" />
        <el-table-column align="center" label="本期金额" prop="time" />
      </el-table>
      <div class="table-footer">共{{ list.length }}条数据</div>
    </el-scrollbar>
  </div>
</template>

<script>
import { getQuarterlyList } from "@/utils/util";
import lgtQuarterlySelect from "@/components/lgt-quarter-select/index.vue";
import { page } from "../api/index.js";

export default {
  name: "assetsLiabilitiesTable",
  components: { lgtQuarterlySelect },
  data() {
    return {
      form: {},
      list: [],
      listLoading: false,
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        type: 1,
      },
      dialogFormVisible: false,
      dialogStatus: "",
      deleteList: [],
      quarterlyList: [],
    };
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
      page(this.listQuery).then((response) => {
        this.list = response.rows;
        this.total = response.total;
        this.listLoading = false;
      });
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
