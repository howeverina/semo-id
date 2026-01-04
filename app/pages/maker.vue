<template>
    <div id="tab-wrapper">
        <div id="tab-items">
            <div 
                v-for="(name, index) in tabNames" 
                :key="index"
                class="tab-item" 
                :class="{ act: activeTab === index }"
                @click="activeTab = index"
            >
                <div>{{ name }}</div>
            </div>
            <div @click="exportImg" class="tab-item download">다운로드!</div>
        </div>
        <div id="content-items">
            <div v-if="activeTab === 0" class="content-item act">   
                <div class="item-grid">
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.skin.color"/>
                    </div>
                    <template v-for="(itemName, index) in items.skin.types" :key="index">
                        <div v-if="!items.skin.require || index != 0" class="item" @click="updateCode('skin', index.toString().padStart(2, '0'))">
                            {{ itemName }}
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="activeTab === 1" class="content-item act">
                <div class="item-grid">
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.eyebrows.color"/>
                    </div>
                    <template v-for="(itemName, index) in items.eyebrows.types" :key="index">
                        <div v-if="!items.eyebrows.require || index != 0" class="item" @click="updateCode('eyebrows', index.toString().padStart(2, '0'))">
                            {{ itemName }}
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="activeTab === 2" class="content-item act">
                <div class="item-grid">
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.lefteye.color"/>
                    </div>
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.lefteye.contrast"/>
                    </div>
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.righteye.contrast"/>
                    </div>
                    <template v-for="(itemName, index) in items.lefteye.types" :key="index">
                        <div v-if="!items.lefteye.require || index != 0" class="item" @click="updateCode('lefteye', index.toString().padStart(2, '0'))">
                            {{ itemName }}
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="activeTab === 3" class="content-item act">
                <div class="item-grid">
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.righteye.color"/>
                    </div>
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.lefteye.contrast"/>
                    </div>
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.righteye.contrast"/>
                    </div>
                    <template v-for="(itemName, index) in items.righteye.types" :key="index">
                        <div v-if="!items.righteye.require || index != 0" class="item" @click="updateCode('righteye', index.toString().padStart(2, '0'))">
                            {{ itemName }}
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="activeTab === 4" class="content-item act">
                <div class="item-grid">
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.mouth.color"/>
                    </div>
                    <template v-for="(itemName, index) in items.mouth.types" :key="index">
                        <div v-if="!items.mouth.require || index != 0" class="item" @click="updateCode('mouth', index.toString().padStart(2, '0'))">
                            {{ itemName }}
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="activeTab === 5" class="content-item act">
                <div class="item-grid">
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.face.color"/>
                    </div>
                    <template v-for="(itemName, index) in items.face.types" :key="index">
                        <div v-if="!items.face.require || index != 0" class="item" @click="updateCode('face', index.toString().padStart(2, '0'))">
                            {{ itemName }}
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="activeTab === 6" class="content-item act">
                <div class="item-grid">
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.back.color"/>
                    </div>
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.back.contrast"/>
                    </div>
                    <template v-for="(itemName, index) in items.back.types" :key="index">
                        <div v-if="!items.back.require || index != 0" class="item" @click="updateCode('back', index.toString().padStart(2, '0'))">
                            {{ itemName }}
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="activeTab === 7" class="content-item act">
                <div class="item-grid">
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.back.color"/>
                    </div>
                    <template v-for="(itemName, index) in items.bang.types" :key="index">
                        <div v-if="!items.bang.require || index != 0" class="item" @click="updateCode('bang', index.toString().padStart(2, '0'))">
                            {{ itemName }}
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="activeTab === 8" class="content-item act">
                <div class="item-grid">
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.back.color"/>
                    </div>
                    <template v-for="(itemName, index) in items.leftside.types" :key="index">
                        <div v-if="!items.leftside.require || index != 0" class="item" @click="updateCode('leftside', index.toString().padStart(2, '0'))">
                            {{ itemName }}
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="activeTab === 9" class="content-item act">
                <div class="item-grid">
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.back.color"/>
                    </div>
                    <template v-for="(itemName, index) in items.rightside.types" :key="index">
                        <div v-if="!items.rightside.require || index != 0" class="item" @click="updateCode('rightside', index.toString().padStart(2, '0'))">
                            {{ itemName }}
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="activeTab === 10" class="content-item act">
                <div class="item-grid">
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.add01.color"/>
                    </div>
                    <template v-for="(itemName, index) in items.add01.types" :key="index">
                        <div v-if="!items.add01.require || index != 0" class="item" @click="updateCode('add01', index.toString().padStart(2, '0'))">
                            {{ itemName }}
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="activeTab === 11" class="content-item act">
                <div class="item-grid">
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.add02.color"/>
                    </div>
                    <template v-for="(itemName, index) in items.add02.types" :key="index">
                        <div v-if="!items.add02.require || index != 0" class="item" @click="updateCode('add02', index.toString().padStart(2, '0'))">
                            {{ itemName }}
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="activeTab === 12" class="content-item act">
                <div class="item-grid">
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.add03.color"/>
                    </div>
                    <template v-for="(itemName, index) in items.add03.types" :key="index">
                        <div v-if="!items.add03.require || index != 0" class="item" @click="updateCode('add03', index.toString().padStart(2, '0'))">
                            {{ itemName }}
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="activeTab === 13" class="content-item act">
                <div class="item-grid">
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.shirt.color"/>
                    </div>
                    <template v-for="(itemName, index) in items.shirt.types" :key="index">
                        <div v-if="!items.shirt.require || index != 0" class="item" @click="updateCode('shirt', index.toString().padStart(2, '0'))">
                            {{ itemName }}
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="activeTab === 14" class="content-item act">
                <div class="item-grid">
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.pants.color"/>
                    </div>
                    <template v-for="(itemName, index) in items.pants.types" :key="index">
                        <div v-if="!items.pants.require || index != 0" class="item" @click="updateCode('pants', index.toString().padStart(2, '0'))">
                            {{ itemName }}
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="activeTab === 15" class="content-item act">
                <div class="item-grid">
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.outer.color"/>
                    </div>
                    <template v-for="(itemName, index) in items.outer.types" :key="index">
                        <div v-if="!items.outer.require || index != 0" class="item" @click="updateCode('outer', index.toString().padStart(2, '0'))">
                            {{ itemName }}
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="activeTab === 16" class="content-item act">
                <div class="item-grid">
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.socks.color"/>
                    </div>
                    <template v-for="(itemName, index) in items.socks.types" :key="index">
                        <div v-if="!items.socks.require || index != 0" class="item" @click="updateCode('socks', index.toString().padStart(2, '0'))">
                            {{ itemName }}
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="activeTab === 17" class="content-item act">
                <div class="item-grid">
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.shoes.color"/>
                    </div>
                    <template v-for="(itemName, index) in items.shoes.types" :key="index">
                        <div v-if="!items.shoes.require || index != 0" class="item" @click="updateCode('shoes', index.toString().padStart(2, '0'))">
                            {{ itemName }}
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="activeTab === 18" class="content-item act">
                <div class="item-grid">
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.stand.color"/>
                    </div>
                    <div class="item">
                        <input class="colorinput" type="color" v-model="settings.stand.contrast"/>
                    </div>
                    <template v-for="(itemName, index) in items.stand.types" :key="index">
                        <div v-if="!items.stand.require || index != 0" class="item" @click="updateCode('stand', index.toString().padStart(2, '0'))">
                            {{ itemName }}
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
            <Svg :src="`/svg/skin/${settings.skin.code}-fill.svg`" :fill=settings.skin.color :key="settings.skin.code+settings.skin.color"></Svg>
            <Svg :src="`/svg/face/${settings.face.code}-fill.svg`" :fill=settings.face.color :key="settings.face.code+settings.face.color"></Svg>
            <Svg :src="`/svg/eyebrows/${settings.eyebrows.code}-fill.svg`" :fill=settings.eyebrows.color :key="settings.eyebrows.code+settings.eyebrows.color"></Svg>
            <Svg :src="`/svg/eyebrows/${settings.eyebrows.code}-stroke.svg`" :stroke=settings.eyebrows.color :key="settings.eyebrows.code+settings.eyebrows.color" class="stroke"></Svg>
            <Svg :src="`/svg/lefteye/${settings.lefteye.code}-contrast.svg`" :fill=settings.lefteye.contrast :key="settings.lefteye.code+settings.lefteye.contrast"></Svg>
            <Svg :src="`/svg/righteye/${settings.righteye.code}-contrast.svg`" :fill=settings.lefteye.contrast :key="settings.righteye.code+settings.lefteye.contrast"></Svg>
            <Svg :src="`/svg/lefteye/${settings.lefteye.code}-fill.svg`" :fill=settings.lefteye.color :key="settings.lefteye.code+settings.lefteye.color"></Svg>
            <Svg :src="`/svg/righteye/${settings.righteye.code}-fill.svg`" :fill=settings.righteye.color :key="settings.righteye.code+settings.righteye.color"></Svg>
            <Svg src="/svg/pupil-fill.svg" :fill=settings.righteye.contrast :key=settings.righteye.contrast></Svg>
            <Svg src="/svg/highlight-fill.svg" fill="#ffffff"></Svg>
            <Svg :src="`/svg/lefteye/${settings.lefteye.code}-stroke.svg`" stroke="#000" :key=settings.lefteye.code></Svg>
            <Svg :src="`/svg/righteye/${settings.righteye.code}-stroke.svg`" stroke="#000" :key=settings.righteye.code></Svg>
            <Svg :src="`/svg/mouth/${settings.mouth.code}-fill.svg`" :fill=settings.mouth.color :key="settings.mouth.code+settings.mouth.color"></Svg>
            <Svg :src="`/svg/mouth/${settings.mouth.code}-stroke.svg`" :stroke=settings.mouth.color :key="settings.mouth.code+settings.mouth.color" class="stroke"></Svg>
            <Svg src="/svg/hair-fill.svg" :fill=settings.back.color :key=settings.back.color ></Svg>
            <Svg :src="`/svg/shirt/${settings.shirt.code}-fill.svg`" :fill=settings.shirt.color :key="settings.shirt.code+settings.shirt.color"></Svg>
            <Svg :src="`/svg/shirt/${settings.shirt.code}-stroke.svg`" :stroke=settings.shirt.color :key="settings.shirt.code+settings.shirt.color" class="stroke"></Svg>
            <Svg :src="`/svg/pants/${settings.pants.code}-fill.svg`" :fill=settings.pants.color :key="settings.pants.code+settings.pants.color"></Svg>
            <Svg :src="`/svg/pants/${settings.pants.code}-stroke.svg`" :stroke=settings.pants.color :key="settings.pants.code+settings.pants.color" class="stroke"></Svg>
            <Svg src="/svg/page01-cut.svg" stroke="#55339955"></Svg>
            <Svg src="/svg/page01-fold.svg" stroke="#00000011"></Svg>
        </div></div>
        <div class="maker-second-wrapper" id="page2" ref="img02">
        <div id="maker2" class="maker">
            <Svg :src="`/svg/back/${settings.back.code}-preview-fill.svg`" :fill=settings.back.color :key="settings.back.code+settings.back.color"></Svg>
            <Svg :src="`/svg/skin/${settings.skin.code}-preview-fill.svg`" :fill=settings.skin.color :key="settings.skin.code+settings.skin.color"></Svg>
            <Svg :src="`/svg/face/${settings.face.code}-preview-fill.svg`" :fill=settings.face.color :key="settings.face.code+settings.face.color"></Svg>
            <Svg :src="`/svg/shirt/${settings.shirt.code}-preview-fill.svg`" :fill=settings.shirt.color :key="settings.shirt.code+settings.shirt.color"></Svg>
            <Svg :src="`/svg/shirt/${settings.shirt.code}-preview-stroke.svg`" :stroke=settings.shirt.color :key="settings.shirt.code+settings.shirt.color" class="stroke"></Svg>
            <Svg :src="`/svg/pants/${settings.pants.code}-preview-fill.svg`" :fill=settings.pants.color :key="settings.pants.code+settings.pants.color"></Svg>
            <Svg :src="`/svg/pants/${settings.pants.code}-preview-stroke.svg`" :stroke=settings.pants.color :key="settings.pants.code+settings.pants.color" class="stroke"></Svg>
            <Svg :src="`/svg/skin/${settings.skin.code}-preview-face.svg`" :fill=settings.skin.color :key="settings.skin.code+settings.skin.color"></Svg>
            <Svg :src="`/svg/face/${settings.face.code}-preview-face.svg`" :fill=settings.face.color :key="settings.face.code+settings.face.color"></Svg>
            <Svg :src="`/svg/eyebrows/${settings.eyebrows.code}-preview-fill.svg`" :fill=settings.eyebrows.color :key="settings.eyebrows.code+settings.eyebrows.color"></Svg>
            <Svg :src="`/svg/eyebrows/${settings.eyebrows.code}-preview-stroke.svg`" :stroke=settings.eyebrows.color :key="settings.eyebrows.code+settings.eyebrows.color" class="stroke"></Svg>
            <Svg :src="`/svg/lefteye/${settings.lefteye.code}-preview-contrast.svg`" :fill=settings.lefteye.contrast :key="settings.lefteye.code+settings.lefteye.contrast"></Svg>
            <Svg :src="`/svg/righteye/${settings.righteye.code}-preview-contrast.svg`" :fill=settings.lefteye.contrast :key="settings.righteye.code+settings.lefteye.contrast"></Svg>
            <Svg :src="`/svg/lefteye/${settings.lefteye.code}-preview-fill.svg`" :fill=settings.lefteye.color :key="settings.lefteye.code+settings.lefteye.color"></Svg>
            <Svg :src="`/svg/righteye/${settings.righteye.code}-preview-fill.svg`" :fill=settings.righteye.color :key="settings.righteye.code+settings.righteye.color"></Svg>
            <Svg src="/svg/pupil-preview-fill.svg" :fill=settings.righteye.contrast :key=settings.righteye.contrast></Svg>
            <Svg src="/svg/highlight-preview-fill.svg" fill="#ffffff"></Svg>
            <Svg :src="`/svg/lefteye/${settings.lefteye.code}-preview-stroke.svg`" stroke="#000" :key=settings.lefteye.code></Svg>
            <Svg :src="`/svg/righteye/${settings.righteye.code}-preview-stroke.svg`" stroke="#000" :key=settings.righteye.code></Svg>
            <Svg :src="`/svg/mouth/${settings.mouth.code}-preview-fill.svg`" :fill=settings.mouth.color :key="settings.mouth.code+settings.mouth.color"></Svg>
            <Svg :src="`/svg/mouth/${settings.mouth.code}-preview-stroke.svg`" :stroke=settings.mouth.color :key="settings.mouth.code+settings.mouth.color" class="stroke"></Svg>
            <Svg :src="`/svg/bang/${settings.bang.code}-stroke.svg`" :fill=settings.back.color :key="settings.bang.code+settings.back.color"></Svg>
            <Svg :src="`/svg/rightside/${settings.rightside.code}-stroke.svg`" :fill=settings.back.color :key="settings.rightside.code+settings.back.color"></Svg>
            <Svg :src="`/svg/leftside/${settings.leftside.code}-stroke.svg`" :fill=settings.back.color :key="settings.leftside.code+settings.back.color"></Svg>
            <Svg :src="`/svg/rightside/${settings.rightside.code}-stroke.svg`" stroke="#55339955" :key=settings.rightside.code ></Svg>
            <Svg :src="`/svg/leftside/${settings.leftside.code}-stroke.svg`" stroke="#55339955" :key=settings.leftside.code ></Svg>
            <Svg :src="`/svg/bang/${settings.bang.code}-stroke.svg`" :fill=settings.back.color :key="settings.bang.code+settings.back.color"></Svg>
            <Svg :src="`/svg/back/${settings.back.code}-fill.svg`" :fill=settings.back.color :key="settings.back.code+settings.back.color"></Svg>
            <Svg src="/svg/hairlight-fill.svg" :fill=settings.back.contrast :key=settings.back.contrast ></Svg>
            <Svg :src="`/svg/bang/${settings.bang.code}-stroke.svg`" stroke="#55339955" :key=settings.bang.code ></Svg>
            <Svg :src="`/svg/back/${settings.back.code}-stroke.svg`" stroke="#55339955" :key=settings.back.code ></Svg>
            <Svg src="/svg/stand-fill.svg" :fill=settings.stand.color :key=settings.stand.color ></Svg>
            <Svg src="/svg/stand-contrast.svg" :stroke=settings.stand.contrast :key=settings.stand.contrast ></Svg>
            <Svg src="/svg/stand-stroke.svg" stroke="#55339955" ></Svg>
            <Svg src="/svg/page02-fold.svg" stroke="#00000011"></Svg>
        </div></div>
    </div>
