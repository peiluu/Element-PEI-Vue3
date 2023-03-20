<template>
  <div class="p-page">
    <el-form :model="listQuery" ref="form" :inline="true">
      <el-tabs v-model="listQuery.incomeFlag" type="card">
        <el-tab-pane label="进项发票" :name="1" />
        <el-tab-pane label="销项发票" :name="2" />
      </el-tabs>

      <el-form-item label="发票号码" prop="invoiceNumber">
        <el-input
          @keyup.enter="getList"
          placeholder="发票号码"
          v-model="listQuery.invoiceNumber"
        />
      </el-form-item>

      <el-form-item label="发票类型" prop="invoiceType">
        <el-select v-model="listQuery.invoiceType">
          <el-option :value="0" label="增值税发票" />
          <el-option :value="2" label="普通发票" />
        </el-select>
      </el-form-item>

      <el-form-item label="发票日期" prop="invoiceTime">
        <el-date-picker
          v-model="listQuery.invoiceTime"
          value-format="YYYY-MM-DD"
          placeholder="发票日期"
        />
      </el-form-item>

      <!-- <el-form-item label="发票状态" prop="status">
        <el-select v-model="listQuery.status">
          <el-option :value="1" label="开启"></el-option>
          <el-option :value="2" label="关闭"></el-option>
        </el-select>
      </el-form-item> -->

      <el-form-item>
        <el-button type="primary" icon="search" @click="getList"
          >查询</el-button
        >
      </el-form-item>

      <div>
        <el-form-item>
          <el-button type="primary" @click="handleUpdate('', 'create')"
            >新增</el-button
          >
        </el-form-item>

        <el-form-item style="float: right">
          <el-button @click="$emit('export')">导出</el-button>
        </el-form-item>
        <el-form-item style="float: right">
          <el-button @click="$emit('print')">打印</el-button>
        </el-form-item>
      </div>
    </el-form>

    <el-table
      stripe
      :data="list"
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <el-table-column align="center" type="selection" label="选择" />
      <el-table-column align="center" type="index" label="序号" width="60" />

      <!-- <el-table-column align="center" label="凭证编码">
        <template v-slot="scope">
          <el-button
            link
            type="primary"
            @click="handleUpdate(scope.row.id, 'detail')"
            >{{ scope.row.cateName }}</el-button
          >
        </template>
      </el-table-column> -->
      <el-table-column align="center" label="发票号码">
        <template v-slot="scope">
          <el-button
            link
            type="primary"
            @click="handleUpdate(scope.row.id, 'detail')"
            >{{ scope.row.invoiceNumber }}</el-button
          >
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        label="发票日期"
        prop="invoiceTime"
        width="100px"
      />

      <el-table-column align="center" label="发票类型" width="100px">
        <template v-slot="scope">{{
          scope.row.invoiceType === 0 ? "增值税发票" : "普通发票"
        }}</template>
      </el-table-column>

      <el-table-column align="center" label="发票代码" prop="invoiceNo" />

      <el-table-column
        align="center"
        label="供应商名称"
        prop="supCustomer"
        width="100px"
      />
      <el-table-column
        align="center"
        label="不含税金额"
        prop="price"
        width="100px"
      />
      <el-table-column align="center" label="税额" prop="tax" />
      <el-table-column align="center" label="价税合计" prop="priceTax" />

      <!-- <el-table-column align="center" label="发票状态">
        <template v-slot="scope">{{
          scope.row.status === 1 ? "正常" : "异常"
        }}</template>
      </el-table-column> -->
      <el-table-column align="center" label="凭证字号">
        <template v-slot="scope">
          <el-button
            link
            type="primary"
            v-for="item in scope?.row?.mark.split(',')"
            :key="item"
            @click="goToDetail(item, 'detail')"
            >记{{ item }}；</el-button
          >
        </template>
      </el-table-column>
      <el-table-column align="center" label="记账周期" />

      <el-table-column align="center" label="附件">
        <template v-slot="scope">查询</template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="200" fixed="right">
        <template v-slot="scope">
          <el-button
            type="primary"
            link
            @click="showDialog(true, scope.row.billId)"
            >生成凭证</el-button
          >
          <el-button
            type="primary"
            link
            @click="handleUpdate(scope.row.id, 'update')"
            >修改</el-button
          >
          <el-button type="primary" link @click="handleDelete(scope.row)"
            >删除</el-button
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
    <el-dialog
      center
      title="请选择您要操作的类型"
      v-model="dialogTableVisible"
      width="20%"
    >
      <!-- :disabled="isDetail" -->
      <el-button type="primary" @click="associatedVoucher('new')"
        >新增新的凭证</el-button
      >
      <el-button type="primary" @click="associatedVoucher('list')"
        >关联以往凭证</el-button
      >
    </el-dialog>
  </div>
</template>

<script>
import cookies from "@/utils/cookies";

import { page, delObj } from "../api/invoice.js";

export default {
  name: "invoiceList",
  data() {
    return {
      form: {},
      list: [],
      total: 0,
      listQuery: {
        incomeFlag: 1,
        pageIndex: 1,
        pageSize: 10,
      },
      dialogTableVisible: false,
      // 当前操作的id
      currentId: "",
    };
  },
  mounted() {
    this.getList();
  },
  watch: {
    "listQuery.incomeFlag"() {
      this.getList();
    },
  },
  methods: {
    getList() {
      page({
        ...this.listQuery,
        accountSetId: cookies.get("accountSetId") || "",

      }).then((response) => {
        this.list = response.rows;
        this.total = response.total;
      });
    },
    // 查看记账凭证详情
    goToDetail(mark) {
      this.$router.push({
        path: "/bookKeepingVoucherManage/entry",
        query: {
          mark,
          // 记账凭证关联的原始凭证类型
          markType: "invoice",
          updateStatus: "detail",
        },
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

    handleSelectionChange(val) {
      this.deleteList = val;
    },
    handleUpdate(id = "", updateStatus = "") {
      this.$router.push({
        path: "/originalVoucherManage/invoiceDetail",
        query: {
          id,
          updateStatus,
        },
      });
    },
    // 显示弹窗
    showDialog(flag, id) {
      this.dialogTableVisible = flag;
      this.currentId = id;
    },

    // 关联凭证
    associatedVoucher(type) {
      const path =
        type === "new"
          ? "/bookKeepingVoucherManage/entry"
          : "/originalVoucherManage/associatedVoucher";
      this.$router.push({
        path,
        query: {
          type: "invoice",
          orgId: this.currentId,
        },
      });
    },

    handleDelete(row) {
      this.$confirm("你确定要删除这行内容吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        delObj({ ids: [row.id] }).then(() => {
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
<style lang="scss">
.el-dialog__body {
  display: flex;
  justify-content: center;
}
</style>
