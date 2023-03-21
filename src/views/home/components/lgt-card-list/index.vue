<template>
  <div class="com-card-list">
    <!-- 头部 -->
    <h3><slot name="header" /></h3>

    <div class="list">
      <!-- 数据列表 -->
      <slot name="list" />

      <!-- 添加card -->
      <el-card class="item" @click="addObj('/businessManage/detail')">
        <div class="item-add">
          <el-icon :size="50" color="#000">
            <CirclePlus />
          </el-icon>
          <div class="add-text"><slot name="addtext" /></div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
/**
 * @description 选择账套
 */
export default {
  name: "LgtCardList",
  data() {
    return {};
  },
  methods: {
    // 新增企业 / 账套
    addObj(path) {
      this.$router.push({
        path,
        query: {
          id: "",
          updateStatus: "create",
          backToChoose: true,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  padding-bottom: 16px;
}
/deep/ .el-card__header {
  display: flex;
  align-content: center;
  justify-content: space-between;
}
.item-add {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 9%;
  .add-text {
    margin-top: 8px;
  }
}
</style>
