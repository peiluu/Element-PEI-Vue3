<template>
  <div class="com-custom-dateDicker">
    <template v-if="pickerType === '季'">
      <mark class="mark" v-show="showQuarter" @click.stop="showQuarter = false"></mark>
      <div class="quarter-input-box">
        <el-input :disabled="disabled" placeholder="请选择" :value="dateValue" @focus="showQuarter = true">
          <i slot="prefix" class="el-input__icon el-icon-date"></i>
        </el-input>
        <i class="el-input__icon el-icon-circle-close" v-if="!disabled" @click="reset"></i>
      </div>

      <el-card v-show="showQuarter">
        <div slot="header">
          <button type="button" aria-label="前一年" class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-d-arrow-left" @click="jumpYear(-1)"></button>
          <span role="button" class="el-date-picker__header-label">{{ year }}年</span>
          <button type="button" aria-label="后一年" class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-d-arrow-right" @click="jumpYear(1)"></button>
        </div>
        <el-button type="text" size="medium" @click="selectQuarter(1)">第一季度</el-button>
        <el-button type="text" size="medium" @click="selectQuarter(2)">第二季度</el-button>
        <el-button type="text" size="medium" @click="selectQuarter(3)">第三季度</el-button>
        <el-button type="text" size="medium" @click="selectQuarter(4)">第四季度</el-button>
      </el-card>
    </template>
    <template v-else>
      <el-date-picker :value="modelValue" type="month" :disabled="disabled" value-format="yyyyMM" placeholder="请选择" @input="selectMonth" />
    </template>
  </div>
</template>
<script>
import moment from "moment";
import { whitchQuarter, InitialTime } from "@/utils/tool";

export default {
  name: 'CustomDatePicker',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    pickerType: {
      type: String,
      default: "月",
    },
    // 不可编辑
    disabled: {
      type: Boolean,
      default: false,
    },

  },
  data() {
    return {
      showQuarter: false,
      quarfer: "",
      year: new Date().getFullYear(),
      dateValue: '',
    };
  },
  watch: {
    pickerType() {
      this.reset()
    },
    modelValue: {
      handler(newV) {
        if (newV) {
          if (this.pickerType !== '季') return
          // 初始化年份和季度
          const quarter = whitchQuarter(moment(newV).month());
          const year = moment(newV).year()
          this.$set(this, 'year', year)
          const formatQuarterValue = `${year}年${quarter}季度`;
          this.dateValue = formatQuarterValue
        } else {
          this.reset()
        }
      },
      immediate: true,
    },
  },
  methods: {
    jumpYear(num) {
      this.year = this.year * 1 + num;
    },
    selectQuarter(i) {
      const quarterValue = `${this.year}${InitialTime(i)}`;
      this.$emit('change', quarterValue);
      this.showQuarter = false;
    },
    selectMonth(val) {
      this.$emit('change', val);
    },
    reset() {
      this.dateValue = ''
      this.$emit('change', '');
    },
  },
};
</script>
<style lang="scss" scoped>
.mark {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0);
  z-index: 999;
}

/deep/ .el-card {
  width: 100%;
  position: absolute;
  top: 40px;
  /* left: 22px; */
  padding: 0 3px 20px;
  z-index: 9999;

  .el-card__header {
    text-align: center;
  }

  .el-card__body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .el-button {
      width: 42%;
      margin-left: 0;
      color: #606266;

    }
  }

  .card-item {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }

}

.quarter-input-box {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;

  .el-icon-circle-close {
    position: absolute;
    cursor: pointer;
    right: 4px;
    top: -5px;
    color: #C0C4CC;
  }
}

.time_quarter .el-input--small .el-input__inner {
  width: 82%;
}
</style>
