import * as echarts from "echarts";
import { onMounted, onUnmounted, ref } from "vue";

export const useEcharts = (options: echarts.EChartsCoreOption) => {
  const chartRef = ref<HTMLDivElement | null>(null);
  let chartInstance: echarts.ECharts | null = null;

  const initChart = () => {
    if (chartRef.value) {
      chartInstance = echarts.init(chartRef.value);
      chartInstance.setOption(options);
    }
  };

  onMounted(() => {
    initChart();
  });
  
  onUnmounted(() => {
    if (chartInstance) {
      chartInstance.dispose();
      chartInstance = null;
    }
  });
  return { chartRef, chartInstance };
};
