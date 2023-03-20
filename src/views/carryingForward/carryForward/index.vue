<template>
  <div>
    <LgtQuarterlyTab @dateChange="handleDateChange" />
    <div class="m-header">
      <h3>已到结账期，赶紧结账吧！</h3>
      <el-button @click="handleUpdate('', 'create')" type="primary">一键结账</el-button>
    </div>

    <div class="m-list">
      <el-card v-for="item in list" :key="item.id">
        <template #header>
          <div class="clearfix">{{item.name}}</div>
        </template>

        <div class="item">
          <div>金额：{{item.number}}</div>
          <el-button v-if="item.status === 0" @click="carryForward" type="primary">结转</el-button>
          <el-button v-else @click="generateVoucher" type="primary">生成凭证</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { ElMessageBox, ElMessage } from "element-plus";
import { page } from "../api/index.js";

import LgtQuarterlyTab from "@/components/lgt-quarter-tab/index.vue";

export default {
  name: "carryForward",
  components: { LgtQuarterlyTab },
  data() {
    return {
      form: {},
      list: [
        { name: "结转损益", number: 111, status: 0 },
        { name: "应交税费", number: 111, status: 0 },
        { name: "销售成本", number: 1414, status: 1 },
        { name: "XXXX", number: 41414, status: 1 }
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
      deleteList: []
    };
  },

  mounted() {
    // this.getList()
  },
  computed() {},

  methods: {
    getList() {
      this.listLoading = true;
      page(this.listQuery).then(response => {
        this.list = response.rows;
        this.total = response.total;
        this.listLoading = false;
      });
    },
    // 改变查询季度
    handleDateChange(val) {
      console.log(val);
    },
    // 结转
    carryForward() {
      ElMessageBox({
        title: "已结转",
        message: "本期结转发生额xxx",
        showCancelButton: true,
        cancelButtonText: "关闭",
        confirmButtonText: "生成凭证"
      })
        .then(() => {
          this.generateVoucher();
        })
        .catch(() => {});
    },

    // 生成凭证
    generateVoucher() {
      ElMessage("生成凭证");
    }
  }
};
</script>
<style lang="scss" scoped>
.m-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}
h3 {
  color: #ccc;
  padding: 16px 0 8px;
}

.m-list {
  display: flex;
  padding: 16px 24px;
  .el-card {
    flex-basis: 25%;
    &:not(last-type) {
      margin-right: 24px;
    }
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    .el-button {
      margin-top: 12px;
      width: 30%;
    }
  }
}
</style>
