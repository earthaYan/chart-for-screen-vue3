<template>
    <div class="box2">
        <dv-border-box1>
            <div class="chart-container" ref="chartRef"></div>
        </dv-border-box1>
    </div>
</template>
<script lang="ts" setup>
import * as  echarts from 'echarts'
import { onMounted, onUnmounted, ref } from 'vue';

const chartRef = ref<HTMLDivElement | null>(null)
let chart: echarts.ECharts | null = null

onMounted(() => {
    if (chartRef.value) {
        chart = echarts.init(chartRef.value)
        const options = {
            xAxis: {
                type: "value",
            },
            yAxis: {
                type: "category",
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            },
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: "bar",
                },
            ],
        };
        chart.setOption(options)
    }
})

onUnmounted(() => {
    if (chart) {
        chart.dispose()
    }
})
</script>
<style lang="less" scoped>
.box2 {
    width: 640px;
    height: 560px;
}

.chart-container {
    width: 100%;
    height: 100%;
}
</style>