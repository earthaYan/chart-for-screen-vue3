<template>
    <dv-border-box1>
        <div class="chart-container" ref="chartRef"></div>
    </dv-border-box1>
</template>
<script lang="ts" setup>
import { useEcharts } from '../../hooks/useEcharts';
import { ref } from 'vue';
const options = ref({
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
});

const { chartRef } = useEcharts(options)
</script>
<style lang="less" scoped>
.chart-container {
    width: 100%;
    height: 100%;
}
</style>