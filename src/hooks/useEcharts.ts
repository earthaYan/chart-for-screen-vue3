import * as echarts from "echarts";
import { onMounted, onUnmounted, ref, watch, type Ref } from "vue";

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
