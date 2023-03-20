<template>
  <div>
    <div class="m-header">
      <el-card
        class="left"
        @click="$router.push({ path: '/bookKeepingVoucherManage/entry' })"
      >
        <el-icon :size="40" color="#02a7f0">
          <CirclePlus />
        </el-icon>
        <h3>新建凭证</h3>
      </el-card>
      <!-- 我的关注 -->
      <LgtMyFocus />
    </div>

    <el-card class="m-center">
      <template #header>
        <div class="clearfix center-header">
          <span>{{ dateValuesText }}财务指标</span>
          <div class="datapick">
            <el-date-picker
              v-model="dateValue"
              type="month"
              value-format="YYYY-MM"
              placeholder="选择日期"
            />
          </div>
          <span style="float: right; padding: 3px 0">单位（万元）</span>
        </div>
      </template>

      <div class="list">
        <div class="item" v-for="(item, index) in dataList" :key="index">
          <div
            class="sub-item"
            v-for="(subItem, subIndex) in item"
            :key="subIndex"
          >
            <div class="tit">{{ subItem.lable }}</div>
            <div class="txt">{{ 10000 }}</div>
          </div>
        </div>
      </div>
    </el-card>
    <div class="m-charts">
      <div v-for="item in chartList" :key="item.chartId" class="chart-item">
        <LgtChart
          :chartId="item.chartId"
          :chartData="item.chartData"
          :chartConfig="{
            width: chartWidth + 'px',
            height: '400px',
            title: item.title,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LgtMyFocus from "./components/lgt-myfocus/index.vue";
import LgtChart from "./components/lgt-chart/index.vue";
export default {
  name: "taxCludeHome",
  components: {
    LgtMyFocus,
    LgtChart,
  },
  data() {
    return {
      activeQyId: "",
      dateValue: "",
      dateValuesText: "",
      chartList: [
        {
          title: "资金趋势图",
          chartId: "chart1",
          chartData: [],
        },
        {
          title: "营业收入趋势图",
          chartId: "chart2",
        },
      ],
      dataList: [
        [
          {
            lable: "货币资金",
            keyWord: "numver",
          },
          {
            lable: "应收账款",
            keyWord: "numver",
          },
        ],
        [
          {
            lable: "应付账款",
            keyWord: "numver",
          },
          {
            lable: "固定资产",
            keyWord: "numver",
          },
        ],
        [
          {
            lable: "营业收入",
            keyWord: "numver",
          },
          {
            lable: "应缴税费",
            keyWord: "numver",
          },
        ],
        [
          {
            lable: "利润额",
            keyWord: "numver",
          },
          {
            lable: "净利润",
            keyWord: "numver",
          },
        ],
      ],
    };
  },
  computed: {
    chartWidth() {
      return (window.innerWidth - 300) / 2;
    },
  },
  created() {},
  watch: {
    dateValue(val) {
      this.getData(val);
      this.getDateValue(val);
    },
  },
  mounted() {
    this.dateValue = this.getDateValue();
  },

  methods: {
    getData(date) {},

    getDateValue(now) {
      const date = new Date(now || new Date());
      var year = date.getFullYear();
      var mon = date.getMonth() + 1;
      const dateValue = year + "-" + (mon > 9 ? mon : "0" + mon);
      this.dateValuesText = year + "年" + mon + "月";
      return dateValue;
    },
  },
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
