<template>
    <div id="tab-wrapper">
        <div id="tab-items">
            <div
                v-for="(tab, index) in tabs"
                :key="tab.key"
                class="tab-item"
                :class="{ act: activeTab === index }"
                @click="clickTab(index)"
            >
                <div>{{ tab.name }}</div>
            </div>
            <div @click="exportImg" class="tab-item download">다운로드!</div>
        </div>
        <div id="content-items">
            <div class="content-item act">
                <div class="item-grid">
                    <div class="item" v-for="path in currentTab.colorInputs" :key="path">
                        <input class="colorinput" type="color" :value="getPath(path)" @input="setPath(path, $event.target.value)"/>
                    </div>
                    <template v-for="(itemName, index) in currentTab.types" :key="index">
                        <div
                            v-if="!currentTab.require || index !== 0"
                            class="item item-flex"
                            :class="{ selected: settings[currentTab.key].code === index.toString().padStart(2, '0') }"
                            @click="updateCode(currentTab.key, index.toString().padStart(2, '0'))"
                        >
                            <div>{{ itemName }}</div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
    <div id="maker-wrapper">
        <div class="maker-second-wrapper" id="page1" ref="img01">
        <div id="maker1" class="maker">
            <div id="titleinput">
                <div style="font-family: '116Subakhwa';">세모이드</div>
                <input v-model="characterName" />
            </div>
            <Svg src="/svg/bg-fill.svg" :fill=settings.bg.color></Svg>
            <Svg :src="`/svg/skin/${settings.skin.code}-fill.svg`" :fill=settings.skin.color></Svg>
            <Svg :src="`/svg/face/${settings.face.code}-fill.svg`" :fill=settings.face.color></Svg>
            <Svg :src="`/svg/eyebrows/${settings.eyebrows.code}-fill.svg`" :fill=settings.eyebrows.color></Svg>
            <Svg :src="`/svg/eyebrows/${settings.eyebrows.code}-stroke.svg`" :stroke=settings.eyebrows.color class="stroke"></Svg>
            <Svg :src="`/svg/lefteye/${settings.lefteye.code}-contrast.svg`" :fill=settings.lefteye.contrast></Svg>
            <Svg :src="`/svg/righteye/${settings.righteye.code}-contrast.svg`" :fill=settings.lefteye.contrast></Svg>
            <Svg :src="`/svg/lefteye/01-fill.svg`" :fill=settings.lefteye.color></Svg>
            <Svg :src="`/svg/righteye/01-fill.svg`" :fill=settings.righteye.color></Svg>
            <Svg src="/svg/pupil-fill.svg" :fill=settings.righteye.contrast></Svg>
            <Svg src="/svg/highlight-fill.svg" fill="#ffffff"></Svg>
            <Svg :src="`/svg/lefteye/${settings.lefteye.code}-stroke.svg`" stroke="#000"></Svg>
            <Svg :src="`/svg/righteye/${settings.righteye.code}-stroke.svg`" stroke="#000"></Svg>
            <Svg :src="`/svg/mouth/${settings.mouth.code}-fill.svg`" :fill=settings.mouth.color></Svg>
            <Svg :src="`/svg/mouth/${settings.mouth.code}-stroke.svg`" :stroke=settings.mouth.color class="stroke"></Svg>
            <Svg src="/svg/hair-fill.svg" :fill=settings.back.color></Svg>
            <Svg :src="`/svg/sleeve/${settings.sleeve.code}-fill.svg`" :fill=settings.sleeve.color></Svg>
            <Svg :src="`/svg/sleeve/${settings.sleeve.code}-stroke.svg`" :stroke=settings.sleeve.color class="stroke"></Svg>
            <Svg :src="`/svg/shirt/${settings.shirt.code}-fill.svg`" :fill=settings.shirt.color></Svg>
            <Svg :src="`/svg/shirt/${settings.shirt.code}-stroke.svg`" :stroke=settings.shirt.color class="stroke"></Svg>
            <Svg :src="`/svg/pants/${settings.pants.code}-fill.svg`" :fill=settings.pants.color></Svg>
            <Svg :src="`/svg/pants/${settings.pants.code}-stroke.svg`" :stroke=settings.pants.color class="stroke"></Svg>
            <Svg v-if="settings.tie.code!='00'" :src="`/svg/tie/${settings.tie.code}-stroke.svg`" :fill=settings.tie.color></Svg>
            <Svg v-if="settings.tie.code!='00'" :src="`/svg/tie/${settings.tie.code}-stroke.svg`" :stroke=settings.tie.color class="stroke"></Svg>
            <Svg :src="`/svg/shoes/${settings.shoes.code}-fill.svg`" :fill=settings.shoes.color></Svg>
            <Svg :src="`/svg/shoes/${settings.shoes.code}-stroke.svg`" :stroke=settings.shoes.color class="stroke"></Svg>
            <Svg src="/svg/page01-cut.svg" stroke="#55339977"></Svg>
            <Svg src="/svg/page01-fold.svg" stroke="#55339933"></Svg>
        </div></div>
        <div class="maker-second-wrapper" id="page2" ref="img02">
        <div id="maker2" class="maker">
            <Svg src="/svg/bg-fill.svg" :fill=settings.bg.color></Svg>
            <Svg :src="`/svg/back/${settings.back.code}-preview-fill.svg`" :fill=settings.back.color></Svg>
            <Svgrad :src="`/svg/back/${settings.back.code}-preview-fill.svg`" :fill=settings.back.grad from="50%" to="100%" id="bang"></Svgrad>
            <Svg :src="`/svg/back/00-preview-fill.svg`" :fill=settings.back.color></Svg>
            <Svg :src="`/svg/skin/${settings.skin.code}-preview-fill.svg`" :fill=settings.skin.color></Svg>
            <Svg :src="`/svg/face/${settings.face.code}-preview-fill.svg`" :fill=settings.face.color></Svg>
            <Svg :src="`/svg/sleeve/${settings.sleeve.code}-preview-fill.svg`" :fill=settings.sleeve.color></Svg>
            <Svg :src="`/svg/sleeve/${settings.sleeve.code}-preview-stroke.svg`" :stroke=settings.sleeve.color class="stroke"></Svg>
            <Svg :src="`/svg/shirt/${settings.shirt.code}-preview-fill.svg`" :fill=settings.shirt.color></Svg>
            <Svg :src="`/svg/shirt/${settings.shirt.code}-preview-stroke.svg`" :stroke=settings.shirt.color class="stroke"></Svg>
            <Svg :src="`/svg/pants/${settings.pants.code}-preview-fill.svg`" :fill=settings.pants.color></Svg>
            <Svg :src="`/svg/pants/${settings.pants.code}-preview-stroke.svg`" :stroke=settings.pants.color class="stroke"></Svg>
            <Svg v-if="settings.tie.code!='00'" :src="`/svg/tie/${settings.tie.code}-preview-stroke.svg`" :fill=settings.tie.color></Svg>
            <Svg v-if="settings.tie.code!='00'" :src="`/svg/tie/${settings.tie.code}-preview-stroke.svg`" :stroke=settings.tie.color class="stroke"></Svg>
            <Svg :src="`/svg/shoes/${settings.shoes.code}-preview-fill.svg`" :fill=settings.shoes.color></Svg>
            <Svg :src="`/svg/shoes/${settings.shoes.code}-preview-stroke.svg`" :stroke=settings.shoes.color class="stroke"></Svg>
            <Svg :src="`/svg/skin/${settings.skin.code}-preview-face.svg`" :fill=settings.skin.color></Svg>
            <Svg :src="`/svg/face/${settings.face.code}-preview-face.svg`" :fill=settings.face.color></Svg>
            <Svg :src="`/svg/eyebrows/${settings.eyebrows.code}-preview-fill.svg`" :fill=settings.eyebrows.color></Svg>
            <Svg :src="`/svg/eyebrows/${settings.eyebrows.code}-preview-stroke.svg`" :stroke=settings.eyebrows.color class="stroke"></Svg>
            <Svg :src="`/svg/lefteye/${settings.lefteye.code}-preview-contrast.svg`" :fill=settings.lefteye.contrast></Svg>
            <Svg :src="`/svg/righteye/${settings.righteye.code}-preview-contrast.svg`" :fill=settings.lefteye.contrast></Svg>
            <Svg :src="`/svg/lefteye/01-preview-fill.svg`" :fill=settings.lefteye.color></Svg>
            <Svg :src="`/svg/righteye/01-preview-fill.svg`" :fill=settings.righteye.color></Svg>
            <Svg src="/svg/pupil-preview-fill.svg" :fill=settings.righteye.contrast></Svg>
            <Svg src="/svg/highlight-preview-fill.svg" fill="#ffffff"></Svg>
            <Svg :src="`/svg/lefteye/${settings.lefteye.code}-preview-stroke.svg`" stroke="#000"></Svg>
            <Svg :src="`/svg/righteye/${settings.righteye.code}-preview-stroke.svg`" stroke="#000"></Svg>
            <Svg :src="`/svg/mouth/${settings.mouth.code}-preview-fill.svg`" :fill=settings.mouth.color></Svg>
            <Svg :src="`/svg/mouth/${settings.mouth.code}-preview-stroke.svg`" :stroke=settings.mouth.color class="stroke"></Svg>
            <Svg :src="`/svg/bang/${settings.bang.code}-stroke.svg`" :fill=settings.back.color></Svg>
            <Svg :src="`/svg/rightside/${settings.rightside.code}-stroke.svg`" :fill=settings.back.color></Svg>
            <Svg :src="`/svg/leftside/${settings.leftside.code}-stroke.svg`" :fill=settings.back.color></Svg>
            <Svg :src="`/svg/rightside/${settings.rightside.code}-stroke.svg`" stroke="#55339977"></Svg>
            <Svgrad :src="`/svg/rightside/${settings.rightside.code}-stroke.svg`" :fill=settings.back.grad from="50%" to="100%" id="bang"></Svgrad>
            <Svg :src="`/svg/leftside/${settings.leftside.code}-stroke.svg`" stroke="#55339977"></Svg>
            <Svgrad :src="`/svg/leftside/${settings.leftside.code}-stroke.svg`" :fill=settings.back.grad from="50%" to="100%" id="bang"></Svgrad>
            <Svgrad :src="`/svg/bang/${settings.bang.code}-stroke.svg`" :fill=settings.back.grad from="50%" to="100%" id="bang"></Svgrad>
            <Svg :src="`/svg/bang/${settings.bang.code}-stroke.svg`" :fill=settings.back.color></Svg>
            <Svgrad :src="`/svg/bang/${settings.bang.code}-stroke.svg`" :fill=settings.back.grad from="50%" to="100%" id="bang"></Svgrad>
            <Svg :src="`/svg/back/${settings.back.code}-fill.svg`" :fill=settings.back.color></Svg>
            <Svgrad v-if="settings.back.code!='00'" :src="`/svg/back/${settings.back.code}-fill.svg`" :fill=settings.back.grad from="10%" to="65%"></Svgrad>
            <Svg src="/svg/hairlight-fill.svg" :fill=settings.back.contrast></Svg>
            <Svg :src="`/svg/bang/${settings.bang.code}-stroke.svg`" stroke="#55339977"></Svg>
            <Svg :src="`/svg/back/${settings.back.code}-stroke.svg`" stroke="#55339977"></Svg>
            <Svg src="/svg/stand-fill.svg" :fill=settings.stand.color></Svg>
            <Svg src="/svg/stand-contrast.svg" :stroke=settings.stand.contrast></Svg>
            <Svg src="/svg/stand-stroke.svg" stroke="#55339977"></Svg>
            <Svg :src="`/svg/skirt/${settings.skirt.code}-fill.svg`" :fill=settings.skirt.color></Svg>
            <Svg :src="`/svg/skirt/${settings.skirt.code}-contrast.svg`" :fill=settings.skirt.contrast :stroke=settings.skirt.contrast></Svg>
            <Svg :src="`/svg/skirt/${settings.skirt.code}-stroke.svg`" :stroke=settings.skirt.color class="stroke"></Svg>
            <Svg v-if="settings.skirt.code!='00'" :src="`/svg/skirt/01-fold.svg`" stroke="#55339933"></Svg>
            <Svg v-if="settings.skirt.code!='00'" :src="`/svg/skirt/01-cut.svg`" stroke="#55339977"></Svg>
            <Svg src="/svg/page02-fold.svg" stroke="#55339933"></Svg>
            <div style="position: relative; top: 0; left: 0;" id="add01">
                <Svg :src="`/svg/add/${settings.add01.code}-fill.svg`" :fill=settings.add01.color></Svg>
                <Svgrad :src="`/svg/add/${settings.add01.code}-fill.svg`" :fill=settings.add01.grad id="add01"></Svgrad>
                <Svg :src="`/svg/add/${settings.add01.code}-stroke.svg`" stroke="#55339977"></Svg>
            </div>
            <div style="position: relative; top: 0; left: 0;" id="add02">
                <Svg :src="`/svg/add/${settings.add02.code}-fill.svg`" :fill=settings.add02.color></Svg>
                <Svgrad :src="`/svg/add/${settings.add02.code}-fill.svg`" :fill=settings.add02.grad id="add02"></Svgrad>
                <Svg :src="`/svg/add/${settings.add02.code}-stroke.svg`" stroke="#55339977"></Svg>
            </div>
            <div style="position: relative; top: 0; left: 0;" id="add03">
                <Svg :src="`/svg/add/${settings.add03.code}-fill.svg`" :fill=settings.add03.color></Svg>
                <Svgrad :src="`/svg/add/${settings.add03.code}-fill.svg`" :fill=settings.add03.grad id="add03"></Svgrad>
                <Svg :src="`/svg/add/${settings.add03.code}-stroke.svg`" stroke="#55339977"></Svg>
            </div>
        </div></div>
    </div>
