<template>
    <div class="head-wrapper">
        <dv-decoration8 style="width:300px;height:90px;" />
        <div class="head-title">
            <span>趋势大屏-vue3</span>
            <dv-decoration5 :dur="2" style="width:500px;height:90px;" />
        </div>
        <dv-decoration8 :reverse="true" style="width:300px;height:90px;" />
    </div>
</template>
<script lang="ts">

</script>
<style lang="less" scoped>
.head-wrapper {
    box-sizing: border-box;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;

    .head-title {
        width: 500px;
        position: relative;

        >span {
            color: #fff;
            position: absolute;
            font-weight: 400;
            font-size: 20px;
            top: 5px;
            width: 100%;
            text-align: center;
        }
    }
}
</style>