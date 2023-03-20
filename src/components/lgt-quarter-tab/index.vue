<template>
  <div class="com-quarterly-selection">
    <el-icon @click="goForword(-1)">
      <ArrowLeft />
    </el-icon>

    <el-tabs v-model="currnentItem" type="card">
      <el-tab-pane
        v-for="item in currentList"
        :label="item.label"
        :name="item.time"
        :key="item.time"
      >{{item.label}}</el-tab-pane>
    </el-tabs>

    <el-icon @click="goForword(1)">
      <ArrowRight />
    </el-icon>
  </div>
</template>

<script>
/**
 * @desption 季度tab选择器
 * */
import { getQuarterlyList } from "@/utils/util";
export default {
  name: "lgtQuarterlyTab",
  data() {
    return {
      originList: [], // 完整列表
      currentList: [], // 当前展示的列表
      currnentItem: "",
      originIndex: 0 // 当前的列表在完整列表中的索引
    };
  },

  mounted() {
    this.getQuarterly();
  },
  watch: {
    currnentItem(val) {
      this.$emit("dateChange", val);
    }
  },
  methods: {
    goForword(val) {
      const list = [...this.originList];
      // 移动到末尾不再移动
      if (
        (this.originIndex === 0 && val < 0) ||
        (this.originIndex === list.length - 4 && val > 0)
      )
        return;
      this.currentList = [...list.splice(this.originIndex + val, 4)];
      this.originIndex = this.originIndex + val;
    },
    // 获取初始化季度数据
    getQuarterly() {
      const list = getQuarterlyList(2);
      // 完整列表
      this.originList = [...list];
      this.originIndex = list.length - 4;
      // 目前的展示列表
      this.currentList = [...list.splice(list.length - 4, 4)];
      this.$nextTick(() => {
        this.currnentItem = this.currentList[3].time;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.com-quarterly-selection {
  display: flex;
  align-items: center;
}
.el-icon {
  cursor: pointer;
}
.el-tabs {
  margin: 0 12px;

  /deep/ .el-tabs__header {
    margin: 0;
  }
  .el-tab-pane {
    display: none;
  }
}
</style>
