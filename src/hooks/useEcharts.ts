import { onMounted, onUnmounted, ref, watch, type Ref } from "vue";

import * as echarts from "echarts/core";
import { BarChart, PieChart, RadarChart, LineChart } from "echarts/charts";
// 引入标题，提示框，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  ToolboxComponent,
} from "echarts/components";
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  PieChart,
  RadarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent,
  ToolboxComponent,
]);

export const useEcharts = (options: Ref<echarts.EChartsCoreOption>) => {
  const chartRef = ref<HTMLDivElement | null>(null);
  let chartInstance: echarts.ECharts | null = null;

  const initChart = () => {
    if (chartRef.value) {
      chartInstance = echarts.init(chartRef.value);
      chartInstance.setOption(options.value);
    }
  };

  const resizeChart = () => {
    if (chartInstance) {
      chartInstance.resize();
    }
  };
  //监听options变化
  watch(
    () => options.value,
    (newVal) => {
      if (chartInstance) {
        chartInstance.setOption(newVal);
      }
    },
    { deep: true }
  );

  onMounted(() => {
    initChart();
    window.addEventListener("resize", resizeChart);
  });

  onUnmounted(() => {
    if (chartInstance) {
      chartInstance.dispose();
      chartInstance = null;
    }
    window.removeEventListener("resize", resizeChart);
  });
  return { chartRef, chartInstance };
};
