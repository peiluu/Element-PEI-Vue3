<template>
  <div>
    <h3 class="m-title">{{ textMap[updateStatus] || "新增企业" }}</h3>
    <el-form
      :model="form"
      :inline="true"
      :rules="rules"
      ref="form"
      label-width="140px"
      class="detail-form"
      :disabled="updateStatus === 'detail'"
    >
      <el-card>
        <template #header>附件上传</template>
        <el-upload
          v-model:file-list="fileList"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          list-type="picture-card"
          :on-remove="handleRemove"
        >
          <el-icon>
            <Plus />
          </el-icon>
        </el-upload>
        <span>支持扩展名: png .jpg..不得超过100M</span>
      </el-card>

      <el-card>
        <template #header>基本信息</template>

        <el-form-item label="原始凭证场景" prop="sceneId">
          <el-select
            v-model="form.sceneId"
            filterable
            placeholder="请选择原始凭证场景"
          >
            <el-option
              v-for="item in metierSceneList"
              :key="item?.id"
              :label="item?.sceneName"
              :value="item?.id.toString()"
            ></el-option>
          </el-select>
        </el-form-item>

        <!-- <el-form-item label="业务类别" prop="sceneId">
          <el-select v-model="form.incomeFlag">
            <el-option :value="1" label="收入" />
            <el-option :value="2" label="成本" />
            <el-option :value="3" label="其他" />
          </el-select>
          <el-select
            v-model="form.sceneId"
            filterable
            placeholder="请选择业务类别"
          >
            <el-option
              v-for="item in metierSceneList"
              :key="item?.id"
              :label="item?.sceneName"
              :value="item?.id.toString()"
            ></el-option>
          </el-select>
        </el-form-item> -->

        <el-form-item label="发票代码" prop="invoiceNo">
          <el-input v-model="form.invoiceNo" placeholder="请输入发票代码" />
        </el-form-item>

        <el-form-item label="开票日期" prop="invoiceTime">
          <el-date-picker
            v-model="form.invoiceTime"
            value-format="YYYY-MM-DD"
            placeholder="日期"
          />
        </el-form-item>

        <el-form-item label="发票号码" prop="invoiceNumber">
          <el-input v-model="form.invoiceNumber" placeholder="请输入发票号码" />
        </el-form-item>
        <!-- <el-form-item label="发票状态" prop="status">
          <el-select v-model="form.status">
            <el-option :value="0" label="小规模纳税人" />
          </el-select>
        </el-form-item> -->
        <el-form-item label="发票类型" prop="invoiceType">
          <el-select v-model="form.invoiceType">
            <el-option :value="0" label="增值税发票" />
            <el-option :value="2" label="普通发票" />
          </el-select>
        </el-form-item>

        <el-form-item label="发票标志" prop="incomeFlag">
          <el-select v-model="form.incomeFlag">
            <el-option :value="1" label="进项票" />
            <el-option :value="2" label="销项票" />
          </el-select>
        </el-form-item>
      </el-card>

      <el-card>
        <template #header>供应商/客户信息</template>
        <el-form-item label="供应商/客户名称" prop="supCustomer">
          <el-input
            v-model="form.supCustomer"
            placeholder="请输入供应商/客户名称"
          />
        </el-form-item>
        <el-form-item label="纳税人识别号码" prop="nsrsbh">
          <el-input v-model="form.nsrsbh" placeholder="请输入纳税人识别号码" />
        </el-form-item>
      </el-card>

      <el-card>
        <template #header>发票数据信息</template>
        <el-form-item label="不含税金额" prop="price">
          <el-input v-model="form.price" placeholder="请输入不含税金额" />
        </el-form-item>
        <el-form-item label="税额" prop="tax">
          <el-input v-model="form.tax" placeholder="请输入税额" />
        </el-form-item>
        <el-form-item label="含税总价" prop="priceTax">
          <el-input v-model="form.priceTax" placeholder="请输入含税总价" />
        </el-form-item>
      </el-card>
    </el-form>

    <div class="m-footer">
      <el-button
        v-if="updateStatus !== 'detail'"
        type="primary"
        @click="handleSubmit(true)"
        >{{ updateStatus === "formEntry" ? "提交" : "提交生成凭证" }}</el-button
      >
      <el-button
        v-if="!['detail', 'formEntry'].includes(updateStatus)"
        type="primary"
        @click="handleSubmit(false)"
        >提交暂不生成凭证</el-button
      >
      <el-button @click="goBack('')">取消</el-button>
    </div>
  </div>
</template>

<script>
import cookies from "@/utils/cookies";

import {
  page,
  addObj,
  editObj,
  findTaxMetierScene,
  findVoucherRule,
} from "../api/invoice.js";

