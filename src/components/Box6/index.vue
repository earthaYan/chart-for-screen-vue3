<template>
    <dv-border-box1>
        <div className="chart-container" ref="chartRef"></div>
    </dv-border-box1>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useEcharts } from '../../hooks/useEcharts';
const options = ref({})
const fetchData = async () => {
    const data: Array<Array<string | number>> = await (await fetch(`/data/asset/data/aqi-beijing.json`)).json()
    options.value = {
        title: {
            text: 'Beijing AQI',
            left: '1%'
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '5%',
            right: '15%',
            bottom: '10%'
        },
        xAxis: {
            data: data.map(function (item) {
                return item[0];
            })
        },
        yAxis: {},
        toolbox: {
            right: 10,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: [
            {
                startValue: '2014-06-01'
            },
            {
                type: 'inside'
            }
        ],
        visualMap: {
            top: 50,
            right: 10,
            pieces: [
                {
                    gt: 0,
                    lte: 50,
                    color: '#93CE07'
                },
                {
                    gt: 50,
                    lte: 100,
                    color: '#FBDB0F'
                },
                {
                    gt: 100,
                    lte: 150,
                    color: '#FC7D02'
                },
                {
                    gt: 150,
                    lte: 200,
                    color: '#FD0100'
                },
                {
                    gt: 200,
                    lte: 300,
                    color: '#AA069F'
                },
                {
                    gt: 300,
                    color: '#AC3B2A'
                }
            ],
            outOfRange: {
                color: '#999'
            }
        },
        series: {
            name: 'Beijing AQI',
            type: 'line',
            data: data.map(function (item) {
                return item[1];
            }),
            markLine: {
                silent: true,
                lineStyle: {
                    color: '#333'
                },
                data: [
                    {
                        yAxis: 50
                    },
                    {
                        yAxis: 100
                    },
                    {
                        yAxis: 150
                    },
                    {
                        yAxis: 200
                    },
                    {
                        yAxis: 300
                    }
                ]
            }
        }
    }
}
onMounted(() => {
    fetchData()
})
const { chartRef } = useEcharts(options)
</script>
<style lang="less" scoped>
.chart-container {
    width: 100%;
    height: 100%;
}
</style>