</template>

<script setup>
    
    import { ref } from 'vue' // 이 라인이 반드시 있어야 합니다!
    import Svg from '../components/Svg.vue'
    import { toPng } from 'html-to-image';

    const activeTab = ref(0) // 2. 현재 활성화된 탭 상태 관리
    const tabNames = ['피부', '눈썹', '왼눈', '오른눈', '입', '홍조', '뒷머리', '앞머리', '옆머리L', '옆머리R', '머리+', '머리+', '머리+', '상의', '하의', '겉옷', '양말', '신발', '스탠드']
    const items = {
        skin: {
            require: true,
            types: ['none', '기본']
        }, eyebrows: {
            require: false,
            types: ['none', '기본']
        }, lefteye: {
            require: true,
            types: ['none', '동그란 눈']
        }, righteye: {
            require: true,
            types: ['none', '동그란 눈']
        }, mouth: {
            require: false,
            types: ['none', '고양이 입']
        }, face: {
            require: true,
            types: ['none', '홍조']
        }, back: {
            require: false,
            types: ['none', '볼륨 단발']
        }, bang: {
            require: true, 
            types: ['none', '일자 앞머리']
        }, leftside: {
            require: false, 
            types: ['none', '짧은 옆머리', '긴 옆머리']
        }, rightside: {
            require: false, 
            types: ['none', '짧은 옆머리', '긴 옆머리']
        }, add01: {
            require: false,
            types: ['none']
        }, add02: {
            require: false,
            types: ['none']
        }, add03: {
            require: false,
            types: ['none']
        }, shirt: {
            require: true,
            types: ['none', '교복 셔츠']
        }, pants: {
            require: true,
            types: ['none', '교복 치마']
        }, outer: {
            require: false,
            types: ['none']
        }, socks: {
            require: false,
            types: ['none']
        }, shoes: {
            require: false,
            types: ['none']
        }, stand: {
            require: true,
            types: ['none', '기본 스탠드']
        }, bg: {
            require: true,
            types: ['none', '단색 배경']
        }
    }

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
            color: '#ff5e8e',
            contrast: '#ffffff' // 흰자
        }, righteye: {
            code: '01',
            color: '#ff5e8e',
            contrast: '#000000' // 동공
        }, mouth: {
            code: '01',
            color: '#ff9ead'
        }, face: {
            code: '01',
            color: '#ffdbe1'
        }, back: {
            code: '00',
            color: '#ff5e8e',
            contrast: '#ffffdd' // 하이라이트
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
            code: '01',
            color: '#ff5e8e'
        }, add02: {
            code: '01',
            color: '#ff5e8e'
        }, add03: {
            code: '01',
            color: '#ff5e8e'
        }, shirt: {
            code: '01',
            color: '#ffffff'
        }, pants: {
            code: '01',
            color: '#ff5e8e'
        }, outer: {
            code: '01',
            color: '#ff5e8e'
        }, socks: {
            code: '01',
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
            color: '#c8edff'
        }
    })

    const updateCode = function(part, code) {
        settings.value[part].code = code
    }

    const img01 = ref('null')
    const img02 = ref('null')

    const exportImg = async () => {
  // 클라이언트 사이드에서만 라이브러리 로드
    if (process.client) {
        try {
            const targetWidth = 2480
            const targetHeight = 3472

            const originalWidth1 = document.querySelector('#page1').offsetWidth
            const originalHeight1 = document.querySelector('#page1').offsetHeight
            const originalWidth2 = document.querySelector('#page2').offsetWidth
            const originalHeight2 = document.querySelector('#page2').offsetHeight

            const dataUrl1 = await toPng(img01.value, { 
                cacheBust: true,
                pixelRatio: 1,
                width: targetWidth, 
                height: targetHeight, 
                style: {
                    transform: `scale(${targetWidth / originalWidth1})`,
                    transformOrigin: 'top left',
                    width: `${originalWidth1}px`,
                    height: `${originalHeight1}px`,
                    }
                });
            saveAs(dataUrl1, 'semoid_page01.png');

            const dataUrl2 = await toPng(img02.value, { 
                cacheBust: true,
                pixelRatio: 1,
                width: targetWidth, 
                height: targetHeight, 
                style: {
                    transform: `scale(${targetWidth / originalWidth2})`,
                    transformOrigin: 'top left',
                    width: `${originalWidth2}px`,
                    height: `${originalHeight2}px`,
                    }
                });
            saveAs(dataUrl2, 'semoid_page02.png');

            alert('저장이 완료되었습니다!');
        } catch (error) {
            console.error('이미지 저장 중 에러 발생:', error);
        }
    }
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
        aspect-ratio: 1 / 1.4;
        max-height: 700px;
        width: 100%;
        max-width: 500px;
    }

    #titleinput {
        position: absolute;
        top: min(1.5vw, 15px);
        left: min(2.5vw, 25px);
        z-index: 99;
    }

    #titleinput > div {
        font-size: min(1vw, 10px);
        margin-bottom: 0;
        padding-bottom: 0;
    }

    #titleinput > input {
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