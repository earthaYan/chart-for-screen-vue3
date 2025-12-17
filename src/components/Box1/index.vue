<template>
    <div class="box1">
        <dv-border-box1>
            <div ref="chartRef" class="chart-container"></div>
        </dv-border-box1>
    </div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts'
import { onMounted, onUnmounted, ref } from 'vue';

const chartRef = ref<HTMLDivElement | null>(null)
let chart: echarts.ECharts | null = null
onMounted(() => {
    if (chartRef.value) {
        chart = echarts.init(chartRef.value);
        const options = {
            tooltip: {
                trigger: "item",
            },
            legend: {
                top: "5%",
                left: "center",
            },
            series: [
                {
                    name: "Access From",
                    type: "pie",
                    radius: ["40%", "70%"],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: "#fff",
                        borderWidth: 2,
                    },
                    label: {
                        show: false,
                        position: "center",
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 40,
                            fontWeight: "bold",
                        },
                    },
                    labelLine: {
                        show: false,
                    },
                    data: [
                        { value: 1048, name: "Search Engine" },
                        { value: 735, name: "Direct" },
                        { value: 580, name: "Email" },
                        { value: 484, name: "Union Ads" },
                        { value: 300, name: "Video Ads" },
                    ],
                },
            ],
        };
        chart.setOption(options);
    }
})
onUnmounted(() => {
    if (chart) {
        // 清理图表实例
        chart.dispose();
    }

})
</script>
<style lang="less" scoped>
.box1 {
    width: 640px;
    height: 560px;
}

.chart-container {
    width: 100%;
    height: 100%;
}
</style>