<script setup lang="ts">
import { inject, ref, watch, type Ref } from "vue"
import { sleep } from "@/util/sleep"

const emit = defineEmits(["close"])

const loaded = inject<Ref<boolean>>("loaded")
watch(loaded!, () => hide())

let animation_finish = false
const timer = setInterval(() => {
    width.value += Math.floor(Math.random()*30) + 3
    if ( width.value > loadingTime ) {
        clearInterval(timer)
        width.value = loadingTime
        animation_finish = true
        hide()
    }
}, 275)

const hide = async () => {
    if (!animation_finish || !loaded!.value) return
    await sleep(800)
    width.value = 100
    await sleep(200)
    style.value = { opacity: 0 }
    await sleep(600)
    emit("close")
}

let width = ref(0)
const style = ref({ opacity: 1 })

import Mondstadt from "@a/image/loading/genshin/Mondstadt.png?no-inline"
import Liyue from "@a/image/loading/genshin/Liyue.png?no-inline"
import Inazuma from "@a/image/loading/genshin/Inazuma.png?no-inline"
import Sumeru from "@a/image/loading/genshin/Sumeru.png?no-inline"
import Fontaine from "@a/image/loading/genshin/Fontaine.png?no-inline"
import Natlan from "@a/image/loading/genshin/Natlan.png?no-inline"

const logoList = [Mondstadt, Liyue, Inazuma, Sumeru, Fontaine, Natlan]
const logo = logoList[Math.floor(Math.random()*logoList.length)]
const logoStyle = {
    "mask-image": `url("${logo}")`,
    "-webkit-mask-image": `url("${logo}")`,
}

const textList = [
    {
        title: "你说得对",
        content: "但是《原神》是由米哈游自主研发的一款全新开放世界冒险游戏。<br/>游戏发生在一个被称作「提瓦特」的幻想世界。<br/>同时，逐步发掘「原神」的真相。"
    },
    {
        title: "你知道吗？",
        content: "不要让树漂浮。"
    }
]

const text = textList[Math.floor(Math.random()*textList.length)]


import Loading from "@/assets/image/loading/genshin/loading.svg"
import LoadingMinecraft from "@/assets/image/loading/genshin/loading-minecraft.svg"

const laoding = [
    [Loading, 94],
    [LoadingMinecraft, 92.3]
]as [string, number][]

const loadingUrl = laoding[Math.floor(Math.random()*laoding.length)]

const loadingStyle = {
    "mask-image": `url(" ${loadingUrl[0]} ")`,
    "-webkit-mask-image": `url(" ${loadingUrl[0]} ")`,
}

const loadingTime = loadingUrl[1]
</script>


<template>
<section :style="style">
    <div class="logo mask" :style="logoStyle"></div>
    <div class="text">
        <p class="title">{{ text.title }}</p>
        <p class="content" v-html="text.content"></p>
    </div>
    <div class="line"></div>
    <div class="fill-mask mask" :style="loadingStyle">
        <div class="fill" :style="{ width: width+'%' }"></div>
    </div>
</section>
</template>


<style scoped>
section {
    background: #1c1b22;
    transition: opacity 600ms ease;
}

.logo {
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    width: 18vmin;
    height: 18vmin;
    background-color: #d5bc8d;
}

.text {
    position: absolute;
    left: 50%;
    top: 82%;
    width: 64vmin;
    max-width: 90%;
    transform: translate(-50%, -100%);
    color: #d5bc8d;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 1.8vmin;
    text-align: center;
    user-select: none;
}

.text .title {
    font-size: 2.1vmin;
    line-height: 2;
}

.fill-mask {
    position: absolute;
    left: 50%;
    bottom: 12%;
    transform: translate(-50%, 50%);
    width: 36vmin;
    height: 4.5vmin;
    background-color:#38373d;
}

.fill {
    height: 100%;
    background-color: #ece5da;
    transition: width 400ms linear;
}

.line {
    position: absolute;
    bottom: 12%;
    transform: translateY(50%);
    width: 100%;
    height: 0.3vmin;
}
.line::before {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: calc(50% - 22vmin);
    background-color: #38373d;
}
.line::after {
    content: "";
    position: absolute;
    right: 0;
    height: 100%;
    width: calc(50% - 22vmin);
    background-color: #38373d;
}
</style>