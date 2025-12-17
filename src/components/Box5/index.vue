<template>
    <div class="box5">
        <dv-border-box>
            <div className="chart-container" ref="chartRef"></div>
        </dv-border-box>
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
            title: {
                text: "Stacked Area Chart",
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "cross",
                    label: {
                        backgroundColor: "#6a7985",
                    },
                },
            },
            legend: {
                data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
            },
            toolbox: {
                feature: {
                    saveAsImage: {},
                },
            },
            xAxis: [
                {
                    type: "category",
                    boundaryGap: false,
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                },
            ],
            yAxis: [
                {
                    type: "value",
                },
            ],
            series: [
                {
                    name: "Email",
                    type: "line",
                    stack: "Total",
                    areaStyle: {},
                    emphasis: {
                        focus: "series",
                    },
                    data: [120, 132, 101, 134, 90, 230, 210],
                },
                {
                    name: "Union Ads",
                    type: "line",
                    stack: "Total",
                    areaStyle: {},
                    emphasis: {
                        focus: "series",
                    },
                    data: [220, 182, 191, 234, 290, 330, 310],
                },
                {
                    name: "Video Ads",
                    type: "line",
                    stack: "Total",
                    areaStyle: {},
                    emphasis: {
                        focus: "series",
                    },
                    data: [150, 232, 201, 154, 190, 330, 410],
                },
                {
                    name: "Direct",
                    type: "line",
                    stack: "Total",
                    areaStyle: {},
                    emphasis: {
                        focus: "series",
                    },
                    data: [320, 332, 301, 334, 390, 330, 320],
                },
                {
                    name: "Search Engine",
                    type: "line",
                    stack: "Total",
                    label: {
                        show: true,
                        position: "top",
                    },
                    areaStyle: {},
                    emphasis: {
                        focus: "series",
                    },
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                },
            ],
        };
        chart.setOption(options);
    }
});
onUnmounted(() => {
    if (chart) {
        // 清理图表实例
        chart.dispose();
    }
})
</script>
<style lang="less" scoped>
.box5 {
    width: 630px;
    height: 400px;
}

.chart-container {
    width: 100%;
    height: 100%;
}
</style>