<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { scale as scaleFunc } from './utils/index'
import Header from './components/Head/index.vue'
import Box1 from './components/Box1/index.vue'
import Box2 from './components/Box2/index.vue'
import Box3 from './components/Box3/index.vue'
import Box4 from './components/Box4/index.vue'
import Box5 from './components/Box5/index.vue'
import Box6 from './components/Box6/index.vue'


const scaleValue = ref(1)

const updateScale = () => {
  scaleValue.value = scaleFunc()
}
onMounted(() => {
  updateScale()
  window.addEventListener('resize', updateScale)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScale)

})
</script>

<template>
  <div class="app" :style="{ transform: `scale(${scaleValue}) translate(-50%,-50%)` }">

    <Header />

    <div class="line1">
      <Box1 />
      <Box2 />
      <Box3 />
    </div>
    <div class="line2">
      <Box4 />
      <Box5 />
    </div>
    <div class="line2">
      <Box6 />
    </div>
  </div>
</template>

<style scoped lang="less">
.app {
  width: 1920px;
  height: 1080px;
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
}

.line1,
.line2 {
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
