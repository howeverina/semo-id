<template>
    <div v-if="svgRaw" v-html="processedSvg" class="svg"></div>
</template>

<script setup>
import { computed } from 'vue'
import { useSvgRaw } from '../composables/useSvgRaw'

const props = defineProps(['fill', 'stroke', 'src'])

const svgRaw = useSvgRaw(() => props.src)

// 색상이나 원본 코드가 바뀔 때마다 실시간으로 변환 작업 수행
const processedSvg = computed(() => {
    if (!svgRaw.value) return ''

    let svg = svgRaw.value
    const fill = props.fill || 'none'
    const stroke = props.stroke || 'none'

    // 정규식을 통한 변환
    svg = svg.replace(/\sfill\=\"([^\"]+)\"/gm, ` fill="${fill}"`)
    svg = svg.replace(/\sstroke\=\"([^\"]+)\"/gm, ` stroke="${stroke}"`)
    svg = svg.replace(/\swidth\=\"([^\"]+)\"/gm, ``)
    svg = svg.replace(/\sheight\=\"([^\"]+)\"/gm, ``)
    
    return svg
})
</script>

<style scoped>
.svg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

/* v-html로 삽입되는 내부 svg 태그가 부모 크기에 맞게 조절되도록 설정 */
.svg :deep(svg) {
    width: 100%;
    height: auto;
    display: block;
}
</style>