export default {
  name: "oinvoiceDetail",
  data() {
    return {
      form: {},
      rules: {
        sceneId: [
          {
            required: true,
            message: "请选择原始凭证场景",
            trigger: "blur",
          },
        ],

        invoiceNo: [
          {
            required: true,
            message: "请输入发票代码",
            trigger: "blur",
          },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
        invoiceNumber: [
          {
            required: true,
            message: "请输入发票号码",
            trigger: "blur",
          },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
        invoiceTime: [
          {
            required: true,
            message: "请选择发票时间",
            trigger: "blur",
          },
        ],
        invoiceType: [
          {
            required: true,
            message: "请选择发票类型",
            trigger: "blur",
          },
        ],
        incomeFlag: [
          {
            required: true,
            message: "请选择发票标志",
            trigger: "blur",
          },
        ],
        supCustomer: [
          {
            required: true,
            message: "请输入供应商/客户名称",
            trigger: "blur",
          },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 30 个字符",
            trigger: "blur",
          },
        ],
        tax: [
          {
            required: true,
            message: "请输入税额",
            trigger: "blur",
          },
          {
            message: "请输入纯数字",
            trigger: "blur",
            pattern: /\d/,
          },
        ],
        price: [
          {
            required: true,
            message: "请输入不含税金额",
            trigger: "blur",
          },
          {
            message: "请输入纯数字",
            trigger: "blur",
            pattern: /\d/,
          },
        ],
        priceTax: [
          {
            required: true,
            message: "请输入含税总价",
            trigger: "blur",
          },
          {
            message: "请输入纯数字",
            trigger: "blur",
            pattern: /\d/,
          },
        ],
      },
      updateStatus: "",
      textMap: {
        update: "编辑发票",
        create: "新增发票",
        detail: "发票详情",
      },
      fileList: [],
      metierSceneList: [],
      voucherRuleList: [],
      connectFlag: false,
    };
  },
  created() {},

  mounted() {
    this.findTaxMetierScene();
    this.findVoucherRule();
    const { id = "", updateStatus = "" } = this.$route.query;
    this.updateStatus = updateStatus;
    // 如果id 存在就去查询详情
    if (id) {
      this.getDetail({
        pageIndex: 1,
        pageSize: 10,
        id,
      });
    }
  },
  watch: {},
  methods: {
    getDetail(params) {
      page(params).then((response) => {
        this.form = response.rows[0] || {};
      });
    },
    // 获取业务场景
    findTaxMetierScene() {
      findTaxMetierScene({
        pageIndex: 1,
        pageSize: 0,
      }).then((response) => {
        this.metierSceneList = response.rows;
      });
    },

    // 获取凭证规则场景
    findVoucherRule() {
      findVoucherRule({
        pageIndex: 1,
        pageSize: 0,
      }).then((response) => {
        this.voucherRuleList = response.rows;
      });
    },

    // 返回列表页面
    goBack(orgId) {
      // 去关联记账凭证
      if (this.connectFlag || this.updateStatus === "formEntry") {
        this.$router.push({
          path: "/bookKeepingVoucherManage/entry",
          query: {
            orgId,
          },
        });
        return;
      }
      // 直接提交
      this.$router.replace({
        path: "/originalVoucherManage/invoiceList",
      });
    },
    handleRemove(uploadFile) {
      console.log(this.fileList);
      console.log(uploadFile);
    },

    // 提交表单
    handleSubmit(connectFlag) {
      this.$refs["form"].validate((valid) => {
        if (!valid) return false;
        this.connectFlag = connectFlag;
        if (this.updateStatus === "create") {
          this.create();
        } else {
          this.update();
        }
      });
    },
    // 创建账套
    create() {
      addObj({
        ...this.form,
        accountSetId: cookies.get("accountSetId") || "",
      }).then((res = {}) => {
        this.$notify({
          title: "成功",
          message: "新建成功",
          type: "success",
          duration: 2000,
        });
        this.goBack(res.billId);
      });
    },
    // 编辑账套
    update() {
      editObj({
        ...this.form,
        accountSetId: cookies.get("accountSetId") || "",
      }).then((res = {}) => {
        this.$notify({
          title: "成功",
          message: "更新成功",
          type: "success",
          duration: 2000,
        });
        this.goBack(res.billId);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.m-title {
  margin: 0 16px 24px;
}
.m-footer {
  margin: 48px 0 32px 33%;
}
.el-card {
  margin-bottom: 16px;
  &:first-child {
    /deep/ .el-card__body {
      display: flex;
      align-items: flex-end;
      span {
        padding-left: 8px;
      }
    }
  }
}
</style>
