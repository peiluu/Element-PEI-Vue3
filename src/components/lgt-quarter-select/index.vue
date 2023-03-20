<template>
  <el-form :model="form" ref="form" :inline="true">
    <el-form-item :label="formLabel" prop="status">
      <el-form-item prop="periods">
        <!-- 使用作用域插槽向插槽的使用者传递数据 -->
        <slot :form="form" />
      </el-form-item>
      <el-select v-model="form.time">
        <el-option
          v-for="item in quarterlyList"
          :key="item.time"
          :value="item.time"
          :label="item.label"
        />
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" icon="search" @click="$emit('query', form)"
        >查询</el-button
      >
    </el-form-item>

    <el-form-item style="float: right">
      <el-button @click="$emit('export')">导出</el-button>
    </el-form-item>
    <el-form-item style="float: right">
      <el-button @click="$emit('print')">打印</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
/**
 * @desption 季度下拉选择器
 * @param formLabel 表单lable
 */

import { getQuarterlyList } from "@/utils/util";
export default {
  name: "lgtQuarterlySelect",
  props: {
    formLabel: {
      type: String,
    },
    showPeriodsSelect: {
      type: Boolean,
    },
  },
  data() {
    return {
      quarterlyList: [],
      form: {
        time: "",
      },
    };
  },
  watch: {
    "form.time"(val) {
      this.$emit("query", val);
    },
  },
  mounted() {
    this.quarterlyList = getQuarterlyList(2);
    this.form.time = getQuarterlyList(2)[getQuarterlyList(2).length - 1]?.time
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.el-form-item {
  margin-right: 16px;
}
</style>
