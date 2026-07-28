import { ref, watchEffect } from 'vue'

// Svg.vue와 Svgrad.vue가 공유하는 SVG 원본 코드 fetch 로직
export function useSvgRaw(getSrc) {
    const svgRaw = ref('')

    watchEffect(async () => {
        const src = getSrc()
        if (process.client && src) {
            try {
                const response = await fetch(src)
                if (response.ok) {
                    svgRaw.value = await response.text()
                }
            } catch (e) {
                console.error("SVG 로드 실패:", e)
            }
        }
    })

    return svgRaw
}
