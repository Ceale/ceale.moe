<script setup lang="ts">
import { inject, ref, watch, type Ref } from "vue"
import { sleep } from "@/util/sleep"

const emit = defineEmits(["close"])

const loaded = inject<Ref<boolean>>("loaded")
watch(loaded!, () => hide())

let animation_finish = false
const timer = setInterval(() => {
    width.value += Math.floor(Math.random()*30) + 3
    if ( width.value > 94.2 ) {
        clearInterval(timer)
        width.value = 94.2
        animation_finish = true
        hide()
    }
}, 275)

const hide = async () => {
    if (!animation_finish || !loaded!.value) return
    await sleep(800)
    width.value = 100
    await sleep(400)
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
    "mask-size": "cover",
    "-webkit-mask-size": "cover"
}

const textList = [
    {
        title: "你说得对",
        content: "但是《原神》是由米哈游自主研发的一款全新开放世界冒险游戏。<br/>游戏发生在一个被称作「提瓦特」的幻想世界。<br/>同时，逐步发掘「原神」的真相。"
    }
]

const text = textList[Math.floor(Math.random()*textList.length)]
</script>


<template>
<section :style="style">
    <div class="logo" :style="logoStyle"></div>
    <div class="text">
        <p class="title">{{ text.title }}</p>
        <p class="content" v-html="text.content"></p>
    </div>
    <div class="line"></div>
    <div class="fill-mask">
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
    width: 140px;
    height: 140px;
    background-color: #d5bc8d;
}

.text {
    position: absolute;
    left: 50%;
    top: 82%;
    width: 500px;
    max-width: 90%;
    transform: translate(-50%, -100%);
    color: #d5bc8d;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    user-select: none;
}

.text .title {
    font-size: 16px;
    line-height: 2;
}

.fill-mask {
    position: absolute;
    left: 50%;
    bottom: 12%;
    transform: translate(-50%, 50%);
    width: min(285px, 60vw);
    height: min(37px, 7.8vw);
    mask-image: url("@a/image/loading/genshin/loading.svg");
    -webkit-mask-image: url("@a/image/loading/genshin/loading.svg");
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
    height: 2px;
}
.line::before {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: calc(50% - min(175px, 38vw));
    background-color: #38373d;
}
.line::after {
    content: "";
    position: absolute;
    right: 0;
    height: 100%;
    width: calc(50% - min(175px, 38vw));
    background-color: #38373d;
}
</style>