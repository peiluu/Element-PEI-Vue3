<template>
  <div>

  </div>
</template>

<script setup lang="ts">
import { reactive, defineProps, ref, defineEmits, onMounted, watch } from "vue";
// import { fa } from "element-plus/es/locale";
const checked: boolean = ref(false);
const a: boolean = false
const cascaderRef = ref();
const textMap = reactive({
  update: "编辑科目",
  create: "新增科目",
  addSub: "新增下级科目",
});
onMounted(() => {
  console.log(a)
})
const dialogFormVisible = ref(false);
const form = reactive({ status: 1 });
</script>

<style lang="scss" scoped>
.m-header {
  display: flex;

  .left {
    display: flex;
    flex-basis: 20%;
    margin-right: 24px;


    .el-icon-circle-plus-outline {
      font-size: 60px;
      color: #589df4;
    }

    /deep/ .el-card__body {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  h3 {
    margin-top: 12px;
  }
}

.m-center {
  margin-top: 24px;

  .center-header {
    width: 100%;
    display: flex;
    align-items: center;

    span:first-child {
      flex-basis: 43%;
    }

    .datapick {
      flex-basis: 51%;
    }
  }

  .list {
    display: flex;
    justify-content: space-between;
  }

  .item {
    flex-basis: 33%;
    display: flex;
    justify-content: space-around;
    text-align: center;

    &:not(:last-child) {
      border-right: 1px solid #ccc;
    }

    .tit {
      margin-bottom: 30%;
    }
  }
}

.m-charts {
  display: flex;
}

/deep/ .el-icon {
  cursor: pointer;
}
</style>
