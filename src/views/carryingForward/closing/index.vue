<template>
  <div>
    <LgtQuarterlyTab @dateChange="handleDateChange" />

    <div class="m-header">
      <h3>已到结账期，赶紧结账吧！</h3>
      <el-button @click="handleUpdate('', 'create')" type="primary">一键结账</el-button>
    </div>

    <el-tabs v-model="listQuery.type" type="card">
      <el-tab-pane
        v-for="item in tabsList"
        :label="item.label"
        :name="item.id"
        :key="item.id"
      >{{item.label}}</el-tab-pane>
    </el-tabs>

    <div class="m-list-header">
      <div class="left">
        <span>资产类科目余额</span>
        <span>共有7项类目</span>
        <span>
          <el-icon>
            <CircleCheck color="green" size="20" />
          </el-icon>已结账
        </span>
        <span>
          <el-icon>
            <Warning color="green" size="20" />
          </el-icon>未结账
        </span>
      </div>

      <el-button @click="handleUpdate('', 'create')" type="primary">结账</el-button>
    </div>
    <div class="m-list">
      <div class="item" v-for="item in list" :key="item.id">
        <div class="item-left">{{item.name}}</div>
        <div class="item-right">
          <div class="right-itm" v-for="itx in itemList" :key="item.label">
            <div>{{itx.label}}</div>
            <div>{{item[itx.propsKey]}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { page, delObj } from "../api/index.js";
import LgtQuarterlyTab from "@/components/lgt-quarter-tab/index.vue";

export default {
  name: "closing",
  components: { LgtQuarterlyTab },

  data() {
    return {
      form: {},
      tabsList: [
        { label: "资产类", id: 1 },
        { label: "负债类", id: 2 },
        { label: "权益类", id: 3 },
        { label: "成本类", id: 4 },
        { label: "损益类", id: 5 }
      ],
      list: [
        { name: "结转损益", number: 111 },
        { name: "应交税费", number: 111 },
        { name: "销售成本", number: 111 },
        { name: "XXXX", number: 111 }
      ],
      total: 0,
      listLoading: false,
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        type: 1
      },

      itemList: [
        { label: "期初余额", propsKey: "number" },
        { label: "本期借方发生额", propsKey: "number" },
        { label: "本期贷方发生额", propsKey: "number" },
        { label: "期末余额", propsKey: "number" }
      ]
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

    handleUpdate(id = "", dialogStatus = "") {
      this.dialogFormVisible = true;
      this.dialogStatus = dialogStatus;
    },

    handleSelectionChange(val) {
      this.deleteList = val;
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
      });
    },
    handleCloseDialog(updateFlag) {
      console.log(1);
      this.dialogFormVisible = false;
      if (updateFlag) {
        this.getList();
      }
    },
    handleDateChange(val) {
      console.log(val);
    }
  }
};
</script>
<style lang="scss" scoped>
.m-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h3 {
  color: #ccc;
  padding: 8px 0;
}
.m-list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
    justify-content: space-between;
  }
  span {
    padding-right: 8px;
  }
}
.el-tabs {
  display: flex;
  align-items: center;
  padding-bottom: 24px;
  span {
    padding-right: 8px;
  }

  /deep/ .el-tabs__header {
    margin: 0;
  }
  .el-tab-pane {
    display: none;
  }
}
.m-list {
  padding: 16px 64px;
  .item {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 8px;
    border-bottom: 1px solid #ccc;
  }
  .item-right {
    display: flex;
    .right-itm {
      text-align: center;
      margin-left: 64px;
      div {
        padding-top: 8px;
      }
    }
  }
}
</style>
