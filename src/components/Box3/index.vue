<template>
    <div class="box3">
        <dv-border-box1>
            <div class="chart-container" ref="chartRef"></div>
        </dv-border-box1>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import * as echarts from "echarts";

const chartRef = ref<HTMLDivElement | null>(null);
let chart: echarts.ECharts | null = null;
onMounted(() => {
    if (chartRef.value) {
        chart = echarts.init(chartRef.value);
        const options = {
            title: {
                text: "Basic Radar Chart",
            },
            legend: {
                data: ["Allocated Budget", "Actual Spending"],
            },
            radar: {
                // shape: 'circle',
                indicator: [
                    { name: "Sales", max: 6500 },
                    { name: "Administration", max: 16000 },
                    { name: "Information Technology", max: 30000 },
                    { name: "Customer Support", max: 38000 },
                    { name: "Development", max: 52000 },
                    { name: "Marketing", max: 25000 },
                ],
            },
            series: [
                {
                    name: "Budget vs spending",
                    type: "radar",
                    data: [
                        {
                            value: [4200, 3000, 20000, 35000, 50000, 18000],
                            name: "Allocated Budget",
                        },
                        {
                            value: [5000, 14000, 28000, 26000, 42000, 21000],
                            name: "Actual Spending",
                        },
                    ],
                },
            ],
        };
        chart.setOption(options);
    }
});
onUnmounted(() => {
    if (chart) {
        chart.dispose()
    }
});
</script>
<style lang="less" scoped>
.box3 {
    width: 640px;
    height: 560px;
}

.chart-container {
    width: 100%;
    height: 100%;
}
</style>
