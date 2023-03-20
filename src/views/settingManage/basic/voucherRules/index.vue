<template>
  <div class="p-page">
    <el-form :model="listQuery" ref="form" :inline="true">
      <el-form-item label="规则名称" prop="name">
        <el-input
          @keyup.enter="getList"
          placeholder="规则名称"
          v-model="listQuery.name"
        />
      </el-form-item>

      <el-form-item label="业务类别" prop="ywType">
        <el-select v-model="listQuery.ywType">
          <el-option
            v-for="item in metierSceneList"
            :key="item.id"
            :label="item.sceneName"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="原始凭证类别" prop="originalType">
        <el-select v-model="listQuery.originalType">
          <el-option value="发票" label="发票" />
        </el-select>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="listQuery.status">
          <el-option :value="1" label="开启"></el-option>
          <el-option :value="0" label="关闭"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" icon="search" @click="getList"
          >查询</el-button
        >
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>

    <div class="m-btns">
      <el-button @click="handleUpdate('', 'create')" type="primary"
        >新增</el-button
      >
      <el-button
        @click="handleDelete('all')"
        type="primary"
        :disabled="selectionList.length <= 0"
        >批量删除</el-button
      >
    </div>
    <div class="table-tip">
      <el-icon color="#1890FF"> <Warning /> </el-icon>已选择
      <span>{{ selectionList.length }}</span>
      项
    </div>
    <el-table
      stripe
      :data="list"
      v-loading.body="listLoading"
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        align="center"
        type="selection"
        label="序号"
        width="60"
      />

      <el-table-column align="center" label="规则名称">
        <template v-slot="scope">
          <el-button
            link
            type="primary"
            @click="handleUpdate(scope.row.id, 'detail')"
            >{{ scope.row.name }}</el-button
          >
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="原始凭证类别"
        prop="originalType"
      />

      <el-table-column align="center" label="业务类别" prop="sceneName" />

      <el-table-column align="center" label="科目管理">
        <template v-slot="scope">
          {{ getSubjectInfo(scope.row.jsonSubject) }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="状态">
        <template v-slot="scope">
          {{ scope.row.status == 1 ? "已启用" : "已停用" }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="300" fixed="right">
        <template v-slot="scope">
          <el-button
            type="primary"
            link
            @click="updateVoucherRuleStatus(scope.row)"
            >{{ scope.row.status == "1" ? "启停" : "启用" }}</el-button
          >
          <el-button type="primary" link @click="handleDelete('', scope.row.id)"
            >删除</el-button
          >
          <el-button
            type="primary"
            link
            @click="handleUpdate(scope.row.id, 'update')"
            >编辑</el-button
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
import {
  page,
  delObj,
  findMetierScene,
  updateVoucherRuleStatus,
} from "../../api/voucherRule.js";
export default {
  name: "voucherRulesList",

  data() {
    return {
      form: {},
      list: [],
      total: 0,
      listLoading: false,
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
      },
      selectionList: [],
      metierSceneList: [],
    };
  },
  mounted() {
    this.getList();
    this.findMetierScene();
  },
  methods: {
    getList() {
      page(this.listQuery).then((response) => {
        this.list = response.rows;
        this.total = response.total;
      });
    },
    // 获取业务场景类别
    findMetierScene() {
      findMetierScene({
        pageIndex: 1,
        pageSize: 0,
      }).then((response) => {
        this.metierSceneList = response.rows;
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

    handleUpdate(id = "", updateStatus = "") {
      this.$router.push({
        path: "/basic/voucherRulesDetail",
        query: {
          id,
          updateStatus,
        },
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

    // 重置表单
    reset() {
      this.listQuery = {
        pageIndex: 1,
        pageSize: 10,
      };
      this.getList();
    },
    // 多选
    handleSelectionChange(val) {
      this.selectionList = val;
    },
    // 修改状态
    updateVoucherRuleStatus(row) {
      updateVoucherRuleStatus({ id: row.id }).then(() => {
        this.$notify({
          title: "成功",
          message: "操作成功",
          type: "success",
          duration: 2000,
        });
        this.getList();
      }); 
    },
    // 根据json字符串拼接得出科目管理信息
    getSubjectInfo(data = "") {
      const list = JSON.parse(data);
      let str = "";
      list.map((item) => {
        str = `${str}\n\n${item.dcdirection == 0 ? "借" : "贷"}：${
          item.subjectName
        }`;
      });
      return str;
    },
  },
};
</script>
<style lang="scss" scoped>
.m-btns {
  float: right;

  .el-button {
    margin: 0 0 16px 16px;
  }
}

.table-tip {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  margin-top: 48px;
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
</style>
