<template>
  <div class="p-page">
    <h3 class="m-title">{{ textMap[updateStatus] || "新增账套" }}</h3>
    <el-form
      :model="form"
      :inline="true"
      :rules="rules"
      ref="form"
      label-width="100px"
      class="detail-form"
      :disabled="updateStatus === 'detail'"
    >
      <el-form-item label="账套名称" prop="accountSetName">
        <el-input v-model="form.accountSetName" placeholder="请输入账套名称" />
      </el-form-item>
      <el-form-item label="所属企业" prop="qyId">
        <el-input v-model="qyInfo.qymc" disabled />
      </el-form-item>

      <el-form-item label="启用期间" prop="qysj">
        <el-date-picker
          v-model="form.qysj"
          type="month"
          placeholder="选择日期"
          value-format="YYYYMM"
        />
      </el-form-item>

      <el-form-item label="本位币" prop="bwb">
        <el-select v-model="form.bwb" disabled>
          <el-option :value="0" label="人民币（RMB）" />
        </el-select>
      </el-form-item>

      <el-form-item label="会计制度" prop="kjzd">
        <el-select v-model="form.kjzd" disabled>
          <el-option value="会计制度" label="小企业会计准则（2013年颁布）" />
        </el-select>
      </el-form-item>

      <el-form-item label="科目体系" prop="kmtx">
        <el-select v-model="form.kmtx" disabled>
          <el-option value="简易科目" label="简易科目" />
        </el-select>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="form.status" placeholder="请选择借贷方向">
          <el-option :value="1" label="开启" />
          <el-option :value="0" label="关闭" />
        </el-select>
      </el-form-item>
    </el-form>

    <div class="m-footer">
      <el-button @click="toBack">取消</el-button>
      <el-button
        v-if="updateStatus !== 'detail'"
        type="primary"
        @click="handleSubmit"
        >提交</el-button
      >
    </div>
  </div>
</template>

<script>
import { addObj, editObj, findAccountSet } from "./api/index.js";
import cookies from "@/utils/cookies";
export default {
  name: "setManageDetail",
  data() {
    return {
      form: {
        kmtx: "简易科目",
        status: 1,
        kjzd: "小企业会计准则（2013年颁布）",
        bwb: 0,
      },
      rules: {
        accountSetName: [
          {
            required: true,
            message: "请输入账套名称",
            trigger: "blur",
          },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
        qysj: [
          {
            required: true,
            message: "请选择启用期间",
            trigger: "blur",
          },
        ],
        accoutingStandard: [
          {
            required: true,
            message: "请选择会计准则",
            trigger: "blur",
          },
        ],
      },
      updateStatus: "",
      // 返回选择企业和账套页面
      backToChoose: false,
      textMap: {
        update: "编辑账套",
        create: "新增账套",
        detail: "账套详情",
      },
    };
  },
  created() {
    // console.log(this.$cookies)
    // this.cookies.removeAll();
  },

  mounted() {
    // 查询详情
    const {
      id = "",
      updateStatus = "",
      backToChoose = false,
    } = this.$route.query;
    this.backToChoose = backToChoose;
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
  computed: {
    // 主体企业信息
    qyInfo() {
      return {
        qyId: cookies.get("qyId"),
        qymc: cookies.get("qymc"),
      };
    },
  },
  methods: {
    getDetail(params) {
      findAccountSet(params).then((response) => {
        this.form = response.rows[0] || {};
      });
    },

    // 提交表单
    handleSubmit() {
      const set = this.$refs;
      set["form"].validate((valid) => {
        if (!valid) return false;
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
        qyId: this.qyInfo.qyId,
      }).then(() => {
        this.$notify({
          title: "成功",
          message: "新建成功",
          type: "success",
          duration: 2000,
        });
        this.toBack();
      });
    },
    // 编辑账套
    update() {
      editObj(this.form).then(() => {
        this.getList();
        this.$notify({
          title: "成功",
          message: "更新成功",
          type: "success",
          duration: 2000,
        });
        this.toBack();
      });
    },
    toBack() {
      const path = this.backToChoose ? "/chooseAccountSet" : "/setManage/list";
      this.$router.replace({ path });
    },
  },
};
</script>
<style lang="scss" scoped>
.p-page {
  .m-title {
    margin: 0 16px 24px;
  }
  .m-footer {
    margin: 32px 0 32px 33%;
  }
}
</style>
