<template>
    <div v-if="svgRaw" v-html="processedSvg" class="svg gradient"></div>
</template>

<script setup>
import { ref, watchEffect, computed } from 'vue'

const props = defineProps(['fill', 'src', 'from', 'to', 'id'])

const svgRaw = ref('') // 원본 SVG 코드 저장

// 1. SVG 파일을 가져오는 로직 (클라이언트 사이드에서만 동작)
watchEffect(async () => {
    if (process.client && props.src) {
        try {
            const response = await fetch(props.src)
            if (response.ok) {
                svgRaw.value = await response.text()
            }
        } catch (e) {
            console.error("SVG 로드 실패:", e)
        }
    }
})

// 2. 색상이나 원본 코드가 바뀔 때마다 실시간으로 변환 작업 수행
const processedSvg = computed(() => {
    if (!svgRaw.value) return ''

    let svg = svgRaw.value
    const id = props.id || 'grad'
    const grad = props.fill || '#00000000'
    const from = props.from || '0%'
    const to = props.to || '100%'

    // 정규식을 통한 변환
    svg = svg.replace(/\sstroke\=\"([^\"]+)\"/gm, ` stroke="none"`)
    svg = svg.replace(/\swidth\=\"([^\"]+)\"/gm, ``)
    svg = svg.replace(/\sheight\=\"([^\"]+)\"/gm, ``)
    svg = svg.replace(/xlink\=\"http:\/\/www\.w3\.org\/1999\/xlink\"\>/gm, `xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="grad${id}" x1="0%" x2="0%" y1="0%" y2="100%"><stop offset="${from}" stop-color="${grad}" stop-opacity="0"/><stop offset="${to}" stop-color="${grad}" stop-opacity="1"/><stop offset="100%" stop-color="${grad}" stop-opacity="0"/></linearGradient></defs>`)
    svg = svg.replace(/\sfill\=\"([^\"]+)\"/gm, ` fill="url(#grad${id})"`)
    
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