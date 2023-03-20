<template>
  <div>
    <h1>关联凭证</h1>
    <el-form :model="listQuery" ref="form" :inline="true">
      <LgtQuarterlyTab @dateChange="handleDateChange" />
      <div class="form-item">
        <el-form-item label="凭证编码" prop="mark">
          <el-input
            @keyup.enter="getList"
            placeholder="凭证编码"
            v-model="listQuery.mark"
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" icon="search" @click="getList()"
            >查询</el-button
          >
        </el-form-item>
      </div>
    </el-form>

    <div class="table-tip">
      <el-icon color="#1890FF"> <Warning /> </el-icon>已选择
      <span>{{ selectionList.length }}</span>
      项
    </div>
    <el-table
      stripe
      row-key="id"
      :data="list"
      highlight-current-row
      :span-method="objectSpanMethod"
      @selection-change="handleSelectionChange"
    >
      <el-table-column align="center" type="selection" width="60" />

      >
      <el-table-column align="center" type="index" label="序号" width="60" />

      <el-table-column align="center" label="凭证字号">
        <template v-slot="scope">
          <el-button
            v-if="scope.row.mark"
            link
            type="primary"
            @click="handleUpdate(scope.row.id, 'detail')"
            >记-{{ scope.row.mark }}</el-button
          >
        </template>
      </el-table-column>
      <el-table-column align="center" label="摘要" prop="summary" sortable />

      <el-table-column align="center" label="科目" prop="subjectName" />
      <el-table-column align="center" label="借方金额" prop="creditPrice" />
      <el-table-column align="center" label="贷方金额" prop="debitPrice" />
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
    <div class="m-footer">
      <el-button type="primary" @click="relationVoucher">关联</el-button>

      <el-button @click="goBack()">取消</el-button>
    </div>
  </div>
</template>

<script>
import LgtQuarterlyTab from "@/components/lgt-quarter-tab/index.vue";
import cookies from "@/utils/cookies";

import { page, delObj, relationVoucher } from "../api/associatedVoucher.js";

export default {
  name: "voucherQuery",
  components: { LgtQuarterlyTab },

  data() {
    return {
      form: {},
      list: [],
      time: "",
      total: 0,
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
      },
      orgId: "",
      type: "",

      selectionList: [],
      treeProps: {
        children: "children",
        hasChildren: "hasChildren",
      },
    };
  },
  mounted() {
    // 查询详情
    const { orgId = "", type = "" } = this.$route.query;
    this.type = type;
    this.orgId = orgId;
  },
  methods: {
    // 合并单元格
    objectSpanMethod(row, column, rowIndex, columnIndex) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
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

    // 获取列表数据
    getList(val) {
      page({
        ...this.listQuery,
        accountSetId: cookies.get("accountSetId") || "",
        time: val || this.time,
      }).then((response) => {
        this.list = response.rows.map((item) => {
          return {
            ...item,
            // hasChildren: item.list.length > 0,
            // 列表中至少存在一个字段
            children: item.list.filter(
              (item) =>
                item.summary ||
                item.subjectName ||
                item.creditPrice != 0 ||
                item.debitPrice != 0
            ),
          };
        });

        this.total = response.total;
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
    // 改变查询季度
    handleDateChange(val) {
      this.time = val;
      this.getList(val);
    },
    handleSelectionChange(val) {
      this.selectionList = val;
    },
    // 编辑
    handleUpdate(id = "", updateStatus = "") {
      this.$router.push({
        path: "/bookKeepingVoucherManage/entry",
        query: {
          id,
          updateStatus,
        },
      });
    },

    // 关联凭证
    relationVoucher() {
      relationVoucher({
        orgId: this.orgId,
        voucherIds: this.selectionList.map((item) => item.id),
      }).then(() => {
        this.goBack();
      });
    },

    goBack() {
      const path =
        this.type === "invoice"
          ? "/originalVoucherManage/invoiceList"
          : "/originalVoucherManage/originalCredentialList";
      this.$router.replace({
        path,
      });
    },
    handleEnter(row) {
      this.$confirm("确定将本条(批)凭证红冲吗?", "提示", {
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

    handleDelete(flag, id) {
      this.$confirm("你确定要删除所选内容吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          const ids =
            flag === "all" ? this.selectionList.map((item) => item.id) : [id];
          delObj({ ids }).then(() => {
            this.$notify({
              title: "成功",
              message: "删除成功",
              type: "success",
              duration: 2000,
            });
            this.getList();
          });
        })
        .catch(() => {});
    },
  },
};
</script>
<style lang="scss" scoped>
.el-form {
  display: flex;
  align-items: center;
  margin: 16px 0;
  .el-form-item {
    margin: 0 0 0 16px;
  }
}

.table-tip {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  margin-top: 8px;
  background: #e6f7ff;
  border-radius: 4px;
  border: 1px solid #ade0ff;

  .el-icon {
    margin-right: 4px;
  }
  span {
    color: #1890ff;
  }
}
.m-footer {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}
</style>
