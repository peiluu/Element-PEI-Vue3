<template>
  <el-popover placement="bottom" width="430" trigger="click">
    <div class="col-warpper">
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
        >全选</el-checkbox
      >
      <span @click="handleSetDefault" class="defalul-span">恢复默认</span>
      <div style="margin: 5px 0 10px; border-bottom: 1px solid #eee"></div>
      <el-checkbox-group v-model="checkedVals" @change="handleColChange">
        <el-checkbox
          v-for="col in cols"
          :label="col.title"
          :key="col.title"
          :disabled="col.isDisabled"
          >{{ col.title }}</el-checkbox
        >
      </el-checkbox-group>
    </div>
    <el-button class="col-setting" slot="reference">自定义列</el-button>
  </el-popover>
</template>
<script>
export default {
  name: 'ColSetting',
  props: {
    columns: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      checkAll: false,
      checkedVals: [],
      isIndeterminate: true
    };
  },
  computed: {
    cols() {
      // isCanSetting：true 能操作的动态列
      return this.columns.filter(
        item =>
          item.type !== 'selection' &&
          item.type !== 'index' &&
          item.key !== 'action'
      );
    }
  },
  created() {
    this.setDefault();
  },
  methods: {
    handleSetDefault() {
      this.setDefault();
      this.$nextTick(() => {
        this.handleColChange();
      });
    },
    // 设置默认值
    setDefault(t = false) {
      let checkedVals = [];
      this.columns.map(
        item => item.isDefaulSeleced && checkedVals.push(item.title)
      );
      this.checkedVals = checkedVals;
    },
    // 全选
    handleCheckAllChange(val) {
      let cv = [];
      if (val) {
        cv = this.cols.map(item => item.title);
      } else {
        this.columns.map(item => item.isDisabled && cv.push(item.title));
      }
      this.checkedVals = cv;
      this.isIndeterminate = false;
      this.$nextTick(() => {
        this.handleColChange();
      });
    },
    // 单个切换
    handleColChange() {
      const newCol = [];
      this.columns.map(item => {
        let cur = {};
        let hidden =
          this.checkedVals.indexOf(item.title) === -1 &&
          item.type !== 'selection' &&
          item.type !== 'index' &&
          item.key !== 'action';
        cur = { ...item, hidden };
        newCol.push(cur);
      });
      this.$emit('setCol', newCol);
    }
  }
};
</script>
<style lang="scss" scoped>
.col-setting {
  margin-left: 10px;
}
.col-warpper {
  /deep/ .el-checkbox-group {
    display: flex;
    flex-wrap: wrap;
  }
  /deep/ .el-checkbox {
    width: 50%;
    margin: 0 0 5px 0;
  }
}
.defalul-span {
  color: $primaryGreenColor;
  &:hover {
    cursor: pointer;
  }
}
</style>
