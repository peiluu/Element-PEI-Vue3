<template>
  <div>
    <h3 class="m-title">{{ textMap[updateStatus] || "新增企业" }}</h3>
    <el-form
      :model="form"
      :inline="true"
      :rules="rules"
      ref="form"
      label-width="120px"
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
        <span>支持扩展名：png .jpg..不得超过100M</span>
      </el-card>

      <el-card>
        <template #header>基本信息</template>
        <el-form-item label="原始凭据编码" prop="noteNo">
          <el-input v-model="form.noteNo" placeholder="请输入原始凭据编码" />
        </el-form-item>

        <el-form-item label="原始凭据场景" prop="noteType">
          <el-select v-model="form.noteType" filterable>
            <el-option
              v-for="item in noteTypeList"
              :key="item?.value"
              :label="item?.name"
              :value="item?.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="业务类别" prop="type">
          <el-select v-model="form.type">
            <el-option :value="1" label="收入" />
            <el-option :value="2" label="成本" />
            <el-option :value="3" label="其他" />
          </el-select>
        </el-form-item>

        <el-form-item label="发生金额" prop="price">
          <el-input v-model="form.price" placeholder="请输入发生金额" />
        </el-form-item>

        <el-form-item label="发生时间" prop="noteTime">
          <el-date-picker
            v-model="form.noteTime"
            value-format="YYYY-MM-DD"
            placeholder="日期"
          />
        </el-form-item>
      </el-card>
    </el-form>

    <div class="m-footer">
      <el-button
        v-if="updateStatus !== 'detail'"
        type="primary"
        @click="handleSubmit(true)"
        >提交生成凭证</el-button
      >
      <el-button
        v-if="updateStatus !== 'detail'"
        type="primary"
        @click="handleSubmit(false)"
        >提交暂不生成凭证</el-button
      >
      <el-button @click="goBack">取消</el-button>
    </div>
  </div>
</template>

<script>
import cookies from "@/utils/cookies";
import { noteTypeList } from "@/const/index";
import { addObj, editObj, page } from "../api/originalCredential.js";
import { findTaxMetierScene } from "../api/invoice.js";

export default {
  name: "originalVoucherDetail",
  data() {
    return {
      form: {},
      updateStatus: "",
      textMap: {
        update: "编辑原始凭据",
        create: "新增原始凭据",
        detail: "原始凭据详情",
      },
      fileList: [],
      metierSceneList: [],
      connectFlag: false,
      noteTypeList,
      rules: {
        noteType: [
          {
            required: true,
            message: "请选择",
            trigger: "blur",
          },
        ],
        noteNo: [
          {
            required: true,
            message: "请输入原始凭据编码",
            trigger: "blur",
          },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
        noteTime: [
          {
            required: true,
            message: "请选择时间",
            trigger: "blur",
          },
        ],
        type: [
          {
            required: true,
            message: "请选择业务类别",
            trigger: "blur",
          },
        ],
        price: [
          {
            required: true,
            message: "请输入金额",
            trigger: "blur",
          },
          {
            message: "请输入纯数字",
            trigger: "blur",
            pattern: /\d/,
          },
        ],
      },
    };
  },
  created() {},

  mounted() {
    const { id = "", updateStatus = "" } = this.$route.query;
    this.updateStatus = updateStatus;
    this.findTaxMetierScene();
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

    // 返回列表页面
    goBack(orgId) {
      // 去关联记账凭证
      if (this.connectFlag) {
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
        path: "/originalVoucherManage/originalCredentialList",
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
        this.dialogFormVisible = false;
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
        this.dialogFormVisible = false;
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
