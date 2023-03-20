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
      <el-form-item label="企业名称" prop="qymc">
        <el-input v-model="form.qymc" placeholder="请输入企业名称" />
      </el-form-item>

      <el-form-item label="纳税类型" prop="nslx">
        <el-select v-model="form.nslx" disabled>
          <el-option :value="0" label="小规模纳税人" />
        </el-select>
      </el-form-item>

      <el-form-item label="纳税人识别号" prop="nsrsbh">
        <el-input v-model="form.nsrsbh" placeholder="请输入纳税人识别号" />
      </el-form-item>

      <el-form-item label="所属行业" prop="sshy">
        <el-cascader
          v-model="form.sshy"
          :options="cascadeList"
          clearable
          ref="cascaderRef"
          @change="handleChange"
          :props="props"
          popper-class="cascaderClass"
        ></el-cascader>
      </el-form-item>

      <el-form-item label="经营地址" prop="jydz">
        <!-- <EluiChinaAreaDht @change="onChange" />

        <EluiChinaAreaDht isall :leave="2" @change="onChange" />-->
        <!-- <el-cascader
          v-model="form.jydz"
          :options="chinaData"
          clearable
          ref="cascaderRef"
          @change="handleChange"
          :props="addProps"
          popper-class="cascaderClass"
        /> -->
        <el-input v-model="form.jydz" placeholder="请输入经营地址" />
      </el-form-item>

      <el-form-item label="经营范围" prop="jyfw" class="el-form-item-full">
        <el-input
          v-model="form.jyfw"
          :rows="3"
          type="textarea"
          placeholder=" 请输入经营范围"
        />
      </el-form-item>

      <el-form-item label="联系人" prop="lxr">
        <el-input v-model="form.lxr" placeholder="请输入联系人" />
      </el-form-item>

      <el-form-item label="联系电话" prop="lxdh">
        <el-input v-model="form.lxdh" placeholder="请输入联系电话" max="8" />
      </el-form-item>

      <el-form-item label="设为默认" prop="sfmr">
        <el-select v-model="form.sfmr" placeholder>
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
import { page, addObj, editObj, findTaxMetierCascade } from "./api/index.js";
import chinaData from "@/assets/js/china";

// console.log(chinaData);

export default {
  name: "businessManageDetail",
  components: {
    // EluiChinaAreaDht,
  },
  data() {
    return {
      form: {
        nslx: 0,
        sfmr: 1,
      },
      rules: {
        qymc: [
          {
            required: true,
            message: "请输入企业名称",
            trigger: "blur",
          },
          {
            max: 20,
            message: "最多输入20个汉字",
            trigger: "blur",
          },
        ],
        nsrsbh: [
          {
            required: true,
            message: "请输入纳税人识别号",
            trigger: "blur",
          },
          {
            min: 18,
            max: 18,
            message: "长度为18位数字",
            trigger: "blur",
            pattern: /^[0-9]{18}$/,
          },
        ],
        lxdh: [
          {
            min: 18,
            max: 18,
            message: "请输入手机号码格式",
            trigger: "blur",
            pattern:
              /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/,
          },
        ],
        sfmr: [
          {
            required: true,
          },
        ],
      },
      updateStatus: "",
      // 返回选择企业和账套页面
      backToChoose: false,
      // 行业
      cascadeList: [],
      textMap: {
        update: "编辑企业",
        create: "新增企业",
        detail: "企业详情",
      },
      props: {
        label: "metierName",
        value: "id",
        checkStrictly: true,
      },
      addProps: {
        label: "name",
        value: "name",
        checkStrictly: true,
      },
    };
  },
  created() {
    // this.create()
  },

  computed: {
    chinaData() {
      return chinaData;
    },
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
    this.findTaxMetierCascade();
    // 如果id 存在就去查询详情
    if (id) {
      this.getDetail({
        pageIndex: 1,
        pageSize: 10,
        id,
      });
    }
  },
  methods: {
    onChange(e) {
      const one = this.chinaData[e[0]];
      const two = this.chinaData[e[1]];
      console.log(one, two);
    },
    getDetail(params) {
      page(params).then((response) => {
        this.form = response.rows[0] || {};
      });
    },
    toBack() {
      const path = this.backToChoose
        ? "/chooseAccountSet"
        : "/businessManage/list";
      this.$router.replace({ path });
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
    // 创建企业
    create() {
      addObj(this.form).then(() => {
        this.dialogFormVisible = false;
        this.$notify({
          title: "成功",
          message: "新建成功",
          type: "success",
          duration: 2000,
        });
        this.toBack();
      });
    },
    // 编辑企业
    update() {
      editObj(this.form).then(() => {
        this.dialogFormVisible = false;
        this.$notify({
          title: "成功",
          message: "更新成功",
          type: "success",
          duration: 2000,
        });
        this.toBack();
      });
    },
    // 查询行业级联列表
    findTaxMetierCascade() {
      findTaxMetierCascade().then((response) => {
        this.cascadeList = response;
      });
    },
    handleChange(value) {
      console.log(this.$refs.cascaderRef);
      this.form.sshy = value && value.length ? value[value.length - 1] : "";
      this.$refs.cascaderRef.togglePopperVisible();
    },
  },
};
</script>
<style lang="scss" scoped>
.m-title {
  margin: 0 16px 24px;
}

.m-footer {
  margin: 32px 0 32px 33%;
}
</style>
