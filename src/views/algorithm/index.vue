<template>
  <div></div>
</template>

<script lang="ts">
export default {
  name: "taxCludeHome",
  components: {},
  data() {
    return {
      activeQyId: "",
      dateValue: "",
      dateValuesText: "",
      chartList: [
        {
          title: "资金趋势图",
          chartId: "chart1",
          chartData: []
        },
        {
          title: "营业收入趋势图",
          chartId: "chart2"
        }
      ],
      dataList: [
        [
          {
            lable: "货币资金",
            keyWord: "numver"
          },
          {
            lable: "应收账款",
            keyWord: "numver"
          }
        ],
        [
          {
            lable: "应付账款",
            keyWord: "numver"
          },
          {
            lable: "固定资产",
            keyWord: "numver"
          }
        ],
        [
          {
            lable: "营业收入",
            keyWord: "numver"
          },
          {
            lable: "应缴税费",
            keyWord: "numver"
          }
        ],
        [
          {
            lable: "利润额",
            keyWord: "numver"
          },
          {
            lable: "净利润",
            keyWord: "numver"
          }
        ]
      ]
    };
  },
  computed: {},
  created() {},
  watch: {},
  mounted() {},

  methods: {}
};
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