</template>

<script setup>

    import { ref, computed } from 'vue'
    import Svg from '../components/Svg.vue'
    import { toPng } from 'html-to-image';

    const activeTab = ref(0)

    // 탭 이름, 종류 목록, 색상 입력란(settings 경로)을 한 곳에서 관리
    const tabs = [
        { name: '피부', key: 'skin', require: true, types: ['없음', '기본'], colorInputs: ['skin.color'] },
        { name: '눈썹', key: 'eyebrows', require: false, types: ['없음', '기본'], colorInputs: ['eyebrows.color'] },
        { name: '왼눈', key: 'lefteye', require: true, types: ['없음', '동그란 눈', '올라간 눈'], colorInputs: ['lefteye.color', 'lefteye.contrast', 'righteye.contrast'] },
        { name: '오른눈', key: 'righteye', require: true, types: ['없음', '동그란 눈', '올라간 눈'], colorInputs: ['righteye.color', 'lefteye.contrast', 'righteye.contrast'] },
        { name: '입', key: 'mouth', require: false, types: ['없음', '고양이 입', '일자 입', '시옷 입', '웃는 입'], colorInputs: ['mouth.color'] },
        { name: '홍조', key: 'face', require: true, types: ['없음', '홍조'], colorInputs: ['face.color'] },
        { name: '뒷머리', key: 'back', require: false, types: ['없음', '볼륨 단발', '장발', '볼륨 장발'], colorInputs: ['back.color', 'back.contrast', 'back.grad'] },
        { name: '앞머리', key: 'bang', require: true, types: ['없음', '일자 앞머리', '짧은 앞머리', '삐죽삐죽', '볼륨 앞머리'], colorInputs: ['back.color'] },
        { name: '옆머리L', key: 'leftside', require: false, types: ['없음', '짧은 옆머리', '긴 옆머리', '삐죽1', '얇고 긴'], colorInputs: ['back.color'] },
        { name: '옆머리R', key: 'rightside', require: false, types: ['없음', '짧은 옆머리', '긴 옆머리', '삐죽1', '얇고 긴'], colorInputs: ['back.color'] },
        { name: '머리+', key: 'add01', require: false, types: ['없음', '짧은 묶음머리', '나뭇잎 머리', '리본1', '얇고 긴', '트윈테일'], colorInputs: ['add01.color', 'add01.grad'] },
        { name: '머리+', key: 'add02', require: false, types: ['없음', '짧은 묶음머리', '나뭇잎 머리', '리본1', '얇고 긴', '트윈테일'], colorInputs: ['add02.color', 'add02.grad'] },
        { name: '머리+', key: 'add03', require: false, types: ['없음', '짧은 묶음머리', '나뭇잎 머리', '리본1', '얇고 긴', '트윈테일'], colorInputs: ['add03.color', 'add03.grad'] },
        { name: '상의', key: 'shirt', require: true, types: ['없음', '교복 셔츠'], colorInputs: ['shirt.color'] },
        { name: '소매', key: 'sleeve', require: false, types: ['없음', '긴소매'], colorInputs: ['sleeve.color'] },
        { name: '하의', key: 'pants', require: true, types: ['없음', '없?음', '반바지'], colorInputs: ['pants.color'] },
        { name: '스커트', key: 'skirt', require: false, types: ['없음', '교복 치마', '끝선 치마'], colorInputs: ['skirt.color', 'skirt.contrast'] },
        { name: '장식', key: 'tie', require: false, types: ['없음', '넥타이'], colorInputs: ['tie.color'] },
        { name: '겉옷', key: 'outer', require: false, types: ['없음'], colorInputs: ['outer.color'] },
        { name: '양말', key: 'socks', require: false, types: ['없음'], colorInputs: ['socks.color'] },
        { name: '신발', key: 'shoes', require: false, types: ['없음', '기본 운동화'], colorInputs: ['shoes.color'] },
        { name: '스탠드', key: 'stand', require: true, types: ['없음', '기본 스탠드'], colorInputs: ['stand.color', 'stand.contrast'] },
        { name: '배경', key: 'bg', require: true, types: ['없음', '단색 배경'], colorInputs: ['bg.color', 'bg.contrast'] },
    ]

    const currentTab = computed(() => tabs[activeTab.value])

    const characterName = ref('캐릭터 이름')

    const settings = ref({
        skin: {
            code: '01',
            color: '#fff0eb'
        }, eyebrows: {
            code: '01',
            color: '#ff5e8e'
        }, lefteye: {
            code: '01',
            color: '#49e9e6',
            contrast: '#ffffff' // 흰자
        }, righteye: {
            code: '01',
            color: '#49e9e6',
            contrast: '#2b4ea1' // 동공
        }, mouth: {
            code: '01',
            color: '#ff9ead'
        }, face: {
            code: '01',
            color: '#ffdbe1'
        }, back: {
            code: '00',
            color: '#ff5e8e',
            grad: '#ff5e8e00',
            contrast: '#ffadc2' // 하이라이트
        }, bang: {
            code: '01',
            color: ''
        }, leftside: {
            code: '01',
            color: ''
        }, rightside: {
            code: '01',
            color: ''
        }, add01: {
            code: '02',
            color: '#ff5e8e',
            grad: '#ff5e8e00'
        }, add02: {
            code: '00',
            color: '#ff5e8e',
            grad: '#ff5e8e00'
        }, add03: {
            code: '00',
            color: '#ff5e8e',
            grad: '#ff5e8e00'
        }, shirt: {
            code: '01',
            color: '#ffffff'
        }, sleeve: {
            code: '01',
            color: '#ffffff'
        }, pants: {
            code: '01',
            color: '#ffccdb'
        }, skirt: {
            code: '01',
            color: '#ff5e8e',
            contrast: '#ff5e8e00'
        }, tie: {
            code: '00',
            color: '#ff5e8e'
        }, outer: {
            code: '00',
            color: '#ff5e8e'
        }, socks: {
            code: '00',
            color: '#ffffff'
        }, shoes: {
            code: '01',
            color: '#ff5e8e'
        }, stand: {
            code: '01',
            color: '#ff5e8e',
            contrast: '#ffffff'
        }, bg: {
            code: '01',
            color: '#ffe0e5',
            contrast: '#ffffff'
        }
    })

    const updateCode = function(part, code) {
        settings.value[part].code = code
    }

    // "back.color" 같은 점(.) 경로로 settings 값을 읽고/쓰는 헬퍼 (동적 v-model 대체)
    const getPath = (path) => path.split('.').reduce((obj, key) => obj[key], settings.value)
    const setPath = (path, value) => {
        const keys = path.split('.')
        const lastKey = keys.pop()
        keys.reduce((obj, key) => obj[key], settings.value)[lastKey] = value
    }

    const img01 = ref(null)
    const img02 = ref(null)

    const EXPORT_WIDTH = 2480
    const EXPORT_HEIGHT = 3497

    const exportPage = async (elRef, filename) => {
        const original = elRef.value
        const dataUrl = await toPng(original, {
            cacheBust: true,
            pixelRatio: 1,
            width: EXPORT_WIDTH,
            height: EXPORT_HEIGHT,
            style: {
                transform: `scale(${EXPORT_WIDTH / original.offsetWidth})`,
                transformOrigin: 'top left',
                width: `${original.offsetWidth}px`,
                height: `${original.offsetHeight}px`,
            }
        });
        saveAs(dataUrl, filename);
    }

    const exportImg = async () => {
        // 클라이언트 사이드에서만 라이브러리 로드
        if (process.client) {
            try {
                await exportPage(img01, 'semoid_page01.png')
                await exportPage(img02, 'semoid_page02.png')
                alert('저장이 완료되었습니다!');
            } catch (error) {
                console.error('이미지 저장 중 에러 발생:', error);
            }
        }
    }

    if (process.client) {
        const addElIds = { 10: '#add01', 11: '#add02', 12: '#add03' }

        document.querySelector('#maker2').addEventListener('pointerdown', (e) => {
            const elId = addElIds[activeTab.value]
            if (!elId) return

            const el = document.querySelector(elId);
            e.preventDefault()

            // 뷰포트 기준 좌표를 써야 커서 아래 어떤 요소(SVG 조각 등)가 있든
            // 항상 같은 기준으로 이동 거리를 계산할 수 있음 (offsetX/Y는 대상 요소마다 달라짐)
            const startX = e.clientX
            const startY = e.clientY
            const startLeft = parseInt(el.style.left) || 0
            const startTop = parseInt(el.style.top) || 0

            document.body.style.userSelect = 'none'
            el.style.cursor = 'grabbing'

            // pointermove마다 실시간으로 위치를 갱신해 자연스럽게 따라오도록 함
            const handlePointerMove = (e2) => {
                el.style.left = `${startLeft + (e2.clientX - startX)}px`
                el.style.top = `${startTop + (e2.clientY - startY)}px`
            }

            const handlePointerUp = () => {
                window.removeEventListener('pointermove', handlePointerMove)
                document.body.style.userSelect = ''
                el.style.cursor = ''
            }

            // window에 걸어야 커서가 캔버스 밖으로 나가거나 빠르게 움직여도 드래그가 끊기지 않음
            window.addEventListener('pointermove', handlePointerMove)
            window.addEventListener('pointerup', handlePointerUp, { once: true })
        })
    }

    const clickTab = function(index) {
        activeTab.value = index
    }

    // 다운로드를 위한 유틸리티 함수
    const saveAs = (uri, filename) => {
        const link = document.createElement('a');
        link.download = filename;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

</script>

<style>

    #tab-wrapper {
        margin: 0 auto;
        width: 100%;
        max-width: 1000px;
    }

    #tab-items {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        overflow-x: auto;
    }

    .tab-item {
        min-width: 100px;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: '116Subakhwa';
        background-color: white;
        border: 1px solid var(--line);
        font-size: 1.7rem;
        border-radius: 10px;
    }

    .tab-item.act, .tab-item.download {
        background-color: var(--accent);
        color: white;
        border: 0;
    }

    .content-item.act {
        border-radius: 10px;
        border: 1px solid var(--line);
        margin: 10px 0;
        display: block;
    }

    .content-item {
        display: none;
    }

    .item-grid {
        margin: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        gap:10px;
    }

    .item {
        aspect-ratio: 1;
        border-radius: 5px;
        border: 1px solid var(--line);
        position: relative;
        overflow: hidden;
    }

    .item-flex {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .selected {
        font-weight: 700;
        color: var(--accent);
        border: 3px solid var(--accent) !important;
        background-color: var(--accentbg);
    }

    #maker-wrapper {
        width: 100%;
        aspect-ratio: 1 / 0.7;
        max-width: 1000px;
        max-height: 700px;
        margin: 0 auto;
        border: 1px solid var(--line);
        border-radius: 10px;
        display: flex;
        overflow: hidden;
        gap: 1px;
    }

    .maker-second-wrapper {
        background-color: var(--accentbg);
        width: 50%;
    }

    #maker-wrapper .maker {
        position: relative;
        aspect-ratio: 1 / 1.41;
        max-height: 705px;
        width: 100%;
        max-width: 500px;
    }

    #maker2 {
        /* 머리+ 액세서리 드래그 중 터치 스크롤/줌이 끼어들지 않도록 함 */
        touch-action: none;
    }

    #titleinput {
        position: absolute;
        top: min(12vw, 120px);
        left: max(-7.5vw, -75px);
        z-index: 99;
        transform: rotate(270deg);
    }

    #titleinput > div {
        font-size: min(1vw, 10px);
        margin-bottom: 0;
        padding-bottom: 0;
        text-align: right;
    }

    #titleinput > input {
        text-align: right;
        font-size: min(2.5vw, 25px);
        border: 0;
        height: min(3vw, 30px);
        background-color: transparent;
    }

    .colorinput {
        position: absolute;
        width: 120%;
        height: 120%;
        top: -10px;
        left: -10px;
    }

    .stroke {
        filter: saturate(200%) brightness(80%) contrast(85%);
    }

    #page-break {
        display:none;
    }
</style>
