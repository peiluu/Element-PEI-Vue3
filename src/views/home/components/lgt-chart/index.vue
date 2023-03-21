<template>
  <div class="com-histogram-chart">
    <div class="title" v-if="chartConfig.name">
      <div>{{ chartConfig.title }}</div>
    </div>
    <div
      :title="chartConfig.title"
      :id="chartId"
      :style="{ width: chartConfig.width, height: chartConfig.height }"
    />
  </div>
</template>

<script>
/* eslint-disable */
import * as echarts from "echarts";
import { getArrayByKey, getMaxMinByKey } from "@/utils/util";

/**
 * @description - 折线柱状混合图组件
 */
export default {
  name: "LgtChart",
  props: {
    chartData: {
      type: Array,
      default: () => []
    },
    activeChartName: {
      type: String,
      default: ""
    },
    chartId: {
      type: String,
      default: "main"
    },
    chartConfig: {
      type: Object,
      default: () => {
        return {
          width: "1200px",
          height: "400px",
          name: ""
        };
      }
    },
    yearList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  computed: {
    yearArr() {
      return JSON.parse(JSON.stringify(this.yearList)).reverse();
    }
  },
  watch: {
    chartData(val) {
      this.init();
    },
    activeChartName(val) {
      this.init();
    }
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      var chartDom = document.getElementById(this.chartId);
      var myChart = echarts.init(chartDom);
      var option;
      // 左边Y轴

      const leftCoordData = getMaxMinByKey(this.chartData, "value");
      // 右边 Y轴
      const rightCoordData = getMaxMinByKey(this.chartData, "growthRate");

      option = {
        // 浮空提示
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        legend: {
          bottom: 0
          // icon: 'rect',
        },
        // x轴
        xAxis: [
          {
            type: "category",
            data: this.yearArr,
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        // y轴
        yAxis: [
          // 左边Y轴
          {
            type: "value",
            name: "",
            min: leftCoordData[1],
            max: leftCoordData[0],
            interval: leftCoordData[2],
            axisLabel: {
              formatter: "{value}"
            }
          },
          // 右边Y轴
          {
            type: "value",
            name: "",
            min: rightCoordData[1],
            max: rightCoordData[0],
            interval: rightCoordData[2],
            axisLabel: {
              formatter: "{value} %"
            }
          }
        ],
        // 数据到图形的映射
        series: [
          {
            name: this.activeChartName,
            // 柱状映射
            type: "bar",

            tooltip: {
              valueFormatter: function(value) {
                return value;
              }
            },
            label: {
              show: true,
              position: "inside",
              color: "#fff"
            },
            data: getArrayByKey(this.chartData, "value"),
            itemStyle: {
              // 选中范围中的视觉配置
              opacity: 0.85,
              color: "#5B8FF9"
            }
          },
          {
            name: "增长率",
            type: "line",
            yAxisIndex: 1,
            itemStyle: {
              color: "#61D7A7"
            },
            label: {
              show: true,
              // position: 'top',
              color: "rgba(0, 0, 0, 0.65)"
            },
            tooltip: {
              valueFormatter: function(value) {
                return value;
              }
            },
            data: getArrayByKey(this.chartData, "growthRate")
          }
        ],
        isualMap: [
          {
            type: "continuous",
            min: 0,
            max: 5000,
            dimension: 3, // series.data 的第四个维度（即 value[3]）被映射
            seriesIndex: 4, // 对第四个系列进行映射。
            inRange: {
              // 选中范围中的视觉配置
              color: ["blue", "#121122", "red"], // 定义了图形颜色映射的颜色列表，
              // 数据最小值映射到'blue'上，
              // 最大值映射到'red'上，
              // 其余自动线性计算。
              symbolSize: [30, 100] // 定义了图形尺寸的映射范围，
              // 数据最小值映射到30上，
              // 最大值映射到100上，
              // 其余自动线性计算。
            },
            outOfRange: {
              // 选中范围外的视觉配置
              symbolSize: [30, 100]
            }
          }
          //    ...
        ]
      };
      option && myChart.setOption(option);
    }
  }
};
</script>

<style scoped lang="scss">
.com-histogram-chart {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .title {
    display: flex;
    align-items: center;
    margin-top: 12px;
    font-size: 15px;
    color: #222d3c;
    letter-spacing: -0.17px;
    line-height: 16px;
    opacity: 0.85;
    img {
      width: 16px;
      margin-right: 4px;
    }
  }
}
</style>
